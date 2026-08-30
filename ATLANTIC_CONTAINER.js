export const ATLANTIC_CONTAINER = {
    MANA: 1.618,        // Energie-Konstante
    AURA: 2.718,        // Feld-Konstante
    ZEN: 0,             // Ruhe-Konstante
    GEIST: "i",         // Struktur-Konstante
    DJINN: Math.PI,     // Zyklus-Konstante

    // Flaschen-Status
    state() {
        return {
            filled: true,
            constants: ["MANA", "AURA", "ZEN", "GEIST", "DJINN"],
            volume: 5,
            type: "ATLANTIC-FLASCHE"
        };
    }
};
