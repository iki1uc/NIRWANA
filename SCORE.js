export function SCORE(base, chaos = true) {
    const randomBoost = chaos ? Math.random() * base : base;
    return {
        type: "SCORE",
        base,
        boost: randomBoost,
        total: base + randomBoost,
        signature: `SCR-${base}-${chaos}`
    };
}
