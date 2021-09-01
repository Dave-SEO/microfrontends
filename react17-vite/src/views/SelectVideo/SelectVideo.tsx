import React, {FC} from "react"
import styled from './SelectVideo.module.css'
import {TabComponent} from '../../components'
import {VideoCard, contentDataProps} from '../../components'
import {videoList} from './data'
const tabData: string[] = ['全部', '车评', '周边', '自驾游', '改装']

const contentData: contentDataProps[] = videoList
 const SelectVideo: FC = () => {
     const videoClick = (list: contentDataProps) => {
         console.log(list)
     }
    return <TabComponent tabNameData={tabData}>
            <VideoCard contentData={contentData} onClick={videoClick}/>
         </TabComponent>
}

export default SelectVideo