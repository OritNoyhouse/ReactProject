import "../Logo/Logo.css";

import logoImage from "../Logo/Logo.png"

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src= {logoImage}></img>
        </div>
    );

}

export default Logo;