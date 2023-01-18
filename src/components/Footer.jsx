const Footer = () => {
    const date = new Date()
    return (
        <div className="footer">
            <div>
                <span>Copyrigth © Dashboard {date.getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer