import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPhotos } from "../api/user";
import PhotoCard from "../components/cards/photoCard";
import './photos.css'

const Photos = () => {
  const [ photos, setPhotos ] = useState([])
  const query = useLocation().search;
  const albumId = new URLSearchParams(query).get('albumId');
  const navigate = useNavigate();

  useEffect(() => {
    if(albumId) {
      async function init() {
        const data = await getPhotos(albumId);
        if(data.length) {
          setPhotos([...data])
        }
      }
      init()
    } else {
      navigate('/')
    }
  },[albumId, navigate])

  return (
    <>
      <div className="photo_page container">
        <div style={{marginBottom: '10px'}}>
          <h2>Photos</h2>
        </div>
        <div className="photoCardWrapper">
          {photos?.length > 0 && photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Photos;