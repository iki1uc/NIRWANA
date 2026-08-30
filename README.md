# NIRWANA · NC‑System · Dispatcher

NIRWANA ist ein modularer, mathematischer NC‑Raum, der aus mehreren
Stages, Engines und Containern besteht.  
Das System verbindet Berechnung, Zustand, Energiefluss und NC‑Sprache
zu einem konsistenten Framework.

---

## 🌌 Architektur · Überblick

NIRWANA besteht aus 7 Kern‑Räumen:

1. **NIRWANA.calc**  
   Berechnungsraum (RIR.Core, DQF, XyX, 243)

2. **NEWEDA.state**  
   Zustandsraum (RAW → STRUCTURE → VECTOR → FUSION)

3. **EVOTAAL**  
   NC‑Sprache, Bedeutungs‑Engine, Referenz‑Layer

4. **EVOGREEN**  
   Stabilitätsraum (Norm‑Erhaltung, Energie‑Konstanz)

5. **ATLANTIC**  
   Übergangsraum (Bindet NIRWANA ↔ NEWEDA)

6. **BERMUDA**  
   Drei‑Raum‑Schnittmenge (calc ↔ state ↔ matrix)

7. **TD‑SA**  
   Atom‑Stage (Elektron, Proton, Neutron)

---

## 📁 Dateien · Übersicht

### `index.html`
Dispatcher‑UI  
Führt alle Module aus und zeigt Ergebnisse in Panels.

### `ID.html`
Identitäts‑Matrix  
Enthält TMP‑Segmente und Atom‑Struktur.

### `RITH_ENGINE.js`
Norm‑Engine  
Berechnet RAW/STRUCTURE/VECTOR/FUSION.

### `EVOTAAL.js`
NC‑Grammatik  
Interpretation von Bewandnis‑Wörtern, Stabilisierung, Referenz‑Layer.

### `ATLANTIC_CONTAINER.js`
Mathematische Flasche  
Speichert MANA, AURA, ZEN, GEIST, DJINN.

### `TD-SA.html`
Atom‑Monitor  
Live‑Anzeige von Elektron, Proton, Neutron.

---

## 🔮 NC‑Konstanten

| Wort | Bedeutung |
|------|-----------|
| **MANA** | Energie‑Konstante |
| **AURA** | Feld‑Konstante |
| **ZEN** | Ruhe‑Konstante |
| **GEIST** | Struktur‑Konstante |
| **DJINN** | Transformations‑Konstante |
| **QI** | Energiefluss |
| **IQQ** | Intelligenz‑Quadratic |
| **EVOGREEN** | Stabilität |
| **EVOCITY** | Modul‑Stadt |
| **EVOTAAL** | NC‑Sprache |
| **BERMUDA** | Schnittmengen‑Raum |
| **ATLANTIC** | Übergangs‑Raum |

---

## ⚙️ NEWEDA · State Machine

| RITH | State |
|------|--------|
| 0 | RAW |
| 1 | STRUCTURE |
| 2 | VECTOR |
| 3–4 | FUSION |

---

## 🔧 Installation

Clone das Repository:

