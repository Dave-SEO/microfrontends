import React, { FC, useState } from 'react'
import styled from './SelectCart.module.css'
import {TabComponent} from '../../components'
// https://hj.pcauto.com.cn/intf/video/listByPv.do?callback=jsonp1628929174259&num=6
const  App: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styled.app}>
      <TabComponent />
    </div>
  )
}

export default App
