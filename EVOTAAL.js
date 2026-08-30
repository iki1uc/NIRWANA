// EVOTAAL.js
export const EVOTAAL = {
    // NC‑Konstanten
    MANA: 1.618,
    AURA: 2.718,
    ZEN: 0,
    GEIST: "i",
    DJINN: Math.PI,

    // NC‑Wort‑Interpretation
    interpret(word) {
        const map = {
            "neweda": "STATE",
            "nirwana": "CALC",
            "evogreen": "STABILITY",
            "housten": "REFERENCE_ERROR",
            "50er": "TRIGGER",
            "qi": "ENERGY_FLOW",
            "iqq": "INTELLIGENCE_CURVE",
            "queerenn": "CROSS_LINK",
            "tanken": "ENERGY_LOAD"
        };
        return map[word.toLowerCase()] || "UNKNOWN";
    },

    // Stabilisierung
    stabilize(rith) {
        return rith >= 2 ? "stable" : "unstable";
    }
};
