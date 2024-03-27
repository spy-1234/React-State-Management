import { useState } from "react";

export default function LikeButton(){
    let [isLike, setisLike] = useState(false) // liking the button -- false - emmpty & true - fill
    let [click, setclick] = useState(0) // click counting

    let toggleButton = () => {
                setisLike(!isLike)
                setclick(click + 1)
            }

    let likestyles = {color: "red"}

    return (
        <div>
            <p>Click = {click}</p>
            <p onClick={toggleButton}>
                {
                    isLike ? <i class="fa-solid fa-heart" style={likestyles}></i> : <i className="fa-regular fa-heart"></i>
                }</p>
        </div>
    );
}