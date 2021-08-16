import React, { FC, useEffect, useState } from 'react'
import styled from './SelectCart.module.css'
import {TabComponent} from '../../components'

const  App: FC = () => {
  return (
    <div className={styled.app}>
      <TabComponent />
    </div>
  )
}

export default App
