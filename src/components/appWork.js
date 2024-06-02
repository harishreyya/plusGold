export const AppWork=()=>{
    return <div>

        <div className="how-to-use">
<h3>How does the app work</h3>
<p>Watch or short videos to learn more about our app</p>

<div className="flex way-through-app">
    <div className="go-steps">
        <div >
            <img src={require("../Images/gold.png")} alt="what gold"/>
            </div>
   <h4>What is Plus Gold?</h4>
   <p>Built on Augmont</p>

    </div>
    <div className="go-steps">
   <div>
    <img src={require("../Images/save.png")} alt="save plus"/>
            </div>
   <h4>How to Save on Plus?</h4>
   <p>SIP or One-time</p>
    </div>

    <div className="go-steps">
    <div>
    <img src={require("../Images/redeem.png")} alt="redeem"/>
            </div>
   <h4>How to Redeem?</h4>
   <p>Cash, gold or Jewellery</p>
    </div>
</div>

<br/>

<div className="flex gold-withdrawl">
<div className="flex">
    <img src={require("../Images/no_lock.png")} alt="no lock"/>
    <p>No Lock-in on <br/> Plus Gold</p>
</div>
<div className="flex">
<img src={require("../Images/withdraw.png")} alt="withdrawl"/>
    <p>Easy <br/> Withdrawal</p>
</div>
<div className="flex">
<img src={require("../Images/fixed.png")} alt="fixed"/>
    <p>Fixed Extra <br/> Gold p.a.</p>
</div>
<div className="flex">
<img src={require("../Images/bonus.png")} alt="Bonus"/>
    <p>Bonus benefits <br/> from Jeweller</p>
</div>

</div>


<div className="shark-tank">

</div>

        </div>
    </div>
}