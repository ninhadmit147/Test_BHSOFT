import React from 'react'
import Avt1 from '../../image/Animation1.png'
import Avt2 from '../../image/Animation2.png'
import Avt3 from '../../image/Animation3.png'
import Unsplas from '../../image/unsplash_LRXYS0tSyGc.png'
const Layout1 = () => {
  return (
    <div className='w-[1140px] mx-auto'>
        <div className="text-center">
          <h1 className="text-[#FF64AE] font-semibold">Main Service</h1>
          <div className="w-[600px] py-2 px-[70px] text-[36px] font-semibold text-[#091156] text-center mx-auto">
          Learn services to focus on your beauty
          </div>
          <div className="text-[#8B8B8B] w-[848px] text-[16px] tracking-wide mx-auto px-10">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
          </div>
        </div>
       <div>
          <div  className="grid grid-cols-3 gap-16 my-[80px] w-[1140px] mx-auto ">
            <div className="rounded-3xl shadow-2xl h-[468px] bg-white">
                <img className='mx-auto my-[59px]' src={Avt1} alt="" />
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                </div>
            </div>
            <div  className="rounded-3xl shadow-2xl h-[468px] bg-white">
                <img className='mx-auto my-[59px]' src={Avt2} alt="" />
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                </div>
            </div>
            <div className="rounded-3xl shadow-2xl h-[468px] bg-white">
                <img className='mx-auto my-[59px]' src={Avt3} alt="" />
                <div className="text-[#091156] text-[18px] mb-5 font-bold text-center"> 
                Beauty consultation
                </div>
                <div className="text-center w-[274px] mx-auto text-[#8B8B8B]">
                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                </div>
            </div>
          </div>
          <div className="my-[100px] py-[80px]">
            <div className="grid grid-cols-2 gap-5">
              <div className="my-10">
                  <p className='text-[#FF64AE] font-semibold my-2'>About Us</p>
                  <h1 className='text-[36px] font-semibold text-[#091156]'>We are the best beauty clinic</h1>
                  <div className="w-[483px] my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                  </div>
                  <button className='bg-[#FF64AE] my-5 rounded-full px-10 py-3 text-white font-semibold'>learn More</button>
              </div>
                  <img className='ml-16' src={Unsplas} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout1