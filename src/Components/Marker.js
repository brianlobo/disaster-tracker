import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import { WiThunderstorm, WiVolcano } from 'react-icons/wi'

const Marker = ({ cat, lat, lng, onClick }) => {
    return (
        <div className="marker" onClick={onClick}>
            { cat === "wildfires" && <Icon icon={ fireIcon } className="fire-marker-icon" /> }
            { cat === "severeStorms" && <WiThunderstorm className="storm-marker-icon" /> }
            { cat === "volcanoes" && <WiVolcano className="volcano-marker-icon" />}
        </div>
    )
}

export default Marker