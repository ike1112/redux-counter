import "./style.css";
//import the Count component
import CountUI from "./component/CountUI";

export default function App() {
  return (
    <div className="App">
      <h1>A counter practice for Redux</h1>
      {/* render the Count component */}
      <CountUI />
    </div>
  );
}
