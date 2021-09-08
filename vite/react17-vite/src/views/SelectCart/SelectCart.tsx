import React, { FC, useEffect, useState } from 'react'
import styled from './SelectCart.module.css'
import {TabComponent} from '../../components'
import {CartList} from '../../components'
const  tabCartData = 
['推荐', '热门车系', '10万以下', '10-20万', '20-30万', '30万以上']
const cartData = [
  {
      name: '林肯领航员NAVIGATOR',
      url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/navigator2020.jpg'
  },
   {
      name: '林肯飞行家插电式混动版',
      url: '	https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/phev.jpg'
  },
  {
      name: '新款林肯飞行家AVIATOR',
      url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/2021aviator.jpg'
  },
  {
      name: '林肯领航员NAVIGATOR',
      url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/navigator2020.jpg'
  },
   {
      name: '林肯飞行家插电式混动版',
      url: '	https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/phev.jpg'
  }
]
const  App: FC = () => {
  const tabClick = (key: string) => {
    console.log('key', key)
  }
  return (
    <div className={styled.app}>
      <TabComponent tabNameData={tabCartData} onClick={tabClick}>
        <CartList cartData={cartData}/>
      </TabComponent>
    </div>
  )
}

export default App
