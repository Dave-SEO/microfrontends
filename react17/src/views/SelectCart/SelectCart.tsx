import React, { FC, useState } from 'react'
import styled from './SelectCart.module.css'
import {TabComponent} from '../../components'

const  App: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styled.app}>
      <TabComponent />
    </div>
  )
}

export default App
