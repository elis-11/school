/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../../context/DataProvider";
import { fetchUsersApi } from "../../helpers/apiCalls";
import "./Users.scss";
import { MdDelete } from "react-icons/md";

export const Users = () => {
  const { users, setUsers } = useDataContext();
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputRef = useRef();

  const handleAddUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addUser(newUser);
    setNewUser({ ...newUser, name: "", email: "", password: "" });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetchUsersApi();
      if (result.error) {
        return console.log("[OUCH]", result.error);
      }
      setUsers(result);
    };
    if (users) {
      fetchUsers();
    }
  }, [users]);

  const addUser = (userNew) => {
    const userNewState = {
      _id: Date.now().toString(),
      ...userNew,
    };
    setUsers([...users, userNewState]);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase)
  );

  return (
    <div className="users">
      <div className="title">
        Total: {filteredUsers.length}{" "}
        {filteredUsers.length === 1 ? "User" : "Users"}
      </div>

      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            id="sarch"
            type="text"
            role="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            filteredUsers={filteredUsers}
          />
        </form>
      </div>

      <div className="add">
        <input
          autoFocus
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Name"
          required
          value={newUser.name}
          onChange={handleAddUser}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={newUser.email}
          onChange={handleAddUser}
        />
        <input type="password" name="password" placeholder="Password" value={newUser.password}
         onChange={handleAddUser}  />
 <button onClick={() => submitAdd(inputRef.current.focus())}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>e-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, _id) => (
            <tr key={user._id}>
              <td>
                <img src={`/images/users/${user.image}`} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <MdDelete className="icon">
                  {/* onClick={()=> deleteUser(user._id)}  */}
                </MdDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
