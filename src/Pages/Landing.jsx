import Logo from "../images/Logo.png";
import foto from "../images/LandingPhoto.png";
import { Link } from "react-router-dom";
export function Landing() {
  return (
    <div className="landing">
      <img src={Logo} className="logo" />
      <img src={foto} className="foto" />
      <div className="buttons">
        <button className="button1">
          <Link to="Co_worker_info"> ჩანაწერის დამატება</Link>
        </button>
        <button className="button2">
          {" "}
          <Link to="Laptop_list"> ჩანაწერების სია</Link>
        </button>
      </div>
    </div>
  );
}
