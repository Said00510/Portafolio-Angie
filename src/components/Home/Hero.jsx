import Skills from './HeroSkillsSection'
import MyChart from './HeroGrafic'
import SolfSkills from '../../assets/img/SolfSkills.png';

function HomeHero (){
    return(
        <main>
            <section className=" py-28 bg-[#71556B] mx-aut px-[10%]">
                <h2 className="text-center font-bold text-[28px] xsm:text-4xl uppercase mb-8 text-white 2xl:m-0">Perfil de <span className=' letter-transparent text-[#EF7689]'>Competencias</span></h2>
                <article className="">
                    <div className='flex justify-between gap-10 md:gap-4 items-center mb-10 flex-col lg:flex-row'>
                        <div className='lg:w-1/2 w-full flex justify-center items-center'>
                            <img src={SolfSkills} className='max-w-full rounded-2xl 2xl:w-[550px] 2xl:h-[550px]' alt="" />
                        </div>
                        <div className='lg:w-1/2'>
                            <h2 className='mb-4 text-2xl text-center font-bold text-white'>Competencias <span className='text-[#EF7689]'>Profesionales</span></h2>
                            <div className='lg:border-l-4 border-l-[var(--Gris)] text-white text-[18px]'>
                                <p className='pl-4 font-light'>Mi perfil profesional se distingue por un equilibrio sólido entre <span className='text-[var(--DarkNavyBlue)] font-bold'>habilidades técnicas</span> y <span className='text-[var(--DarkNavyBlue)] font-bold'>habilidades blandas.</span> Poseo competencias técnicas que abarcan desde el dominio de <span className='text-[var(--DarkNavyBlue)] font-bold'>software</span> esenciales, hasta la gestión de proyectos y programación. 
                                Estas habilidades me permiten abordar tareas y proyectos de manera <span className='text-[var(--DarkNavyBlue)] font-bold'>eficiente</span> y <span className='text-[var(--DarkNavyBlue)] font-bold'>efectiva.</span>
                                </p>
                                <br />
                                <p className='pl-4 font-light'>Complementando mis habilidades técnicas, cuento con habilidades interpersonales y de comunicación destacadas, que incluyen la capacidad de <span className='text-[var(--DarkNavyBlue)] font-bold'>trabajar en equipo</span>, <span className='text-[var(--DarkNavyBlue)] font-bold'>comunicarme con claridad</span> y <span className='text-[var(--DarkNavyBlue)] font-bold'>empatizar con colegas</span> y <span className='text-[var(--DarkNavyBlue)] font-bold'>clientes.</span>
                                </p>
                            </div>    
                        </div>
                    </div>

                    <div>
                        <Skills/>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default HomeHero