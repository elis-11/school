/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDataContext } from "../../context/DataProvider";
import { fetchUsersApi } from "../../helpers/apiCalls";
import "./Users.scss";
import {MdDelete} from "react-icons/md"

export const Users = () => {
  const { users, setUsers } = useDataContext();

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


  return (
    <div className="users">
      <div className="title">Total: {users.length} Users</div>
      <table>
        <thead>
          <tr>
            <th></th>
            {/* <th>photo</th> */}
            <th>name</th>
            <th>e-mail</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>
                  {/* <img src={`/images/users/${u.photo}`} alt={u.name} /> */}
                  <img src={u.image} alt={u.name} />
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <MdDelete className="icon">
                     {/* onClick={()=> deleteUser(u._id)}  */}
                  </MdDelete>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};
