import Chats from "./Chats/Chats";
import Message from "./Message/Message";
import Welcome from "./Welcome/Welcome";
import { animals } from "./data/index";
import { useEffect, useState } from "react";
import useAnimals from "./hooks/useAnimals";
import "./app.css";

const App = () =>  {

  const [openMessage, setOpenMessage] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState("");
  const animal = useAnimals(selectedAnimal.name);

  const closeWelcome = () => {
    setOpenWelcome(false);
  };

  const handleNewChat = (animal) => {
    setSelectedAnimal(animal);
    setOpenMessage(true);
  };

  const closeChat = () => {
    setOpenMessage(false);
    setMessages([]);
    setLastMessage("");
  };

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
    setLastMessage(`${newMessage}_____${Date.now().toString()}`);
  };

  useEffect(() => {
    if(JSON.stringify(animal) === "{}") return;
    if(lastMessage === "") return;
    setTimeout(() => {
      let response = animal.speak(lastMessage.split("_____")[0]);
      setMessages(m => [...m, response]);
    }, 450)
  }, [lastMessage, animal]);

  return (
    <div className="app-shell">
      <div className="app-container">
        <h1 className="title"> 
              Chatea con alguno !
        </h1>
        <Welcome openWelcome={ openWelcome } closeWelcome={ closeWelcome }/>
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
