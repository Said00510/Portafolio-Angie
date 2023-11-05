import Medalla from '../../assets/img/HomeCard/medalla.png';
import Check from '../../assets/img/HomeCard/check.png';
import Support from '../../assets/img/HomeCard/support.png';

function HomeCard () {
    return (
        <div className='custom-homecard w-auto py-5 px-10 bg-[#9e6a90] rounded-3xl  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl '>
            <div className='flex justify-center gap-3 w-max my-0 mx-auto'>
                <div className='flex gap-2 items-center'>
                    <img className='w-8 h-8 filter brightness-0' loading='lazy' src={Medalla} alt="Imagen de medalla que hace atributon a mas de 4 años de experencia en el mundo laboral" />
                    <div className='ml-2 pr-4 border-r-2 border-white'>
                        <p className='font-bold text-white'>+4 Años de laborando</p>
                        <small className='text-white'>Experiencia</small>
                    </div>
                </div>
                <div className='flex gap-2 items-center pl-4'>
                    <img className='w-8 h-8 filter brightness-0' loading='lazy' src={Check} alt="Imagen de medalla que hace atributon a mas de 4 años de experencia en el mundo laboral" />
                        <div className='ml-2 pr-4 border-r-2 border-white'>
                            <p className='font-bold text-white'>+100 Proyectos</p>
                            <small className='text-white'>Completados</small>
                        </div>
                </div>
                <div className='flex gap-2 items-center pl-4'>
                    <img className='w-8 h-8 filter brightness-0' loading='lazy' src={Support} alt="Imagen de medalla que hace atributon a mas de 4 años de experencia en el mundo laboral" />
                        <div className='ml-2'>
                            <p className='font-bold text-white'>Soporte</p>
                            <small className='text-white'>Disponible 24/7</small>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard