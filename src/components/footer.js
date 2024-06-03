export const Footer = ()=>{
    return <div>

        <div className="footer">
        <div className="flex footer-info">

            <div>
            <img src={require("../Images/plus.png")} alt=""/>
            <p>B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi School, <br/> Nagpur, Maharashtra, 440014 <br/> Email : founders@getplus.in | Phone : +91-9035202565</p>
            <img src={require("../Images/scocil_icons.png")} alt=""/>
            
            </div>

         

            <div className="about-cities">
                <h4>Plus</h4>
                <p>About Us</p>
                <p>Partner Jewellers</p>
                <p>Gold Coin</p>
                <p>Career</p>
                <p>Blog</p>
                <p>Privacy Policy</p>
            </div>

            <div className="about-cities">
            <h4>Top Cities</h4>
                <p>Bangalore</p>
                <p>Chennai</p>
                <p>Mumbai</p>
                <p>Kolkata</p>
                <p>Delhi</p>

            
            </div>

        </div>

        </div>
    </div>
}