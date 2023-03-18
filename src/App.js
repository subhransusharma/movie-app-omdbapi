import "./App.css";
import Featured from "./Featured/Featured";
import Header from "./Header/Header";
import Movies from "./Movies/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <Featured />
    </div>
  );
}

export default App;
