import Modal from "react-modal";
import styles from "./styles.module.css";
import image from "../imgs/bromista.jpg";

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

const Welcome = ({ openWelcome, closeWelcome }) => {
    return(
        <Modal isOpen={ openWelcome }  style={ customStyles } closeTimeoutMS={ 200 }>
            <div className={ styles.container }>
                <h1 className={ styles.title}>Bienvenidos al Zoo !</h1>
                <p> Este es el hogar de los animales mas ocurrentes, de hecho hace unos dias un loro bromista le enseño a todos los animales a repetir lo que escuchan, aunque no pueden evitar que se les escape un rugido o graznido de vez en cuando.</p>
                <p> Aqui hay una foto del culpable:</p>
                <img src={image} alt=" " />
                <p>Todavia no crees que los animales puedan hablar?</p>
                <button className={ styles.btn } onClick={ closeWelcome }>Inténtalo !</button>
            </div>
        </Modal>
    )
};

export default Welcome;