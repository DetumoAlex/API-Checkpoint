import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
   
    axios
      .get("https://jsonplaceholder.typicode.com/users")  
      .then((response) => {
       
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-5">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {listOfUser.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-600 mb-2">{user.phone}</p>
            <p className="text-gray-600">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
