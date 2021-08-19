import React, {FC, useEffect, useState} from "react";
import styled from './VideoDetails.module.css'
const detailsData = {
    id: 1,
    url: 'https://vc1-al1-pl-agv.autohome.com.cn/video-15/FF91E122A113F07F/2016-07-06/1D6E1DA18F1BC0D0-300.mp4?key=64E4A294B8BD62B7EA7885F4AFBD6D22&time=1629372237',
    title: '视频展示了9ff改装的1070马力保时捷997秀声浪加速的场面。',
    poster: 'https://img2.autoimg.cn/g17/M0D/BD/5C/wKgH51d9xoSAOK5VAABiV2Kl7UA219.jpg'
}
interface detailsProps {
    id: number,
    url: string,
    title: string,
    poster: string
} 
const VideoDetails: FC = () => {
    const [data, setData] = useState<Partial<detailsProps>>({})
    useEffect(() => {
        setData(detailsData)
    })
     return <div className={styled.videoContent}>
              <video src={data.url} poster={data.poster} autoPlay></video>
              <p>{data.title}</p>
            </div>
}

export default VideoDetails