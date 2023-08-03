const TechnicalCard = ({eventName, eventDesc, imageSource}) => {
        return  (
            <div class="card" elevation={8}>
            <img
                class="avatar"
                width="300"
                height="480"
                src={imageSource}
                alt="avatar"/>
            <div class="creditoverlay"></div>
            <div class="info">
                <h1>{eventName}</h1>
                <p>{eventDesc}</p>
            </div>
            </div> 
    )
} 

export default TechnicalCard;




