import React, { useState, useEffect } from 'react';
import css from "../css/restaurants.css";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Restaurants() {
    const urlImg  ="http://5.161.211.8:88/storage/"
  const endpoint = 'http://5.161.211.8:88/api/users/all';
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const response = await axios.get(endpoint);
      setUsers(response.data.users); // Accedemos al array de usuarios dentro del objeto response.data
      console.log(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className='restaurants'>
      <h1 className='tittle-restaurants'>Choose your restaurant</h1>
      {users.map((user) => (
        <a className="bttn-categ" href='/login'>
          <div className="text-categ" key={user.email}>
            <h2>{user.names} {user.surnames}</h2>
            <p>Address restaurant</p>
          </div>  
          <img src={urlImg + user.avatar}/>
        </a>
      ))}
      
    </section>
  );
}