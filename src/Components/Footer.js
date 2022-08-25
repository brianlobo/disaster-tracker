import { SiNasa } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Disaster Tracker</h1>
            <h3><SiNasa className="nasa-icon"/><a href={ "https://eonet.gsfc.nasa.gov/" } target="_blank">Powered by NASA's EONET API</a></h3>
        </footer>
    )    
}

export default Footer