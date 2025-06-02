import React, { useState } from 'react'
import { useContext } from 'react'
import { loginContext } from '../context/loginContext'
import { useNavigate } from 'react-router-dom'
import { popUp } from '../functions/popUp'

const Profile = () => {

  const {data, setData, initial} = useContext(loginContext)
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => {
      setToggle(!toggle);
  }

  const logOut = ()=> {
    setData(initial);
    navigate("/login")
    popUp("error","You have logged out !");
  }

  
  return (
    <div>
        <button onClick={toggleHandler}>
          {data.username}
        </button>
        {toggle && 
        (
          <div>
            <h3>{data.username}</h3>
            <h4>{data.email}</h4>
            <button onClick={logOut}>
              log out
            </button>
          </div>
        )
        
        }
    </div>
  )
}

export default Profile