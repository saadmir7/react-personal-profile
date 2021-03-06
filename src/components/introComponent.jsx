import React from "react";

function Intro() {
    return(
        <section id="home">
            <div className="container-fluid topDiv">
                <div className="row">
                    <div className="col-lg-12 custom">
                        <img src="profile_picture.jpg" className="border border-white rounded-circle custom" width="240px" height="240px" alt="My Profile"></img>
                    </div>
                    <div className="col-lg-12 custom">
                        <h3 className="custom-color-white">Muhammad Saad Mir</h3>
                        <div className="custom-star">
                            <div className="custom-line-top"/>
                        </div>
                        <h5 className="custom-color-white">Software Engineer in Islamabad, Pakistan</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;