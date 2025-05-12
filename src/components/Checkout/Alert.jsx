function Alert({ content, onClose }) {
    return (
        <div className="alertOverlay">
            <div className="alert__content">
                {content}
                <button className="checkoutButton" onClick={onClose}>Salir</button>
            </div>
        </div>
    );
}

export default Alert;