import React from 'react'

import Layout1 from './LayoutBody/layout1'
import Layout2 from './LayoutBody/layout2'
import Bg1 from '../image/BackgroundBubble1.png'
import Bg2 from '../image/BackgroundBubble2.png'

const Body = () => {
  return (
    <div className='container mx-auto'>
        <div style={{backgroundImage: `url(${Bg1})`,backgroundRepeat:'no-repeat'}} className="bg-right-bottom container mx-auto">
          <Layout1/>
        </div>
        <div style={{backgroundImage: `url(${Bg2})`,backgroundRepeat:'no-repeat'}} className="bg-left-bottom container mx-auto">
          <Layout2/>
        </div>
    </div>
  )
}

export default Body