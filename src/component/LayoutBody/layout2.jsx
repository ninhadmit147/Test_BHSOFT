import React from 'react'
import Unsplas1 from '../../image/unsplash_pTrhfmj2jDA.png'
import Unsplas2 from '../../image/unsplash_mEZ3PoFGs_k.png'
import Unsplas3 from '../../image/unsplash_FVh_yqLR9eA.png'
import Twitter from '../../image/Twitter.png'
import Facebook from '../../image/Facebook.png'
import Instagram from '../../image/Instagram.png'
import ContactAnimations from '../../image/ContactAnimations.png'

const Layout2 = () => {
  return (
    <div>
      <div className="text-center">
          <h1 className="text-[#FF64AE] font-semibold">Professional Teams</h1>
          <div className="w-[600px] py-2 px-[70px] text-[36px] font-semibold text-[#091156] text-center mx-auto">
          The Professional expert
          </div>
          <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide mx-auto px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </div>
        </div>
        <div  className="grid grid-cols-3 gap-5 my-[80px] w-[1140px] h-[626px] mx-auto ">
            <div className="">
                <img className='mx-auto my-[59px]' src={Unsplas1} alt="" />
                <h1 className="text-[#FF64AE] font-semibold text-center">Surgeon</h1>
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                </div>
                <div className="flex justify-between w-[274px] mx-auto my-5">
                  <a href="#">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
            </div>
            <div className="rounded-3xl shadow-2xl h-[600px]">
                <img className='mx-auto my-[59px]' src={Unsplas3} alt="" />
                <h1 className="text-[#FF64AE] font-semibold text-center">Dermatologist</h1>
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                </div>
                <div className="flex justify-between w-[274px] mx-auto my-5">
                  <a href="#">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
            </div>
            <div className="">
                <img className='mx-auto my-[59px]' src={Unsplas2} alt="" />
                <h1 className="text-[#FF64AE] font-semibold text-center">Stylist expert</h1>
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center my-3"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                </div>
                <div className="flex justify-between w-[274px] mx-auto my-5">
                  <a href="#">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
            </div>
          </div>

      <div className="grid grid-cols-2 w-[1140px] mx-auto ">
        <div className="items-center">
          <img className='py-28' src={ContactAnimations} alt="" />
        </div>
        <div className="">
        <div className="">
          <p className="text-[#FF64AE] font-semibold">Contact Us</p>
          <div className="w-[404px] py-2 text-[36px] font-semibold text-[#091156]">
          Send your inquiry to our expert team
          </div>
          <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide  ">
          Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
        </div>
          <form className='my-5' action="">
            <div className="grid grid-cols-2 gap-7 my-5">
              <input className='border border-[#D9DDFE] rounded-[15px] h-[61px] px-4' type="text" placeholder='First name' name="" id="" />
              <input className='border border-[#D9DDFE] rounded-[15px] h-[61px] px-4' type="text" placeholder='Last name' name="" id="" />
            </div>
            <input className='w-full my-5 border border-[#D9DDFE] rounded-[15px] h-[61px] px-4' type="text" placeholder='Email address' name="" id="" />
            <br />
            <input className='w-full my-5 border border-[#D9DDFE] rounded-[15px] h-[61px] px-3' type="text" placeholder='Subject message' name="" id="" />
            <textarea className='w-full my-5 border border-[#D9DDFE] rounded-[15px] px-4 pt-4' placeholder='Your inquiry here' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-[#FF64AE] my-5 border-[#D9DDFE] rounded-full px-10 py-3 text-white font-semibold'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Layout2