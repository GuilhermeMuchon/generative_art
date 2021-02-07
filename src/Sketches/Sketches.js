import './Sketches.css';
import images from '../img/images';
import { Link } from 'react-router-dom';

function Sketches() {
    return (
        <div className="Sketches">
            {images.map(({ id, src, title, description }) => {
                return (
                    <div className="SketchHolder" key={id}>
                        <Link to={"/sketches/"+id}><img src={src} title={title} alt={description} /></Link>
                    </div>)
            })}
        </div>
    );
}

export default Sketches;