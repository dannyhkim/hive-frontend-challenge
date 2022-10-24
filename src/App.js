import { Dropdown } from "./components/Dropdown";
import "./App.css";

function App() {
  const options = [
    { value: "Oliver Hansen", label: "Oliver Hansen" },
    { value: "Van Henry", label: "Van Henry" },
    { value: "April Tucker", label: "April Tucker" },
    { value: "Ralph Hubbard", label: "Ralph Hubbard" },
  ];

  return (
    <div className="App">
      <Dropdown placeholder="Single select..." options={options} />
      <Dropdown isMultiselect placeholder="Multi select..." options={options} />
    </div>
  );
}

export default App;
