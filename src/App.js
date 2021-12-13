import Chats from "./Chats/Chats";
import Message from "./Message/Message";
import { animals } from "./data/index";
import "./app.css";
import { useEffect, useState } from "react";
import useAnimals from "./hooks/useAnimals";

const App = () =>  {

  const [openMessage, setOpenMessage] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState("");
  const animal = useAnimals(selectedAnimal.name);

  const handleNewChat = (animal) => {
    setSelectedAnimal(animal);
    setOpenMessage(true);
  };

  const closeChat = () => {
    setOpenMessage(false);
    setMessages([]);
  };

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
    setLastMessage(`${newMessage}_____${Date.now().toString()}`);
  };

  useEffect(() => {
    if(JSON.stringify(animal) === "{}") return;
    setTimeout(() => {
      let response = animal.speak(lastMessage.split("_____")[0]);
      setMessages(m => [...m, response]);
    }, 450)
  }, [lastMessage])

  return (
    <div className="app-shell">
      <div className="app-container">
        <span className="title"> 
              <span>Chatea con un animal !</span>
        </span>
        <Chats animals={ animals } 
          handleNewChat={ handleNewChat } 
        />
        <Message openMessage={ openMessage } 
          closeChat={ closeChat } 
          animal={selectedAnimal} 
          sendMessage={ sendMessage }
          messages={ messages }
        />
      </div>
    </div>
  );
}

export default App;
