import University from "../../assets/svg/student-svgrepo-com.svg";
import Languages from "../../assets/svg/globe-svgrepo-com.svg";
import Secundary from "../../assets/svg/school-svgrepo-com.svg";



function Aboutedu() {
  return (
    <section className="bg-[#766788] py-[200px] lg:py-[150px] px-[10%]">
      <div className="flex text-white flex-col lg:flex-row lg:h-[500px] h-max justify-center items-center gap-8 ">

        <article className="flex  flex-col lg:gap-0 gap-5 h-full justify-between rounded-xl shadow-lg p-7 lg:w-[500px] max-w-full">
          <div className="">
            <h2 className="uppercase font-bold text-[#FFF] text-[28px] md:text-4xl mb-5 xs:text-center sm:text-left">EDUCACION</h2>
            <p className="tracking-wide xs:text-[14px] xsm:text-[18px] sm:text-[18px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis ex facere illum quos laboriosam aperiam unde similique, at sed omnis ducimus <br /> <br />. Culpa, maiores dolore recusandae nemo eaque beatae asperiores.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 ">
            <div className="lg:w-1/3 flex justify-center items-center">
              <img loading="lazy" src={University} alt="" />
            </div>
            <div className="lg:w-8/12">
              <ul className="list-disc flex flex-col gap-2">
                <h3 className="font-bold text-[#FFF] text-[20px] uppercase">
                  Universidad:
                </h3>

                <li className="ml-10">
                  <p className="font-bold">
                    Universidad Estatal de Quevedo (Ecuador)
                  </p>
                </li>

                <li className="ml-10">
                  <p className="font-bold">Ingeniera Industrial</p>
                </li>

                <li className="ml-10">
                  <p className="font-bold">2016-2021</p>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <div className='flex flex-col md:flex-row lg:flex-col gap-5 h-full justify-between cards-custom'>
          
          <article className="rounded-xl shadow-lg p-7 lg:w-full  md:w-1/2 lg:h-1/2 max-w-full">
            <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center">
              <div className="flex justify-center items-center">
                <img loading="lazy" src={Secundary} alt="" />
              </div>
              <ul className="flex flex-col gap-2 list-disc">
                <h3 className="font-bold text-[var(--Morado)] text-[20px] uppercase">
                  Secundaria:
                </h3>

                <li className="ml-10">
                  <p className="font-bold">Col. Santo Domingo(Ecuador)</p>
                </li>

                <li className="ml-10">
                  <p className="font-bold">Bachiller en Ciencias-Fima</p>
                </li>

                <li className="ml-10">
                  <p className="font-bold">2009-2015</p>
                </li>
              </ul>
            </div>
          </article>

          <article className="rounded-xl  shadow-lg md:w-1/2 lg:w-full p-7 lg:h-1/2 max-w-full">
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-2 justify-between lg:justify-start">
              <div className="flex justify-center items-center">
                <img loading="lazy" src={Languages} alt="" />
              </div>
              <ul className="flex flex-col gap-2 list-disc">
                <h3 className="font-bold text-[var(--Morado)] text-[20px] uppercase">
                  Idiomas:
                </h3>

                <li className="ml-10">
                  <p className="font-bold">Español(Nativo)</p>
                </li>

                <li className="ml-10">
                  <p className="font-bold">Ingles(B1)</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Aboutedu;
