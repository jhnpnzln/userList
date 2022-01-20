import React, { useEffect, useState } from 'react';

import UserData from './_core/userData';

export default function UserList() {
    var userData = new UserData()
    const [userInfo, setUserInfo] = useState([])
    
    const handleLoadData = () => {
        userData.getUserData()
        .then((res) => {
            setUserInfo([...userInfo, res.results[0]])
        })
    }

    useEffect(() => {
        handleLoadData()
        localStorage.setItem('userInfos', JSON.stringify(userInfo))
    },[])

  return <div>
      <div className='container'>
        <h1 className='text-center'>User List</h1>
      </div>
      <div className='btnContainer'>
        <button onClick={handleLoadData} className='btn btn-primary refreshBtn'>Reresh</button>
      </div>
      <div className='row'>
          {
            
              userInfo && userInfo.map((user, i) => {
                  return(
                    <div className='col-md-4'>
                        <div className='card' key={i}>
                             <div className='card-body'>
                                <ul className='userList'>
                                    <li>
                                        <img className='rounded' src={user.picture.large} />
                                    </li>
                                    <li>Name: {user.name.title}, {user.name.first} {user.name.last}</li>
                                    <li>Email: {user.email}</li>
                                    <li>Gender: {user.gender}</li>
                                    <li>Phone: {user.phone}</li>
                                    <li>Mobile: {user.cell}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                  )
              })
          }
      </div>
  </div>;
}
