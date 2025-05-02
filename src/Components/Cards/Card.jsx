import Icon from "../Icons/Icon"
import './Card.css'

const Card = ({gameEnd, player, index, onPlay}) =>{

    let icon = <Icon/>

    if(player == "X"){
        icon = <Icon name="cross"/>
    }
    else if(player == "O"){
        icon = <Icon name="circle"/>
    }

    return (
        <div className="card" onClick={() =>!gameEnd &&player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;