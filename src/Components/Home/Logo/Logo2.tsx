import "../Logo/Logo2.css";

import logoImage from "../Logo/image.png"

function Logo2(): JSX.Element {
    return (
        <div id="logo" className="Logo">
			<img id="image" src= {logoImage}></img>
        </div>
    );

}

export default Logo2;