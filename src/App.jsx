import "./App.css";
import DisplayData from "./pages/DisplayData";
import DisplayWindowWidth from "./pages/DisplayWindowWidth";
import DynamicForm from "./pages/DynamicForm";
import { formFields } from "./utils/formFields";

function App() {


  return (
    <>
      <DisplayData/>
        <DisplayWindowWidth/>
        <DynamicForm formFields={formFields}/>

    </>
  );
}

export default App;
