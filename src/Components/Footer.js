import { SiNasa } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Disaster Tracker</h1>
            <h3><SiNasa className="nasa-icon"/>(Powered by NASA's EONET API)</h3>
        </footer>
    )    
}

export default Footer