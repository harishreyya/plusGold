import { useState } from "react"

export const SharkAd = ()=>{
const [display,setDisplay] = useState(true);

function hide(){
    setDisplay(false)
}

if(display){
    return <div>
        <div className="flex header" >
    <img src={require("../Images/shark1.png")} alt="shark"/>
    <img src={require("../Images/shark3.png")} alt="shark"/>
    <h1><span>As seen on &#8594;</span> SHARK TANK INDIA </h1>
    <img src={require("../Images/shark2.png")} alt="shark"/>
    <p className="cross" onClick={hide}>&#10005;</p>
    </div>
    </div>
}

}