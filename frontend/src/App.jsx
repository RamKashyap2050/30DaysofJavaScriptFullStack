import { useState } from "react";
import Day9 from "./components/day9";

function App() {
  // Initializing states for the name and day9 status
  //UseState Structure is as follows const [variable name, updating variable name mostly uses Set] = useState(DataType Annotation)
  //String has useState("")
  //Boolean has useState(false)
  //Array has useState([])
  //Integer has useState(null)
  const [name, setName] = useState("");
  const [day9, setDay9] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue); // Update name state with input value

    if (inputValue === "") {
      setDay9(false); // Hide Day9 component if input is empty
    } else {
      setDay9(true); // Show Day9 component if there's a name
    }
  };

  return (
    <>
      <div>
        {/* Using onSubmit to handle the form submit action */}
        <form
          style={{ display: "flex", textAlign: "center", padding: "16px 12px" }}
        >
          <label>Enter Your Name to Display</label>
          {/* Binding the input field to the name state */}
          <input
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </form>

        {/* Conditionally rendering the Day9 component when day9 is true which will be true only when True and Passing Props to Day 9*/}
        {day9 && <Day9 name={name} />}
      </div>
    </>
  );
}

export default App;
