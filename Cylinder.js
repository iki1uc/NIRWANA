export function CYLINDER(radius, height, spin = 1) {
    return {
        type: "CYLINDER",
        radius,
        height,
        spin,
        volume: Math.PI * radius * radius * height,
        signature: `CYL-${radius}-${height}-${spin}`
    };
}
