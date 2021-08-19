import React, {FC} from 'react'
import styled from './CartList.module.css'
import { Tabs, Image } from 'antd';
type list = {url: string, name: string}
interface CartListProps {
    cartData: list[]
}
export const CartList: FC<CartListProps> = (props) => {
    const {cartData} = props
    return (
        <div>
            {
                 cartData.map((cartList, index) => (
                    <div key={index} className={styled.tabContent}>
                      <Image width={200} src={cartList.url} preview={false}/>
                      <span>{cartList.name}</span>
                    </div>
                  ))
            }
        </div>
    )
}