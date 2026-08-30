// pipelineblitz_cylinder_marker.js
import { CYLINDER } from "./Cylinder.js";
import { MARKER } from "./Marker.js";

export function pipelineblitz_cylinder_marker(r, h, markerId) {

    const cyl = CYLINDER(r, h, 9);     // Spin 9 = PQ‑Boost
    const mark = MARKER(markerId, 3);  // Energy 3 = Elektron‑Impuls

    const flow = {
        movement: cyl.spin * mark.energy,
        torque: cyl.radius * mark.pulse,
        channel: `${cyl.signature}-${mark.signature}`
    };

    return {
        run: "pipelineblitz cylinder+marker",
        cylinder: cyl,
        marker: mark,
        flow
    };
}
