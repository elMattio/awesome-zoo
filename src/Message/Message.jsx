import React, { useRef } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:"100%",
        maxWidth:"600px",
        border:"none",
        height:"100%",
        maxHeight:"100%",
        backgroundColor:"#ebebeb",
        padding:"1%"
    },
    overlay: {
        backgroundColor:"#ebebeb"
    }
};

Modal.setAppElement('#root');

const Message = ({ openMessage, closeChat, animal, sendMessage, messages }) => {

    const messageRef = useRef();
    const ulRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(messageRef.current.value === "") return;
        if(!(/\S/.test(messageRef.current.value))) return;
        sendMessage(messageRef.current.value);
        messageRef.current.value = "";
        setTimeout(() => {
            ulRef.current.scrollTop = "9999"
        }, 10)
        setTimeout(() => {
            ulRef.current.scrollTop = "9999"
        }, 460)
    };

    return(
        <Modal isOpen={ openMessage }  style={ customStyles } closeTimeoutMS={ 200 }>
            <div className={styles.container}>
                <span className={styles.title}>
                    <button onClick={ closeChat }>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <img src={animal.img} alt="" className={styles.avatar}/>
                    <span>@{animal.name}</span>
                </span>
                
                <ul ref={ ulRef } className={styles.body}>
                    {messages.map((msg, i) => {
                        let even = i%2===0;
                        return(
                            <li key={"msg"+i} className={[styles.bubbleContainer, even ? styles.bubbleContainerRight : styles.bubbleContainerLeft].join(" ")}>
                                <div className={[styles.bubble, even ? styles.bubbleRight:styles.bubbleLeft].join(" ")}>
                                    {msg}
                                    <div className={[styles.arrow, even ? styles.arrowRight:styles.arrowLeft].join(" ")}></div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <form className={styles.footer} onSubmit={ handleSubmit }>
                    <textarea ref={ messageRef } placeholder="Nuevo mensaje..." rows="1" wrap="soft"></textarea>
                    <button type="submit" className={styles.send}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default Message