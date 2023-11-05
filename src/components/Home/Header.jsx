import HomeImg from "../../assets/img/principal-img.jpg";

function HomeHeader() {
  return (
    <>
      <section className="min-h-screen flex">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative custom-imghome">
            <img
              loading="lazy"
              className="h-screen w-screen object-cover img"
              src={HomeImg}
              alt="Imagen del autor del portafolio Angie Rivas"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center px-6 flex-col text-white custom-infohome items-center lg:items-start">
            <span className="custom-font-dancing uppercase font-bold text-[15px] xsm:text-lg tracking-widest mb-0 xsm:mb-2 hidden xsm:block">
              Apasionada por aprender
            </span>
            <div className="flex gap-2 xsm:gap-4 md:gap-12 flex-col w-[90%] ">
              <h1 className="font-bold text-[28px] xsm:text-5xl uppercase">
                Ing. Industrial
              </h1>
              <p className="tracking-wide font-bold text-[14px] xsm:text-[18px]">
                Soy Angie Rivas, altamente capacitada y orientada a resultados.
                Mi compromiso profesional y personal se refleja en mi capacidad
                para impulsar el crecimiento de las empresas, mejorando la
                eficiencia y la eficacia en sus operaciones.
              </p>

              <button className="btn button text-[12px] xsm:text-[18px] md:text-[20px] lg:rotate-[-10deg] inline-flex w-max px-3 py-2 xsm:px-7 xsm:py-3">
                <a href="../../../public/downloads/CV ANGIE MABEL RIVAS GUERRERO-1.pdf" download>
                  <span className="text-[12px] xsm:text-xl">DESCARGAR CV</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHeader;
