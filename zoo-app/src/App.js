import Chats from "./Chats/Chats";
import Message from "./Message/Message";
import { animals } from "./data/index";
import "./app.css";
import { useState } from "react";

const App = () =>  {

  const [openMessage, setOpenMessage] = useState(false);

  const [selectedAnimal, setSelectedAnimal] = useState({});
  
  const handleNewChat = (animal) => {
    setSelectedAnimal(animal);
    setOpenMessage(true);
  };

  const closeChat = () => {
    setOpenMessage(false);
  };

  return (
    <div className="app-shell">
      <div className="app-container">
        <span className="title"> 
              <span>Chatea con un animal !</span>
        </span>
        <Chats animals={ animals } handleNewChat={ handleNewChat } />
        <Message openMessage={ openMessage } closeChat={ closeChat } animal={selectedAnimal}/>
      </div>
    </div>
  );
}

export default App;
