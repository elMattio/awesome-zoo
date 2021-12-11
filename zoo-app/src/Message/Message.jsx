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
        <Modal isOpen={ openMessage }  style={ customStyles } closeTimeoutMS={100}>
            <div className={styles.container}>
                <span className={styles.title}>
                    <button onClick={ closeChat }>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <img src={animal.img} alt="" className={styles.avatar}/>
                    <span>@{animal.name}</span>
                </span>
                
                <div className={styles.body}>

                </div>
                <form id="form-chat" className={styles.footer}>
                    <textarea placeholder="Nuevo mensaje..." rows="1" wrap="soft"></textarea>
                    <button type="submit" className={styles.send}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default Message