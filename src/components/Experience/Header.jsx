import Educationimg from '../../assets/img/prueba2.png';
import ExperienciaHero from './Hero';

function Experience () {
    return(
        <section className="pt-[100px] px-[10%] bg-[#71556B]">
            <div className='flex flex-col-reverse lg:flex-row justify-evenly gap-7'>
                <div className='mt-[50px] lg:mt-0 lg:w-1/2 flex justify-center items-center'>
                    <img className='rounded-xl w-[500px]' src={Educationimg} alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <hr className='hidden md:block' />
                    <h1 className='my-4 lg:mt-[50px] p-0 m-0 text-center text-[28px] xsm:text-[40px] md:text-[45px] lg:text-[60px] xl:text-[80px] custom-font-dancing font-bold uppercase lg:text-left text-white'>
                        Mi <br className='hidden lg:block' /> Experiencia
                    </h1>
                    <div className=''>
                        <p className='text-[16px] text-white font-light xsm:text-[18px]'>Explora mi historial laboral y logros sobresalientes a lo largo de mi carrera, evidenciando mi dedicación constante hacia la excelencia en diversos ámbitos profesionales.</p>
                        <hr className='hidden lg:w-1/2 lg:block mt-5' />
                        <div className='flex xs:flex-col sm:flex-row xs:gap-5 sm:gap-0 justify-between items-center mt-10 text-[18px]'>
                            <span className='btn button inline-flex w-max px-3 py-2 xsm:px-7 xsm:py-3'>Aqui va algo</span>
                            <span className='btn button inline-flex w-max px-3 py-2 xsm:px-7 xsm:py-3'>Aqui va algo</span>
                        </div>
                    </div>

                </div>
            </div>
            <ExperienciaHero/>
        </section>
    )
}

export default Experience