import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhotos } from "../../api/user";
import './albumCard.css'
import noImage from '../../assets/images/noImage.jpg';

const AlbumCard = ({album}) => {
  const navigate = useNavigate()
  const [ albumPhotos, setAlbumPhotos ] = useState([])

  const handleRedirect = (id) => {
    navigate(`/photos?albumId=${id}`)
  }

  useEffect(() => {
    if(album.id) {
      async function init() {
        const data = await getPhotos(album.id)
        if(data.length) {
          const thumbnails = [];
          data.every((photo, index) => {
            if(index < 4) {
              thumbnails.push(photo.thumbnailUrl)
            } else {
              return false;
            }
            return true
          })
          if(thumbnails.length) {
            setAlbumPhotos(thumbnails)
          }
        }
      }
      init()
    }
  },[album])

  return (
    <>
      <div className="albumContainer" key={`album-card-${album.id}`} onClick={() => handleRedirect(album.id)}>
        {albumPhotos.length > 0 ? (
          <>
            <div style={{width: '100%', height: '50%', display: 'flex'}}>
              <div style={{backgroundImage: `url(${albumPhotos[0]})`}} className={'album_thumb'}></div>
              <div style={{backgroundImage: `url(${albumPhotos[1]})`}} className={'album_thumb'}></div>
            </div>
            <div style={{width: '100%', height: '50%', display: 'flex'}}>
              <div style={{backgroundImage: `url(${albumPhotos[2]})`}} className={'album_thumb'}></div>
              <div style={{backgroundImage: `url(${albumPhotos[3]})`}} className={'album_thumb'}></div>
            </div>
          </>
        ) : (
          <img src={noImage} alt="album_thumb"/>
        )}
      </div>
    </>
  )
}


export default AlbumCard;