"use client";
import "../../../app/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { TituloSecciones } from "../TituloSecciones";
import Slider from "react-slick";
import Aos from "aos";
import "./flechas.css";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
            }}
            onClick={onClick}
        />
    );
}

export const CarruselSeccion2 = () => {
    const [viewportWidth, setViewportWidth] = useState(600);
    const [baseUrl, setrecortadorimage] = useState('/imgs/galeria/');

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);

        };

        // Establecer los valores iniciales
        handleResize();

        // Agregar el listener para el redimensionamiento de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: -200,
            once: true
        });
    }, [])


    const settings = {
        className: "center ",
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        slidesToShow: 3,
        speed: 1500,
        autoplaySpeed: 1000,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };

    if (viewportWidth < 430) {
        settings.slidesToShow = 1;
        settings.centerPadding = "25px";
    } else if (viewportWidth < 500) {
        settings.slidesToShow = 1;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 640) {
        settings.slidesToShow = 1;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 768) {
        settings.slidesToShow = 1;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 1024) {
        settings.slidesToShow = 2;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 1024) {
        settings.slidesToShow = 2;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 1280) {
        settings.slidesToShow = 3;
        settings.centerPadding = "60px";
    } else if (viewportWidth < 1536) {
        settings.slidesToShow = 3;
        settings.centerPadding = "60px";
    }

    const imageElements = [];

    for (let i = 0; i < 39; i++) {
        imageElements.push(
            <div key={i} className="pl-2">
                <img src={`${baseUrl}/${[i + 1]}.png`} alt={`Image ${i + 1}`} />
            </div>
        );
    }

    return (
        <section className="relative  py-14  lg:py-32" id="servicios">
            <div className="img2"></div>
            <div className="absolute w-full h-full top-0" style={{ backgroundColor: 'rgba(27, 27, 27,0.7)' }} >
            </div>

            <div className="relative flex flex-col justify-center items-center z-10"
                data-aos="fade-up">
                <TituloSecciones
                    tituloGris="GALERIA "
                    tituloMagenta=""
                    parrafo1=""
                    parrafo2=""
                    plus
                />


            </div>
            <div className="mt-10 z-10" data-aos="fade-up" >
                <div className="slider-container px-14 ">
                    <Slider {...settings}>
                        {imageElements}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
