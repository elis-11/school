import { useDataContext } from "../../context/DataProvider";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import "./Users.scss";


export const Users = () => {
  const { users, filter, setFilter } = useDataContext();

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
              Total: {users.length} { users.length === 1 ? "User" : "Users"}
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
                <div>
                  <AiTwotoneEdit />
                  <AiFillDelete />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
