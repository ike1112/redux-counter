import "./styles.css";
//import the Count component
import Count from "./component/Count";

export default function App() {
  return (
    <div className="App">
      <h1>A counter practice for Redux</h1>
      {/* render the Count component */}
      <Count />
    </div>
  );
}
