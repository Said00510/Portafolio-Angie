import Autocad from '../../assets/img/skills/autocad.webp';
import Word from '../../assets/img/skills/Word.png';
import Excel from '../../assets/img/skills/excel.png';
import Database from '../../assets/img/skills/database.png';
import Powerpoint from '../../assets/img/skills/Powerpoint.png';
import Marketing from '../../assets/img/skills/marketing.png';




function Skills () {
    
    return(
    <div className='relative lg:flex lg:justify-center lg:items-center'>
        <div className="z-[0] grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-[100px]">
            <div className=" border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-60px] xsm:left-[-100px] bg-[#ef7689] p-3 text-white uppercase'>Base de <br className='xsm:hidden' />datos</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Database} alt="Imagen de base de datos" />
                    </div>
            </div>


            <div className="border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-60px] xsm:left-[-70px] bg-[#ef7689] p-3 text-white uppercase'>PowerPoint</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Powerpoint} alt="Imagen de base de datos" />
                    </div>
            </div>

            <div className="border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-60px] xsm:left-[-120px] bg-[#ef7689] p-3 text-white uppercase'>Marketing <br className='xsm:hidden' /> Digital</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Marketing} alt="Imagen de base de datos" />
                    </div>
            </div>

            <div className="border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-50px] bg-[#ef7689] p-3 text-white uppercase'>AutoCad</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Autocad} alt="Imagen de base de datos" />
                    </div>
            </div>

            <div className="border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-40px] bg-[#ef7689] p-3 text-white uppercase'>Word</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Word} alt="Imagen de base de datos" />
                    </div>
            </div>

            <div className="border-[4px] border-white flex justify-center md:w-fit md:mx-[50px] items-center p-5 rounded-2xl relative">
                <p className='font-bold absolute left-[-40px] bg-[#ef7689] p-3 text-white uppercase'>Excel</p>
                    <div className="flex items-center justify-center skills-transform">
                        <img className='w-[100px] h-[100px]' loading="lazy" src={Excel} alt="Imagen de base de datos" />
                    </div>
            </div>

        </div>
    </div>
    )
}

export default Skills