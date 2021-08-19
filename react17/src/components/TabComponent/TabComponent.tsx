import React, {FC, useEffect, useState} from 'react'
import { Tabs } from 'antd';
import styled from './TabComponent.module.css'
import {videoList} from './data'

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

interface TabProps{
  tabNameData: string[]
  onClick?: (key: string) => void
}

export const TabComponent: FC<TabProps> = (props) => {
  const [cart, setCart] = useState<any []>([])
  useEffect(() => {
    setCart(videoList)
  })
  const {tabNameData, children, onClick} = props
  const clickHandler = (activeKey: string) => {
    onClick && onClick(activeKey)
  }
  return  <Tabs defaultActiveKey="0" onChange={clickHandler}>
              {
                tabNameData.map((item, i) => (
                  <TabPane tab={item} key={i}>
                    {
                      children? children : new Error('必需传入一个子组件')
                    }
                  </TabPane>
                ))
              }
            </Tabs>
}