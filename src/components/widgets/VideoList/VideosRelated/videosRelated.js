import React from 'react';
import style from '../videoList.css'
// import VideoList from '../videoList';
import VideoListTemplate from '../videoListTemplate';


const VideosRelated = (props) => (
    <div className={style.relatedWrapper}>
        <VideoListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default VideosRelated;