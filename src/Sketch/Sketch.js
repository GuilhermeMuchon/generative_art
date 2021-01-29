import useScript from '../hooks/useScript';
import ReturnButton from '../ReturnButton/ReturnButton.js';

function Sketch(props) {
    useScript("../sketches-studies/sketch0" + props.id + ".js");
    return(
        <ReturnButton/>
    );
}

export default Sketch;