"use client";
import "../../../app/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { TituloSecciones } from "../TituloSecciones";
import Slider from "react-slick";

import Aos from "aos";

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

export const Servicios = () => { 

  const [viewportWidth, setViewportWidth] = useState<number>(600);
  const [viewportHeight, setViewportHeight] = useState<number>(600);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
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


  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 3,
    swipeToSlide: true,

    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
  // estado de enteros del 1 al 4
  const [card, setCard] = useState(1);
  const [hover, setHover] = useState(false);

  // función para cambiar el estado de la variable card
  const changeCard = (value: number) => {
    var newValue = card + value;
    if (newValue > 4) {
      newValue = 1;
    } else if (newValue < 1) {
      newValue = 4;
    }
    setCard(newValue);
  };

  useEffect(() => {
    // ser timeout para cambiar el card cada 5 segundos
    if (hover) {
      return;
    }
    const interval = setInterval(() => {
      changeCard(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [card, hover]);

  return (
    <section className="relative  py-14  lg:py-32" id="servicios">
      <div className="img2"></div>
      <div className="absolute w-full h-full top-0" style={{ backgroundColor: 'rgba(27, 27, 27,0.7)' }} >
      </div>

      <div className="relative flex flex-col justify-center items-center z-10"
        data-aos="fade-up">
        <TituloSecciones
          tituloGris="NUESTROS "
          tituloMagenta="SERVICIOS"
          parrafo1="Descubre una experiencia única diseñada para"
          parrafo2="alcanzar tus
          objetivos fitness"
          plus
        />


      </div>
      <div className="mt-10 z-10" data-aos="fade-up" >
        <div className="slider-container px-10 ">
          <Slider {...settings}>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a1 ${card == 1 && "opacity_image1"}`}
                mostrarText={card == 1}
                card={1}
                setCard={setCard}
                changeCard={changeCard}
                title="ZONA DE PESAS"
                subTitle="Y MAQUINAS"
                renglon1="Contamos con una área completa"
                renglon2="de pesas y máquinas, equipada "
                renglon3="con todo lo necesario para"
                renglon4="realizar tu rutina de fuerza de"
                renglon5="manera efectiva y segura."
                leftTitlePosition="left-[10px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a2 ${card == 2 && "opacity_image2"}`}
                mostrarText={card == 2}
                card={2}
                setCard={setCard}
                changeCard={changeCard}
                title="BOX"
                subTitle="ROOM"
                renglon1="Explora nuestro espacio dedicado"
                renglon2="al boxeo,ideal para entrenar y"
                renglon3="perfeccionar tu técnica."
                leftTitlePosition="left-[10px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a3 ${card == 3 && "opacity_image3"}`}
                mostrarText={card == 3}
                card={3}
                setCard={setCard}
                changeCard={changeCard}
                title="SALÓN DE "
                subTitle="SPINNING"
                renglon1="¡Descubre nuestro nuevo salón"
                renglon2="de spinning! Disfruta de seiones"
                renglon3="diseñadas para mejorar tu"
                renglon4="condición física y bienestar"
                leftTitlePosition="left-[20px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a4 ${card == 4 && " opacity_image4"}`}
                mostrarText={card == 4}
                card={4}
                setCard={setCard}
                changeCard={changeCard}
                title="ÁREA DE"
                subTitle="CARDIO"
                renglon1="Nuestra área de cardio está"
                renglon2="diseñada para ofrecerle una"
                renglon3="experencia de ejercicio efectiva"
                renglon4="y cómoda."
                leftTitlePosition="left-[30px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a5 ${card == 5 && " opacity_image5"}`}
                mostrarText={card == 5}
                card={5}
                setCard={setCard}
                changeCard={changeCard}
                title="BAÑOS Y"
                subTitle="REGADERAS"
                renglon1="Descubre nuestras instalaciones"
                renglon2="de primera: ¡contamos con baños,"
                renglon3="vestidores y regaderas para tu"
                renglon4="comodidad absoluta!"
                leftTitlePosition="left-[30px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a6 ${card == 6 && " opacity_image6"}`}
                mostrarText={card == 6}
                card={6}
                setCard={setCard}
                changeCard={changeCard}
                title="AMPLIO"
                subTitle="ESTACIONAMIENTO"
                renglon1="Aparca fácilmente y disfruta sin"
                renglon2="preocupaciones. ¡Tu visita será"
                renglon3="aún más placentera!"
                leftTitlePosition="left-[30px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a7 ${card == 7 && " opacity_image7"}`}
                mostrarText={card == 7}
                card={7}
                setCard={setCard}
                changeCard={changeCard}
                title="GUARDERÍA Y"
                subTitle="GAMEZONE"
                renglon1="¡Entrena tranquilo! Con nuestra"
                renglon2="guarderia y zona para jóvenes,"
                renglon3="tu entrenamiento será sin"
                renglon4="preocupaciones"
                leftTitlePosition="left-[30px]"
                topTitlePosition="top-11"
              />
            </div>
            <div className="pl-10">
              <Card
                setHover={setHover}
                className={`diagonal_box_a8 ${card == 8 && " opacity_image8"}`}
                mostrarText={card == 8}
                card={8}
                setCard={setCard}
                changeCard={changeCard}
                title="ZONA DE"
                subTitle="LOCKERS"
                renglon1="Contamos con espacios para"
                renglon2="que puedas resfuardar tus"
                renglon3="pertenencias mientras"
                renglon4="entrenas. ¡Entrena tranquilo!"
                leftTitlePosition="left-[30px]"
                topTitlePosition="top-11"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};