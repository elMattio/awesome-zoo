import React from "react";
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
        height:"100vh",
        maxHeight:"100vh",
        backgroundColor:"#ebebeb",
        padding:"1%"
    },
    overlay: {
        backgroundColor:"#ebebeb"
    }
};

Modal.setAppElement('#root');

const Message = ({ openMessage, closeChat, animal }) => {
    return(
        <Modal isOpen={ openMessage }  style={ customStyles }>
            <div className={styles.container}>
                <span className={styles.title}>
                    <img src={animal.img} alt="" className={styles.avatar}/>
                    <span>@{animal.name}</span>
                </span>
                
                <div className={styles.body}>
                    body
                    <button onClick={closeChat}>cerrar</button>
                </div>
                <div className={styles.footer}>
                    <textarea placeholder="Nuevo mensaje..." rows="1" wrap="soft"></textarea>
                    <button className={styles.send}>
                        <i class="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Message