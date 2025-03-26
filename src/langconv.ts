// Mapping of franc-min language codes to BCP 47 language codes for SpeechSynthesis
const langMap: Record<string, string> = {
    afr: "af",    // Afrikaans
    amh: "am",    // Amharic
    ara: "ar",    // Arabic
    asm: "as",    // Assamese
    aze: "az",    // Azerbaijani
    bel: "be",    // Belarusian
    ben: "bn",    // Bengali
    bod: "bo",    // Tibetan
    bos: "bs",    // Bosnian
    bul: "bg",    // Bulgarian
    cat: "ca",    // Catalan
    ceb: "ceb",   // Cebuano
    ces: "cs",    // Czech
    cmn: "zh-CN", // Mandarin Chinese (Simplified)
    cym: "cy",    // Welsh
    dan: "da",    // Danish
    deu: "de",    // German
    ell: "el",    // Greek
    eng: "en-US", // English
    est: "et",    // Estonian
    eus: "eu",    // Basque
    fas: "fa",    // Persian (Farsi)
    fin: "fi",    // Finnish
    fra: "fr",    // French
    guj: "gu",    // Gujarati
    hau: "ha",    // Hausa
    heb: "he",    // Hebrew
    hin: "hi",    // Hindi
    hrv: "hr",    // Croatian
    hun: "hu",    // Hungarian
    hye: "hy",    // Armenian
    ind: "id",    // Indonesian
    isl: "is",    // Icelandic
    ita: "it",    // Italian
    jav: "jv",    // Javanese
    jpn: "ja",    // Japanese
    kan: "kn",    // Kannada
    kat: "ka",    // Georgian
    kaz: "kk",    // Kazakh
    khm: "km",    // Khmer
    kor: "ko",    // Korean
    kur: "ku",    // Kurdish
    lao: "lo",    // Lao
    lat: "la",    // Latin
    lav: "lv",    // Latvian
    lit: "lt",    // Lithuanian
    ltz: "lb",    // Luxembourgish
    mal: "ml",    // Malayalam
    mar: "mr",    // Marathi
    mkd: "mk",    // Macedonian
    mlg: "mg",    // Malagasy
    mlt: "mt",    // Maltese
    mon: "mn",    // Mongolian
    mya: "my",    // Burmese
    nep: "ne",    // Nepali
    nld: "nl",    // Dutch
    nor: "no",    // Norwegian
    nya: "ny",    // Chichewa
    ori: "or",    // Odia (Oriya)
    pan: "pa",    // Punjabi
    pol: "pl",    // Polish
    por: "pt",    // Portuguese
    ron: "ro",    // Romanian
    rus: "ru",    // Russian
    sin: "si",    // Sinhala
    slk: "sk",    // Slovak
    slv: "sl",    // Slovenian
    som: "so",    // Somali
    spa: "es",    // Spanish
    srp: "sr",    // Serbian
    sun: "su",    // Sundanese
    swa: "sw",    // Swahili
    swe: "sv",    // Swedish
    tam: "ta",    // Tamil
    tel: "te",    // Telugu
    tha: "th",    // Thai
    tur: "tr",    // Turkish
    ukr: "uk",    // Ukrainian
    urd: "ur",    // Urdu
    uzb: "uz",    // Uzbek
    vie: "vi",    // Vietnamese
    xho: "xh",    // Xhosa
    yor: "yo",    // Yoruba
    zul: "zu",    // Zulu
};

/**
 * Get the corresponding BCP 47 language code for speech synthesis.
 * If the language is not in the map, fall back to a default.
 */
export function getSpeechLang(francLang: string, defaultLang = "en-US"): string {
    return langMap[francLang] || defaultLang;
}
