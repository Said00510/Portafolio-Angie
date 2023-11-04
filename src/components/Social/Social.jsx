import { SlSocialLinkedin } from 'react-icons/sl';
import {FaXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


function Social (){
    return(
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className='bg-[#29272A] shadow-xl p-5 rounded-tl-3xl rounded-bl-3xl'>
                <ul className='flex flex-col gap-10 text-white text-xl'>
                    <li className='custom-hover-twitter'>
                        <a href="#" className='text-white '><FaXTwitter/></a>
                    </li>
                    <li className='custom-hover-linknd'>
                        <a href="#" className='text-[#008B8B] '><SlSocialLinkedin/></a>
                    </li>
                    <li className='custom-hover-insta'>
                        <a href="#" className='text-[#E4405F]'><FaInstagram/></a>
                    </li>
                    <li className='custom-hover-whats'>
                        <a href="#" className='text-[#00FF00]'><FaWhatsapp/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Social