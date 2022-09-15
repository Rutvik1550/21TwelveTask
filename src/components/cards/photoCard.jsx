import React from "react";
import './photoCard.css'
import noImage from '../../assets/images/noImage.jpg';

const PhotoCard = ({photo}) => {

  return (
    <>
      <div className="photoContainer" key={`photo-card-${photo.id}`}>
        <img src={photo.thumbnailUrl ?? noImage} alt="photo_thumb"/>
      </div>
    </>
  )
}


export default PhotoCard;