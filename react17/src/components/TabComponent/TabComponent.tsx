import React, {FC, useEffect, useState} from 'react'
import { Tabs, Image } from 'antd';
import styled from './TabComponent.module.css'
import axios  from 'axios';
const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}
const  tabCartData = 
['推荐', '热门车系', '10万以下', '10-20万', '20-30万', '30万以上']
const cart = [
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


export const TabComponent: FC = () => {
  const [data, setData] = useState(cartVideo)
  useEffect(() => {

  }, [])
  return  <Tabs defaultActiveKey="0" onChange={callback}>
              {
                tabCartData.map((item, i) => (
                  <TabPane tab={item} key={i}>
                    {
                      cart.map((cartList, index) => (
                        <div key={index} className={styled.tabContent}>
                          <Image width={200} src={cartList.url} preview={false}/>
                          <span>{cartList.name}</span>
                        </div>
                      ))
                    }
                  </TabPane>
                ))
              }
            </Tabs>
}