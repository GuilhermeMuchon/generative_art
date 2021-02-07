import { useParams } from "react-router-dom";
import useScript from '../hooks/useScript';
import ReturnButton from '../ReturnButton/ReturnButton.js';

function Sketch() {
    let { sketchId } = useParams();

    useScript("https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.js");
    useScript(window.location.origin + "/src/sketches-studies/sketch0" + sketchId + ".js");

    return (
        <ReturnButton />
    );
}

export default Sketch;