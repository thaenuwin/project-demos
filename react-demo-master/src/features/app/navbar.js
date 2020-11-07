import React from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import c1 from '../../image/restaurant-image.jpg'
import logo from '../../image/logo.png'
import p1 from '../../image/r1.jpg'
import p2 from '../../image/r2.jpg'
import p3 from '../../image/r3.jpg'
import p4 from '../../image/r4.jpg'
import p5 from '../../image/r5.jpg'
import p6 from '../../image/r6.jpg'
import p7 from '../../image/r7.jpg'
import p8 from '../../image/r8.jpg'
import p9 from '../../image/r9.jpg'
import p10 from '../../image/r10.jpg'
import p11 from '../../image/r11.jpg'
import p12 from '../../image/r12.jpg'
import p13 from '../../image/r13.jpg'
import p14 from '../../image/r14.jpg'
import p15 from '../../image/r15.jpg'
import p16 from '../../image/r16.jpg'
import p17 from '../../image/r17.jpg'
import '../../App.css'

const Navbar = (props) => {
    return (
        <div>
            <div className="container-fluid p-0" style={{ background: "#222222" }}>
                <div className="container p-2"
                    style={{
                        cursor: "pointer", color: '#C5C5C5',
                    }}>
                    <div className="row" style={{ borderBottom: `1px solid #777474` }}>
                        <div className="px-2 pt-2 pb-0">64 Sabal Street,Mandalay</div>
                        <div style={{ flex: 1 }} />
                        <div className="px-2 pt-2 pb-0"> <i className="fa fa-facebook-f" /></div>
                        <div className="px-2 pt-2 pb-0"><i className="fa fa-twitter"></i></div>
                        <div className="px-2 pt-2 pb-0"><i class="fa fa-instagram"></i></div>
                        <div className="px-2 pt-2 pb-0"><i class="fa fa-youtube"></i></div>
                    </div>
                    <div className="row navbar navbar-expand-sm ">
                        <div className="navbar-brand" href="#"><img src={logo} alt="resturant-image" style={{ height: "40px" }} /></div>
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
                            <span><i className="fa fa-bars" style={{ fontSize: "24px", color: "white" }}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"
                            style={{ cursor: "pointer", color: '#ffffff', fontSize: "15px" }}>
                            <div className="d-flex navbar-nav ml-auto py-2">
                                <div className="px-3 py-2">HOME </div>
                                <div className="px-3 py-2">ROOMS </div>
                                <div className="px-3 py-2">RESTAURANT</div>
                                <div className="px-3 py-2">PAGE </div>
                                <div className="px-3 py-2">GALLERIES </div>
                                <div className="px-3 py-2">BLOG </div>
                                <div className="px-3 py-2">CONTACT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <img className="img-fluid " src={c1} alt="foodImage" /></div>
            </div>
            <div className="container py-3">
                <div>
                    <div className="text-center" style={{ fontWeight: "30px" }}><h3> BREAKFAST </h3></div>
                    <div className="text-center">9:00AM-11:00AM</div>
                    <div className="row pt-3 justify-content-center ">
                        <MenuComponent img={p1} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p2} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p3} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p4} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p5} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p6} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                </div>
                <div className="pt-3">
                    <div className="text-center" style={{ fontWeight: "30px" }}><h3> LUNCH </h3></div>
                    <div className="text-center">11:00AM-4:00PM</div>
                    <div className="row pt-3 justify-content-center ">
                        <MenuComponent img={p7} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p8} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p9} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p10} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p11} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p6} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                </div>
                <div className="pt-3">
                    <div className="text-center" style={{ fontWeight: "30px" }}><h3> DRINK </h3></div>
                    <div className="text-center">11:00AM-4:00PM</div>
                    <div className="row pt-3 justify-content-center ">
                        <MenuComponent img={p12} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p13} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p14} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p15} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                    <div className="row justify-content-center">
                        <MenuComponent img={p16} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                        <MenuComponent img={p17} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg tomatoes, onion,spinach and mushrooms. "
                            price="30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const MenuComponent = ({ img, foodName, foodDesc, price }) => (
    <div className="col-6 row ">
        <div className="hovereffect col-lg-6 mb-1 p-1  ">
            <img className="img-fluid p-2" src={img} style={{ minWidth: '100%', minHeight: '100%' }} />
        </div>
        <div className=" col-lg-6">
            <h6 className="pt-2">{foodName}</h6>
            <p className="mb-0 " style={{ fontSize: "14px" }}> {foodDesc}</p>
            <p style={{ fontSize: "28px", color: "#8E7037", fontWeight: "600" }}>$ <span>{price}</span></p>
        </div>
    </div>
)
export default Navbar