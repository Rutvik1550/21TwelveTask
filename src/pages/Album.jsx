import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAlbums, getUsers } from "../api/user";
import AlbumCard from "../components/cards/albumCard";
import './album.css'

const Album = () => {
  const [ Albums, setAlbums ] = useState([])
  const [ user, setUser ] = useState()
  const query = useLocation().search;
  const userId = new URLSearchParams(query).get('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if(userId) {
      async function init() {
        const data = await getAlbums(userId);
        if(data.length) {
          setAlbums([...data])
        }
        const userData = await getUsers(userId);
        if(userData.length) {
          setUser(userData[0])
        }
      }
      init()
    } else {
      navigate('/')
    }
  },[userId, navigate])

  return (
    <>
      <div className="album_page container">
        <div style={{marginBottom: '10px'}}>
          <h2>Album List of {user?.name ?? ''}</h2>
        </div>
        <div className={'albumCardWrapper'}>
          {Albums?.length > 0 && Albums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Album;