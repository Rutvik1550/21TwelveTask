import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './userCard.css'

const UserCard = ({user}) => {
  const navigate = useNavigate()
  const handleRedirect = (id) => {
    navigate(`/albums?userId=${id}`)
  }
  return (
    <>
      <div className="cardContainer" key={`user-card-${user.id}`} onClick={() => handleRedirect(user.id)}>
        <Avatar sx={{height: '160px', width: '170px', borderRadius: '20px'}}/>
        <h6>{user.name}</h6>
      </div>
    </>
  )
}


export default UserCard;