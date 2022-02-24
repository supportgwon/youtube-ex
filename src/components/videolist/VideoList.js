import React from "react";
import Video from "../video/Video";

function VideoList(props){
  return(
      <ul>
        {
          props.videoItems.map(videoItems=>(
            <Video videoItem={videoItems} key={videoItems.id} />
          ))
        }
      </ul>
  )
}
export default VideoList;