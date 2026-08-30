import { CYLINDER } from "./CYLINDER.js";
import { MARKER } from "./MARKER.js";

export function BIOTOB_PIPELINEBLITZ(r, h, markerId) {

    const cyl = CYLINDER(r, h, 9);     // Spin 9 = Boost
    const mark = MARKER(markerId, 3);  // Energie 3 = Elektron-Impuls

    const flow = {
        movement: cyl.spin * mark.energy,
        torque: cyl.radius * mark.pulse,
        channel: `${cyl.signature}-${mark.signature}`
    };

    return {
        run: "BIOTOB-BUILD",
        cylinder: cyl,
        marker: mark,
        flow
    };
}
