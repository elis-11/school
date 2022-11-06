import { useDataContext } from "../../context/DataProvider";
import "./Users.scss";
import {useNavigate} from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { deleteUserApi, fetchUsersApi } from "../../helpers/apiCalls";

export const Users = () => {
  const { user, users, setUsers } = useDataContext();
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const inputRef = useRef();

  useEffect(() => {
    if (!user) {
      return navigate('/login')
    }
    const fetchData = async () => {
      let result = await fetchUsersApi();
      if (result.error) {
        return console.log(result.error);
      }
      console.log(result);
      setUsers(result);
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  const handleDelete = async (userCopy) => {
    const response = await deleteUserApi(userCopy._id);
    console.log(response);

    const usersCopy = users.filter((_user) => {
      return _user._id !== userCopy._id;
    });
    setUsers(usersCopy);
  };

  return (
    <div className="users">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          autoFocus
          ref={inputRef}
          id="search"
          type="text"
          role="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>
              Total: {users.length} {users.length === 1 ? "User" : "Users"}
            </th>
            <th>name</th>
            <th>e-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>
                <img src={`/images/users/${user.image}`} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
