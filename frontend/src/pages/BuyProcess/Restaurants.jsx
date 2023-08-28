import React, { useEffect, useState } from "react";
import css from "../../css/restaurants.css";
import axios from "axios";
import { Icon } from "@iconify/react";

export default function Restaurants() {
  const urlImg = "http://5.161.211.8:88/storage/";
  const endpoint = "http://5.161.211.8:88/api/users/all";
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
    <section className="restaurants">
      <h1 className="tittle-restaurants">Choose your restaurant</h1>
      {users.map((user) => (
        <a className="bttn-categ" href="/suppliers">
          <div className="text-categ" key={user.email}>
            <h2>
              {user.names} {user.surnames}
            </h2>
            <p>Address restaurant</p>
          </div>
          <img src={urlImg + user.avatar} />
        </a>
      ))}
      <button className="bttn btn-primary"><Icon icon="simple-line-icons:plus" className="icon-plus" />Add restaurants</button>
    </section>
  );
}
