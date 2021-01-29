import './ReturnButton.css';
import { Link } from "react-router-dom";

function ReturnButton() {
    return(
        <div className="ReturnButton">
            <Link to="App"></Link>
        </div>
    );
}

export default ReturnButton;