import React, { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../api/user";
import UserCard from "../components/cards/userCards";
import './home.css'

const Home = () => {
  const [ users, setUsers ] = useState([])
  useEffect(() => {
    async function init() {
      const data = await getUsers();
      if(data.length) {
        setUsers([...data])
      }
    }
    init()
  },[])
  return (
    <>
      <div className="home_page container">
        <div style={{marginBottom: '10px'}}>
          <h2>User List</h2>
        </div>
        <div className={'userCardWrapper'}>
          {users?.length > 0 && users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;