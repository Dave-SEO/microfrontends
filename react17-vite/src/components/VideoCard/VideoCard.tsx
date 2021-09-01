import React, {FC} from 'react'
import styled from './VideoCard.module.css'
export interface contentDataProps  {
    articleId: number;
    authorId: number;
    cmtNum: string;
    coverImg: string;
    headPic: string;
    name: string;
    pv: string;
    time: string;
    title: string;
}
interface VideoCardProps {
    contentData: contentDataProps[],
    onClick?: (list: contentDataProps) => void
}
export const VideoCard: FC<VideoCardProps> = (props) => {
    const {contentData, onClick} = props
    const handler = (list: contentDataProps) => {
        if(onClick){
            onClick(list)
        }
    }
    return <ul className={styled.videoContent}>
        {
            contentData.map((ret, index) => (
                <li className={styled.cardList} key={index} onClick={() => handler(ret)}>
                    <img src={ret.coverImg} />
                    <p>{ret.title}</p>
                </li>
            ))
        }
    </ul>
}
