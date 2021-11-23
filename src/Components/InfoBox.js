const InfoBox = ({ info }) => {
    return (
        <div className="info-box">
            <h2>Event Info</h2>
            <ul> 
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Type: <strong>{ info.cat }</strong></li>
                <li>Name: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default InfoBox