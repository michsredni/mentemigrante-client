import React, { useEffect, useState } from 'react'
import UserCard from "../components/UserCard"
import service from '../service/service.config';

function UserList() {
const [users, setUsers] = useState([]);

useEffect (() => {
getData()

}, []);

const getData = async () => {
  try {
    const response = await service.get('/usuarios')
    console.log(response.data)
    setUsers(response.data)
    
  } catch (error) {
    console.log(error)
  }
}

if(users === null){
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading users data...</span>
    </Spinner>
  );
}

  return (
    <div>

      {users.map((eachUser) => {
        return(
          <UserCard  key={eachUser._id} eachUser={eachUser}/>
        )
      })}
    </div>
  )
}

export default UserList