import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div>
      <Link to={props.btn_link}>
        <button type="submit">
          <h3>{props.btn_text}</h3>
        </button>
      </Link>
    </div>
  );
}

export default Button;
