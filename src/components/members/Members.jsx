import { useDataContext } from "../../context/DataProvider";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import "./Members.scss";
import { useRef, useState } from "react";

export const Members = () => {
  const { users } = useDataContext();
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users">
      <form
        className="search"
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
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>
              Total: {users.length} {users.length === 1 ? "Member" : "Members"}
            </th>
            <th>name</th>
            <th>e-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, _id) => (
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
