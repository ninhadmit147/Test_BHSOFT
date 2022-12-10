import React from 'react'
import Logo from '../image/FooterLogo2.png'
import Bg1 from '../image/FooterBG1.png'
import Bg2 from '../image/FooterBG2.png'
import Bgbot from '../image/bgBot.png'
import Right from '../image/right.png'
import Fb from '../image/facebook-f.png'
import Tw from '../image/twitter-f.png'
import In from '../image/linkedin-in.png'
import Insta from '../image/instagram-f.png'
import Yt from '../image/youtube.png'

const Footer = () => {
  return (
    <div className="container mx-auto mt-10">
      <div  style={{backgroundImage: `url(${Bg1}),url(${Bg2}),url(${Bgbot})`,backgroundSize:'1536px',backgroundRepeat:'no-repeat'}} className='container'>
          <div className="w-[1140px] mx-auto h-[705px]">
          <div className="grid grid-cols-4 pt-[260px]">
            <div className="col-span-2">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
              <div className="text-[#D7DBFF] ml-8 my-5">
                <div className="text-[16px] tracking-[0.1rem]  my-5">
                <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
                </div>
                <div className="italic leading-[24px]">
                  <p>Baker Steet 101, NY, United States.</p>
                  <div className="flex justify-between w-[340px]">
                    <p className="">+521 569 8966.</p>
                    <p className="underline underline-offset-2">mail@company.com.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-10">
              <h1 className='text-white font-bold'>Page</h1>
              <ul className='text-[#D7DBFF] leading-[50px]'>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Home</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />About</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Services</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Gallery</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Tean</a></li>
              </ul>
            </div>
            <div className="pl-24">
              <h1 className='text-white font-bold'>Informations</h1>
              <ul className='text-[#D7DBFF] leading-[50px]'>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Terms & conditions</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Privacy policy</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Blog</a></li>
                <li><a className='flex' href="#"><img className='w-[4px] h-[7px] my-5 mx-2' src={Right} alt="" />Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 flex gap-10 mt-16">
            <a href="#"><img src={Fb} alt="" /></a>
            <a href="#"><img src={Tw} alt="" /></a>
            <a href="#"><img src={In} alt="" /></a>
            <a href="#"><img src={Yt} alt="" /></a>
            <a href="#"><img src={Insta} alt="" /></a>
            </div>
            <div className="col-span-2 text-center mt-16 text-[#D7DBFF]">
            © AltDesain Studio 2021 - All right reserved.
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer