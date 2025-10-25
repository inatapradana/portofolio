import React from "react";
import Slider from "react-slick";

function Multiple() {
    const settings = {
        className: 'bg-white rounded-lg p-5',
        height: 300,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true
    };
    return (
        <div className="py-6">
            <h3 className="text-4xl font-bold text-center pb-4">Framework & Language</h3>
            <div className="slider-container" style={{

            }}>
                <Slider {...settings}>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/laravel.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">Laravel</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/php.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">PHP</h3>
                    </div>

                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/html.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">HTML</h3>
                    </div>

                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/css.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">CSS</h3>
                    </div>

                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/bootstrap.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">Bootstrap</h3>
                    </div><div>
                        <img className="img-fill" src={"../../storage/images/logo/js.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">JavaScript</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/react.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">React</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/github.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">Github</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/git.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">Git</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/vscode.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">Visual Studio Code</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/xampp.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">XAMPP</h3>
                    </div>
                    <div>
                        <img className="img-fill" src={"../../storage/images/logo/postgre.jpg"} alt="" style={{ height: 100 }} />
                        <h3 className="text-center font-bold">PostgreSQL</h3>
                    </div>
                </Slider>
            </div >
        </div>

    );
}

export default Multiple;
