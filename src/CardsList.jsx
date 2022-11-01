import Cards from "./Cards";
import Data from "./Data"

const CardsList = () => {
    return(
        <div className="cards_list">

            {Data.map(function(data){
                return <Cards 
                        img = {data.imgsrc}
                        heading = {data.heading}
                        name = {data.name}
                        link = {data.link}
                    />
            })}
        </div>
    )
}
export default CardsList
