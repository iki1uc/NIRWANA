export function SLIDE(value) {
    return {
        type: "SLIDE",
        input: value,
        slide: value * (Math.random() + 0.5),
        drift: Math.sin(value),
        signature: `SLD-${value}`
    };
}
