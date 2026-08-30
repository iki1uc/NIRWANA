import { THREE } from "./3.js";
import { NINE } from "./9.js";
import { TWENTY_SEVEN } from "./27.js";
import { extendedDQF } from "./81.js";
import { PQ_ROOT } from "./729.js";
import { ALL_IN_ALL_OUR } from "./ALL_IN_ALL_OUR.js";

export function pipelineblitz(x, y, z) {

    const stage3   = THREE(x, y, z);
    const stage9   = NINE(x, y, z);
    const stage27  = TWENTY_SEVEN(x, y, z);
    const stage81  = extendedDQF(x, y, z);
    const stage729 = PQ_ROOT(x, y, z);

    const all      = ALL_IN_ALL_OUR(x, y, z);

    return {
        run: "pipelineblitz",
        input: { x, y, z },
        stages: {
            three: stage3,
            nine: stage9,
            twentySeven: stage27,
            eightyOne: stage81,
            sevenTwentyNine: stage729
        },
        all
    };
}
