export function WETTE(einsatz = 1) {
    return {
        type: "WETTE",
        einsatz,
        risk: Math.random() * einsatz,
        signature: `WET-${einsatz}`
    };
}
