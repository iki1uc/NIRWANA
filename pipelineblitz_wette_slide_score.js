import { WETTE } from "./WETTE.js";
import { SLIDE } from "./SLIDE.js";
import { SCORE } from "./SCORE.js";

export function pipelineblitz_wette_slide_score(einsatz) {

    const wette = WETTE(einsatz);
    const slide = SLIDE(wette.risk);
    const score = SCORE(slide.slide, true); // planlos = chaos = true

    return {
        run: "pipelineblitz wette+slide+score",
        wette,
        slide,
        score,
        status: "variabel-planlos"
    };
}
