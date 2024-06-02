export const Header = ()=>{
    return <div>
      <div className="flex header" >
    <img src={require("../Images/shark1.png")} alt="shark"/>
    <img src={require("../Images/shark3.png")} alt="shark"/>
    <h1><span>As seen on &#8594;</span> SHARK TANK INDIA </h1>
    <img src={require("../Images/shark2.png")} alt="shark"/>
    <p>&#10005;
    </p>
    </div>
    <div className="flex plus-header">
      <div>
        <h2 className="gold"><span>PLUS </span>GOLD</h2>
      </div>

      <div className="flex plus-header-right">
        <p>Start Saving</p>
        <p>Gold Rush Festival</p>
        <p>Partner with us</p>
        <p> Download App</p>

      </div>
    </div>
  </div>
}