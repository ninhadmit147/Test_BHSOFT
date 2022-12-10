import React from 'react'
import Logo from '../image/FooterLogo.png'
import Slide from '../image/SlideBackground.png'
import Frame from '../image/Frame 1.png'

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${Slide})`,backgroundRepeat:'no-repeat'}} className="h-[880px]">
        <div className="flex justify-between w-[1140px] mx-auto">
            <div  className='py-5'>
                <a href="#">
                <img src={Logo} alt="" />
                </a>
            </div>
            <div className="flex ">
                <ul className='flex gap-16 py-10 font-bold text-gray-500 '>
                    <li><a className='hover:text-blue-900' href="#">Home</a></li>
                    <li><a className='hover:text-blue-900' href="#">About</a></li>
                    <li><a className='hover:text-blue-900' href="#">Service</a></li>
                    <li><a className='hover:text-blue-900' href="#">Gallery</a></li>
                    <li><a className='hover:text-blue-900' href="#">Blog</a></li>
                </ul>
                <div className=" py-7 mx-10">
                <button className='bg-[#FF64AE] rounded-full px-10 py-3 text-white font-semibold'>Contact</button>
                </div>
            </div>
        </div>
        <div className="flex w-[1140px] mx-auto">
            <div className="w-[465px]">
                <div className="pl-16 py-40">
                    <div className="font-bold text-[48px] w-[430px] leading-normal text-blue-900">Clinic & beauty consultant</div>
                    <div className="font-medium text-[16px] text-[#091156] py-3 ">It is a long established fact that a reader will be by the readable content of a page.</div>
                    <button className='bg-[#FF64AE] rounded-full px-10 py-3 text-white font-semibold'>More details</button>
                </div>
            </div>
            <div className="w-[601px] h-[358px] mt-[135px]">
                <img src={Frame} className='' alt="" />
            </div>
        </div>
        <div className="w-[70px] mt-[100px] flex justify-between gap-2 mx-auto">
            <button className='bg-[#EEEEEE] w-[14px] h-[3px] my-1 rounded-full'></button>
            <button className='bg-[#414880] w-[25px] h-[8px] rounded-full'></button>
            <button className='bg-[#EEEEEE] w-[14px] h-[3px] my-1 rounded-full'></button>
        </div>
    </div>
  )
}

export default Header