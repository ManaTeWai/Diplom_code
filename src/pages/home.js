import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import slide_1 from "../assets/banner-final.jpg"
import slide_2 from "../assets/slide-2.jpg"
import slide_3 from "../assets/slide-3.jpg"

export const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <div className="content">
        <div className="content__header">
            <h3 className="Home__main">Ставропольский институт кооперации (филиал) Белгородского университета кооперации, экономики и права объявляет конкурс на замещение должностей педагогических работников, относящихся к профессорско-преподавательскому составу</h3>
        </div>
        <br/>
        <div className="about_us">
            <p>Ставропольский институт кооперации (филиал) Белгородского университета кооперации, экономики и права - это престижное место работы, на котором вы сможете проявить все свои профессиональные навыки, получите личностный рост в хорошей команде и достойное вознаграждение</p>
        </div>
        <br/>
        <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
            <Carousel.Item className="carousel_item">
                <img
                className="d-block w-100 h-100"
                src={slide_1}
                alt="First slide"
                />
                <Carousel.Caption className="carousel_text">
                    <div className="label_background"> 
                        <h3>Старательные ученики</h3>
                        <p>
                            Впитывают знания как губки
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel_item">
                <img
                className="d-block w-100 h-100"
                src={slide_2}
                alt="Второй слайд"
                />

                <Carousel.Caption className="carousel_text">
                    <div className="label_background">
                        <h3>Карьерный рост</h3>
                        <p>
                            Работайте усердно и за вами пойдут!
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel_item">
                <img
                className="d-block w-100 h-100"
                src={slide_3}
                alt="Трейтий слайд"
                />

                <Carousel.Caption className="carousel_text">
                    <div className="label_background">
                        <h3>Стабильно высокая зарабатная плата</h3>
                        <p>
                            Ваше финансовое состояние вырастет и укрепится
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
}