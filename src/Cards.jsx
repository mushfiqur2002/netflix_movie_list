import React from "react"

// function Image(){
//     return <img src={image1} alt="image"/>
// }
// const ele = {}
function Cards(pro){
    return(
        <>
            <div className="card_div">
                <div className="container">
                    <div className="card_image">
                        <img src={pro.img} alt="image"/>
                    </div>
                    <div className="card_text">
                        <div className="heading">
                            <p>{pro.heading}</p>
                        </div>
                        <div className="name">
                            <p>{pro.name}</p>
                        </div>
                        <div className="btn">
                            <a href={pro.link} target="_blank">
                                <button>Watch Now</button>
                            </a>
                        </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Cards