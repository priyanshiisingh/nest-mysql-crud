import React, { useState, useEffect } from "react";
import axios from "axios";

function FormTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  console.log(users);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/users");

    setUsers(response.data.users);
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">FullName</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.birthday}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FormTable;
