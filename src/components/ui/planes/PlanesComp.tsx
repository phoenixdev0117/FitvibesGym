"use client";
import react,{ useState, useEffect, useRef } from "react";
import { TituloSecciones } from "../TituloSecciones";

import { CardPlanes } from "./CardPlanes";

import Slider from "react-slick";
import Image from "next/image";

import rightArrow from "@/../../public/imgs/carusel/right.png"
import leftArrow from "@/../../public/imgs/carusel/left.png"

const PlanesComp = () => {
  const sliderRef = useRef<Slider | null>(null); // Create a ref for the slider
  const [viewportWidth, setViewportWidth] = useState<number>(600);
  const [viewportHeight, setViewportHeight] = useState<number>(600);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div>
      {/* <div
        className={className + " translate-x-10"}
        style={{ ...style }}
        
      /> */}
      <div className="absolute top-[-50%] -right-5 translate-y-[50%] translate-x-1 w-[16%]  sm:w-[140px] lg:w-[160px] xl:w-[212px] bg-white h-[430px] "></div>
      <div onClick={onClick} className=" text-[32px] leading-8 font-bold flex justify-center items-center absolute -right-5 top-[50%] cursor-pointer translate-x-[0px] sm:translate-x-[-36px]">
        <Image width={50} height={50} src={rightArrow} alt="next"/>
      </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div>

        <div className="absolute top-[-50%] -left-5 translate-y-[50%] translate-x-1 w-[16%] sm:w-[140px] lg:w-[160px] xl:w-[212px] bg-white h-[430px] z-10"></div>
        <div onClick={onClick} className="  text-[32px] leading-8 font-bold flex justify-center items-center absolute -left-5 top-[50%] z-10 cursor-pointer translate-x-[0px] sm:translate-x-[36px]">
          <Image width={50} height={50} src={leftArrow} alt="prev"/>
        </div>
        </div>
    );
  }


  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    // Establecer los valores iniciales
    handleResize();

    // Agregar el listener para el redimensionamiento de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToSlide = (slideIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex); // Navigate to the specified slide
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    swipeToSlide: false,

    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current: any) => setCurrentSlide(current),
  };
  if (viewportWidth < 480) {
    settings.slidesToShow = 1;
    settings.centerPadding = "0px";
  } else if (viewportWidth < 500) {
    settings.slidesToShow = 1;
    settings.centerPadding = "60px";
  } else if (viewportWidth < 640) {
    settings.slidesToShow = 1;
    settings.centerPadding = "60px";
  } else if (viewportWidth < 880) {
    settings.slidesToShow = 1;
    settings.centerPadding = "60px";
  } else if (viewportWidth < 1024) {
    settings.slidesToShow = 2;
    settings.centerPadding = "120px";
  } else if (viewportWidth < 1280) {
    settings.slidesToShow = 2;
    settings.centerPadding = "120px";
  } else if (viewportWidth < 1430) {
    settings.slidesToShow = 2;
    settings.centerPadding = "120px";
  } 
  return (
    <section className="bg-white pt-10" id="planes">
      <TituloSecciones
        tituloGris="ELIGE TU"
        tituloMagenta="PLAN"
        parrafo1=""
        parrafo2=""
        plus
        gris
      />
      <div className="mx-[10px] flex flex-grow justify-center">
        <div className="w-full flex flex-col gap-4 justify-center mb-8 px-5 sm:px-10">
          <div className="flex flex-col justify-center">
            <div className="font-bold text-center uppercase">
              COSTO DE Inscripción: $ 200.°°
            </div>
            <div className="text-center italic">
              {`(El pago de inscripción deberas hacerlo en recepcion, adicional, tomaremos tus huellas para tu ingreso)`}
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            <CardPlanes
              url="/planes/just-class"
              titulo1="JUST CLASS"
              titulo2="MENSUAL"
              price="$ 549.°°"
              parrafo1="Acceso a las"
              parrafo2="instalaciones de clases"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 0 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 0 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 0 ? true : false}
            />
            <CardPlanes
              url="/planes/full-fit"
              titulo1="FULL FIT"
              titulo2="MENSUAL"
              price="$ 849.°°"
              parrafo1="Acceso completo a"
              parrafo2="las instalaciones"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 1 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 1 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 1 ? true : false}
            />
            <CardPlanes
              url="/planes/estudiante"
              titulo1="ESTUDIANTE"
              titulo2="MENSUAL"
              price="$ 599.°°"
              parrafo1="Acceso completo a"
              parrafo2="las instalaciones"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 2 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 2 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 2 ? true : false}
            />
            <CardPlanes
              url="/planes/trimestral"
              titulo1="TRIMESTRAL"
              titulo2=""
              price="$ 2,229.°°"
              parrafo1="Acceso completo a"
              parrafo2="las instalaciones"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 3 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 3 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 3 ? true : false}
            />
            <CardPlanes
              url="/planes/semestral"
              titulo1="SEMESTRAL"
              titulo2=""
              price="$ 4,199.°°"
              parrafo1="Acceso completo a"
              parrafo2="las instalaciones"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 4 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 4 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 4 ? true : false}
            />
            <CardPlanes
              url="/planes/anual"
              titulo1="ANUAL"
              titulo2=""
              price="$ 7,199.°°"
              parrafo1="Acceso completo a"
              parrafo2="las instalaciones"
              parrafo3="Acceso a todas"
              parrafo4="nuestras clases"
              colorCard={currentSlide == 5 ? "bg-[#c21a83]" : "bg-[#f7f4f4]"}
              colorPrice={
                currentSlide == 5 ? "text-[#f5eb24]" : "text-[#c60384]"
              }
              color={currentSlide == 5 ? true : false}
            />
          </Slider>
          <div className="w-full flex gap-3 justify-center">
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(0)}></div>
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(1)}></div>
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(2)}></div>
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(3)}></div>
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(4)}></div>
            <div className="w-3 h-3 rounded-[50%] bg-[#f5eb24] cursor-pointer" onClick={() => goToSlide(5)}></div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row w-full relative justify-center bg-[#f5eb24] py-3 lg:px-16 ">
        <Image
          src="/imgs/10porciento.png"
          alt="Planes"
          width={100}
          height={100}
          className="object-contain absolute -top-5 -left-16 lg:left-0 h-[120px] w-[250px] "
        />
        <div className=" pt-24 sm:py-5 w-10/12 sm:w-11/12  md:w-11/12 md:pl-24  flex flex-wrap flex-row md:flex-nowrap gap-5 md:gap-10 justify-center items-center bg-[#f5eb24]  py-5">
          <div className={`${KommonExtraLight.className} text-[16px] md:text-[13px] lg:text-[20px] font-bold `}
            style={{ lineHeight: "1.2" }}
          >
            <p>
              ¡Aprovecha nuestro nuevo beneficio! Al domiciliar tu tarjeta de
              crédito odébito en tu mensualidad, recibirás automáticamente un
              10% dedescuento. ¡No pierdas la oportunidad de ahorrar en tus
              pagos mensuales!
            </p>
          </div>
          <div className="flex justify-center items-center mt-3 md:mt-0">
            <ButtonActivar />
          </div>
        </div>
      </div> */}
    </section>
  );
}
export default PlanesComp;