import React from "react"

const CulturalCard = ({image, title, desc}) => {
    return (
        <div class="card">
        
        <img src="https://i.ibb.co/1vkX0fx/bg-removebg-preview.png" alt="bg-removebg-preview" border="0" class="bg"/> -->
        <div class="imageHolder">
            <img src={image} />
        </div>
        
        <h1 class="title">{title}</h1>
        <p>{desc}</p>
        <button>Register</button>
        
        </div>
    )
}



