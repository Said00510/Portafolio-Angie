import { BiSolidHandRight } from 'react-icons/bi';
import Data from '../../assets/svg/Data.svg';
import Optimization from '../../assets/svg/interface-control-svgrepo-com.svg';
import Folds from '../../assets/svg/page-analysis-svgrepo-com.svg';
import Skills from '../../assets/svg/surveillance-defense-svgrepo-com.svg';

import About2 from './Hero';

function Header () {
    return (
        <section className="pt-[150px] px-[10%] bg-[#4C3A69] relative">
            <article className='pb-7'>
                <div className='flex items-center justify-center gap-6 custom-about'>
                    <div className=' w-1/2 custom-about'>
                        <h1 className="uppercase font-bold text-white text-4xl mb-5">Conoce <span className='letter-transparent text-[#EF7689]'>quien soy</span></h1>
                        <div className='flex '>
                            <blockquote className='text-white tracking-wider font-light text-[14px] xsm:text-[18px]'>
                                <p>A lo largo de mi carrera, he <span className='text-[var(--DarkNavyBlue)] font-bold'>liderado proyectos</span> clave que han optimizado procesos y aumentado la rentabilidad. Por ejemplo, en mi rol anterior en <span className='text-[var(--DarkNavyBlue)] font-bold'>[nombre de la empresa]</span>, 
                                implementé una estrategia de gestión de la cadena de suministro que redujo los costos operativos en un <span className='text-[var(--DarkNavyBlue)] font-bold'>15%</span> y mejoró los tiempos de entrega en un <span className='text-[var(--DarkNavyBlue)] font-bold'>20%</span>.
                                </p>
                                <br />
                                <p>
                                Mi enfoque proactivo y mi habilidad para colaborar <span className='text-[var(--DarkNavyBlue)] font-bold'>efectivamente</span> en equipos multidisciplinarios me permiten abordar desafíos complejos con éxito. Estoy comprometida a seguir creciendo profesionalmente y aplicar mi experiencia en beneficio de su empresa.
                                </p>
                                <ul className='list-none flex flex-col mt-8 gap-2'>
                                    <li className='flex items-center gap-2'> 
                                        <span className='text-[#000]'><BiSolidHandRight/></span>
                                        Aqui va algo.
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <span className='text-[#000]'><BiSolidHandRight/></span>
                                        Aqui va algo.
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <span className='text-[#000]'><BiSolidHandRight/></span>
                                        Aqui va algo.
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <span className='text-[#000]'><BiSolidHandRight/></span>
                                        Aqui va algo.
                                    </li>
                                </ul>
                            </blockquote>
                        </div>
                    </div>
                    <div  className='w-1/2 flex justify-center custom-about'>
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='flex gap-3 items-center '>
                                <img src={Data} alt=""/>
                                <span className='xs:text-[14px] xsm:text-xl font-bold uppercase tracking-wider text-[#fff]'>
                                    Optimización de Procesos.
                                </span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={Optimization} alt="" />
                                <span className='xs:text-[14px] xsm:text-xl font-bold uppercase tracking-wider text-[#fff]'>
                                    Gestión de Proyectos.
                                </span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={Folds} alt="" />
                                <span className='xs:text-[14px] xsm:text-xl font-bold uppercase tracking-wider text-[#fff]'>
                                    Decisiones Analíticas.
                                </span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={Skills} alt="" />
                                <span className='xs:text-[14px] xsm:text-xl font-bold uppercase tracking-wider text-[#fff]'>
                                    Comunicación.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <About2/>
        </section>
    )
}

export default Header