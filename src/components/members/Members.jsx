import { useDataContext } from "../../context/DataProvider";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import "./Members.scss";

export const Members = () => {
  const { users } = useDataContext();

  return (
    <div className="users">
      <form className="filter">
        <div className="name">
          <input type="text" name="name" placeholder="Search" />
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
                <div className="icons">
                  <AiTwotoneEdit className="icon" role="button" tabindex="0" />
                  <AiFillDelete className="icon" role="button" tabindex="0" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
