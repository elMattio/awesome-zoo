import React from "react";
import styles from "./styles.module.css";

const Chats = ({ animals, handleNewChat }) => {

    return (
        animals.map((animal, i) => {
        return(
            <div key={"animal"+i} className={styles.chat} onClick={ () => handleNewChat(animal) }>
                <img src={animal.img} alt="dogs" className={ styles.avatar }/>
                <div>{animal.name}</div>
            </div>
        )
        })

    )
}

export default Chats;