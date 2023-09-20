import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <span>
        <Link to={`/`}>Home</Link>
      </span>
      <span>
        <Link to={`/display-window-width`}>Display Window Width</Link>
      </span>
      <span>
        <Link to={`/dynamic-form`}>Dynamic Form</Link>
      </span>
    </>
  );
}

export default App;
