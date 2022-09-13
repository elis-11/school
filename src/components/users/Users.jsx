import { useDataContext } from "../../context/DataProvider";
import "./Users.scss";
import { useRef, useState } from "react";

export const Users = () => {
  const { users } = useDataContext();
  const [search, setSearch] = useState("");
  const inputRef= useRef();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

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
