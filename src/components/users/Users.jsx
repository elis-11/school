/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDataContext } from "../../context/DataProvider";
import { fetchUsersApi } from "../../helpers/apiCalls";
import "./Users.scss";
import { MdDelete } from "react-icons/md";

export const Users = () => {
  const { users, setUsers, filter, setFilter } = useDataContext();

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

  const onFilterUser = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="users">
      <form className="filter">
        <div className="name">
          <input
            type="text"
            name="name"
            placeholder="Search"
            onChange={onFilterUser}
          />
        </div>
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
          {users.map((user, _id) => (
            <tr key={user._id}>
              <td>
                <img src={`/images/users/${user.image}`} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <MdDelete className="icon"></MdDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
