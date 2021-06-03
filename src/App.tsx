import MenuBar from "./menu/index";
import './App.css';

function App() {
  return (
    <div className="container">

      <div className = "header">
        <div className = "logo-container">
          <img className = "logo" src = "TamaKeik-logo.png" alt = "Logo TamaKèik"/>
        </div>
        <text className = "title"> Menu </text>
      </div>
      <div className = "content-container">
        <MenuBar/>
      </div>
    </div>
  );
}

export default App;
