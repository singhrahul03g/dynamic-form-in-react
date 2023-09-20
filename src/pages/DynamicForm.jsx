import { useState } from "react";
import "./DynamicForm.css";
import App from "../App";

function DynamicForm(props) {
  const formFields = props.formFields;

  const [state, setState] = useState({
    Name: "",
    Age: 0,
    Gender: "male",
    Hobbies: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state, "all values");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.name === "Hobbies") {
      const hobbies = [...state.Hobbies, value];
      const hobbySet = new Set(hobbies);
      const result = Array.from(hobbySet);

      setState({
        ...state,
        [name]: result,
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  return (
    <>
    <App/>
      <form onSubmit={handleSubmit}>
        {formFields.length
          ? formFields.map((field, index) => {
              if (field.type !== "radio" || field.type !== "checkbox") {
                return (
                  <div key={index}>
                    <label>
                      {field.type !== "radio" && field.type !== "checkbox"
                        ? field.fieldName
                        : field.value}
                      :
                      <input
                        name={field.fieldName}
                        type={field.type}
                        defaultValue={field.value}
                        required={field.required}
                        maxLength={field.maxLength}
                        min={`${field.min}`}
                        onChange={(e) => handleChange(e)}
                      />
                    </label>
                    <br></br>
                    <br></br>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <input
                      name={field.fieldName}
                      type={field.type}
                      value={field.value}
                      required={field.required}
                      maxLength={field.maxLength}
                      min={`${field.min}`}
                      onChange={(e) => handleChange(e)}
                    />
                    <br></br>
                    <br></br>
                  </div>
                );
              }
            })
          : null}
        <input type="submit" />
      </form>
    </>
  );
}

export default DynamicForm;
