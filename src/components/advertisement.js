export const Advertise = ()=>{
return <div>
    <div className="ad-box flex">

     <div className="extra-gold-ad-box">
        <p>Save smartly in</p>
        <p className="gold">GOLD</p>
        <p>And get 10% extra gold every year!</p>
        <div className="flex saving-button">
        <p>Staring Saving Now</p>
        <p className="trust-tab">Trusted by 2Lakh + Indians</p>
        </div>

        <div className="flex company-logos">
         <p>Powered By</p>
         <img src={require("../Images/company_1.png")} alt="com1"/>
         <img src={require("../Images/company_2.png")} alt="com2"/>
         <img src={require("../Images/company_3.png")} alt="com3"/>
        </div>

     </div>


     <div className="sonali-img">
     <img src={require("../Images/design.png")} className="design" alt="design"/>
     <img src={require("../Images/sonakshi.png")} className="sonali" alt="sonali"/>
     </div>
    </div>


    <div className="flex pentagon-ad">
        <div>
        <div class="pentagon">
            <div class="pentagon"></div>
            </div> 
        </div>

        <div className="buy-gold-wrap">
            <h3>Save like your mom</h3>
            <p>Buy 10gm <span className="gold">Gold</span>  & Get 1gm <span className="gold">Gold</span>  Extra</p>
            <p>Buy Gold through daily, weekly or monthly SIPs, or through One-Time payments - & get 10% extra Gold from Plus's partner jewellers</p>
        </div>
    </div>
</div>

}