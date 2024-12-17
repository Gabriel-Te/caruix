import styles from './AdviceMessage.module.css'

function AdviceMessage(props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{props.message}</p>
                <div>
                    <button onClick={props.onConfirm}>{props.buttontext1}</button>
                    <button onClick={props.onCancel}>{props.buttontext2}</button>
                </div>
            </div>
        </div>
    )
}

export default AdviceMessage