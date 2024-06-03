import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const LifeGoals = () =>{
    const settings = {
        // className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      };

    return <div>
        <div className="life-goals">
           

<h3>Save for life goals</h3>
<p>Save in Plus Gold for life events that matters</p>
<br/>
<div className="slider-container">
    <Slider {...settings}>
    <div>
    <img src={require("../Images/wedding.png")} alt="wedding" />
    </div>
    <div>
    <img src={require("../Images/aniversary.png")} alt="aniversary" />
    </div>
    <div>
    <img src={require("../Images/dhanteras.png")} alt="dhanteras" />
    </div>
    <div>
    <img src={require("../Images/wedding.png")} alt="wedding" />
    </div>
    <div>
    <img src={require("../Images/aniversary.png")} alt="aniversary" />
    </div>
    <div>
    <img src={require("../Images/dhanteras.png")} alt="dhanteras" />
    </div>
    <div>
    <img src={require("../Images/wedding.png")} alt="wedding" />
    </div>
    <div>
    <img src={require("../Images/dhanteras.png")} alt="dhanteras" />
    </div>
    </Slider>
</div>
<p className="life-saving-button">Start Saving Now</p>
<div className="flex oval-wrap">
<div class="oval"></div>
</div>
        </div>
    </div>
}