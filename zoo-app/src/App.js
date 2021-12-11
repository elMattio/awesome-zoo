import Chats from "./Chats/Chats";
import { animals } from "./data/index";
import "./app.css";

const App = () =>  {
  return (
    <div className="app-shell">
      <div className="app-container">
      <span className="title"> 
            <span>Chatea con un animal !</span>
      </span>
      <Chats animals={ animals }/>
      </div>
    </div>
  );
}

export default App;
