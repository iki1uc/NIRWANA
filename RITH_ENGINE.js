// ============================================================
// RITH · TMP-ENGINE · Universell · Entkoppelt
// ============================================================
//
// Aufgabe:
// - Segmentmatrix TMP geführt laden (volle 9-Segment-Matrix aus id.html)
// - 8→9-Norm dynamisch prüfen
// - RITH-WERT dynamisch berechnen (0–4), jede Stufe mit echter Bedingung
// - keine festen Werte, keine Zufallswerte
// ============================================================
const RITH_ENGINE = {
    tmp: {},
    rith: 0,

    init() {
        this.tmpReset();
        this.loadMatrix();
        this.calcRITH();
        this.updateUI();
    },

    tmpReset() {
        this.tmp = {};
        console.log("🌀 RITH TMP: Speicher geleert");
    },

    loadMatrix() {
        // Volle Segmentmatrix, identisch zu #iki1uc-id / id.html
        this.tmp.matrix = [
            { type: "HY",        chain: "◉ → 3 → 9 → ◎ → 81 → 3 ↺" },
            { type: "PE",        chain: "◉ → 9 → ◎ → 81 → ◆ → △ → ▣" },
            { type: "PER",       chain: "3 → 9 → 81 → ◆ → 756 → △ → 27 → ▣ → 3" },
            { type: "TRANS",     chain: "◎ → 81 → ◆ → △" },
            { type: "WARB",      chain: "81 → ◆ → △ → 27" },
            { type: "KANAL",     chain: "756 → △ → 27 → ▣" },
            { type: "TMP-alpha", chain: "3 → ◎ → 27" },
            { type: "TMP-beta",  chain: "9 → 81 → ▣" },
            { type: "TMP-gamma", chain: "◆ → 756 → △" }
        ];
        console.log(`🌀 RITH TMP: Matrix geladen (${this.tmp.matrix.length} Segmente)`);
    },

    // -- Kettenanalyse: liefert nodes/edges/closed für ein Segment --
    parseChain(chain) {
        const hasLoopSymbol = chain.includes("↺");
        const clean = chain.replace("↺", "").trim();
        const tokens = clean.split("→").map(t => t.trim()).filter(Boolean);
        const nodes = tokens.length;
        const edges = nodes > 0 ? nodes - 1 : 0;
        const closed = hasLoopSymbol || (nodes > 1 && tokens[0] === tokens[nodes - 1]);
        return { nodes, edges, closed };
    },

    // -- 8→9-Norm: exakt 9 Knoten, 8 Kanten, geschlossen --
    checkNorm(chain) {
        const { nodes, edges, closed } = this.parseChain(chain);
        return nodes === 9 && edges === 8 && closed;
    },

    calcRITH() {
        const matrix = this.tmp.matrix;

        const raw = matrix.length > 0;

        // ECHTER structure-Check: mindestens 1 Segment ist geschlossen
        // (Start = Ende der Kette), nicht mehr nur "enthält irgendwo eine 3".
        const structure = raw && matrix.some(seg => this.parseChain(seg.chain).closed);

        const vector = structure && matrix.some(seg => this.checkNorm(seg.chain));
        const fusion = vector && matrix.every(seg => this.checkNorm(seg.chain));

        this.rith = 0;
        if (raw) this.rith++;
        if (structure) this.rith++;
        if (vector) this.rith++;
        if (fusion) this.rith++;

        this.tmp.detail = { raw, structure, vector, fusion };

        console.log("🌀 RITH TMP: raw =", raw, "structure =", structure, "vector =", vector, "fusion =", fusion);
        console.log("🌀 RITH TMP: RITH-WERT =", this.rith);
    },

    updateUI() {
        const el = document.getElementById("rithWert");
        if (el) el.textContent = this.rith;

        const sub = document.getElementById("rithSub");
        if (sub && this.tmp.detail) {
            const d = this.tmp.detail;
            sub.textContent =
                `RAW ${d.raw ? "✅" : "❌"} · STRUCTURE ${d.structure ? "✅" : "❌"} · ` +
                `VECTOR ${d.vector ? "✅" : "❌"} · FUSION ${d.fusion ? "✅" : "❌"}`;
        }
    }
};

window.RITH_ENGINE = RITH_ENGINE;
RITH_ENGINE.init(); // wo kann ich den nutzen name station
