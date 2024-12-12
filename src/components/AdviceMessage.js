import styles from './AdviceMessage.module.css'

function AdviceMessage({ message, buttontext1, buttontext2, onConfirm, onCancel }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <div>
                    <button onClick={onConfirm}>{buttontext1}</button>
                    <button onClick={onCancel}>{buttontext2}</button>
                </div>
            </div>
        </div>
    )
}

export default AdviceMessage