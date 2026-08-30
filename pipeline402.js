import { EVOTAAL } from "./EVOTAAL.js";
import { NEWEDA_STATE_MACHINE } from "./NEWEDA_STATE_MACHINE.js";

export function pipeline402(input) {

    // Stage 4 → EVOTAAL
    const stage4 = {
        stage: 4,
        meaning: EVOTAAL.interpret(input),
        stabilize: EVOTAAL.stabilize(4)
    };

    // Stage 0 → RAW
    const stage0 = {
        stage: 0,
        state: NEWEDA_STATE_MACHINE(0)
    };

    // Stage 1 → STRUCTURE
    const stage1 = {
        stage: 1,
        state: NEWEDA_STATE_MACHINE(1)
    };

    // Stage 2 → VECTOR
    const stage2 = {
        stage: 2,
        state: NEWEDA_STATE_MACHINE(2)
    };

    return {
        run: "pipeline 4 → 0 → 1 → 2",
        input,
        stages: {
            four: stage4,
            zero: stage0,
            one: stage1,
            two: stage2
        }
    };
}
