// Marker.js
export function MARKER(id, energy = 1) {
    return {
        type: "NC-MARKER",
        id,
        energy,
        pulse: energy * 3,
        signature: `MRK-${id}-${energy}`
    };
}
