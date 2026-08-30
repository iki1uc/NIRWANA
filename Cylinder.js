// Cylinder.js
export function CYLINDER(radius, height, spin = 0) {
    return {
        type: "NC-CYLINDER",
        radius,
        height,
        spin,
        volume: Math.PI * radius * radius * height,
        signature: `CYL-${radius}-${height}-${spin}`
    };
}
