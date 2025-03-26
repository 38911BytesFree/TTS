import { franc } from "franc-min";
import { getSpeechLang } from "./langconv";

// Add initial "Read Selected Text" context menu
console.log("extension startup: add a read-text menu item");
chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: "read-text",
        title: "🔊 Read Text",
        contexts: ["selection"],
    });
});

// Function to start reading text
function startReading(text: string, tab: chrome.tabs.Tab): void {
    console.log("start reading");

    let lang: string = "";
    try {
        lang = getSpeechLang(franc(text));
    } catch (err) {
        console.log("Franc Error: " + (err instanceof Error ? err.message : String(err)));
    }    

    chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: (text: string, lang: string) => {

            const log = (message: string) => {
                chrome.runtime.sendMessage({ log: message });
            };

            log("start talking " + lang);
            const pageLanguage = document.documentElement.lang || "en-US";
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang !== "und" ? lang : pageLanguage;
            chrome.runtime.sendMessage({ reading: true });

            utterance.onend = () => {
                chrome.runtime.sendMessage({ reading: false });
                log("end talking");
            };

            window.speechSynthesis.speak(utterance);
        },
        args: [text, lang]
    });
    console.log("start reading - done");
}

// Function to stop reading
function stopReading(tab: chrome.tabs.Tab): void {
    console.log("stop reading");
    chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        }
    });
}

// Update context menu based on state
function updateContextMenu(isReading: boolean): void {
    console.log("updateContextMenu - " + isReading);
    if (isReading) {
        chrome.contextMenus.remove("read-text", () => {
            if (chrome.runtime.lastError) {
                console.warn(chrome.runtime.lastError.message);
            }
        });
        chrome.contextMenus.create({
            id: "stop-reading",
            title: "🔊 Stop Reading",
            contexts: ["all"],
        });
    } else {
        chrome.contextMenus.remove("stop-reading", () => {
            if (chrome.runtime.lastError) {
                console.warn(chrome.runtime.lastError.message);
            }
        });
        chrome.contextMenus.create({
            id: "read-text",
            title: "🔊 Read Text",
            contexts: ["selection"],
        });
    }
}

// Handle messages sent from DOM context
chrome.runtime.onMessage.addListener((message: { log?: string; reading?: boolean }) => {
    if (message.log) {
        console.log(`[Content Script]: ${message.log}`);
    }
    if ("reading" in message) {
        updateContextMenu(message.reading!);
    }
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!tab || !tab.url || tab.url.startsWith("chrome://")) {
        console.warn("Cannot execute on chrome:// pages");
        return;
    }

    if (info.menuItemId === "read-text" && info.selectionText) {
        startReading(info.selectionText, tab);
    } else if (info.menuItemId === "stop-reading") {
        stopReading(tab);
        chrome.contextMenus.remove("stop-reading", () => {
            if (chrome.runtime.lastError) {
                console.warn(chrome.runtime.lastError.message);
            }
        });
        chrome.contextMenus.create({
            id: "read-text",
            title: "🔊 Read Text",
            contexts: ["selection"],
        });
    }
});
