import { useDataContext } from "../../context/DataProvider";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import "./Members.scss";
import { useEffect, useRef, useState } from "react";
import { deleteUserApi, fetchUsersApi } from "../../helpers/apiCalls";

export const Members = () => {
  const {user, users, setUsers } = useDataContext();
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  useEffect(() => {
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


  //Search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  //Delete
  // const handleDelete = (id) => {
  //   const deleteUser = users.filter((user) => user._id !== id);
  //   setUsers(deleteUser);
  // };
  const handleDelete = async (userId) => {
    const response = await deleteUserApi(userId);
    console.log(response);

    const deleteUser = users.filter((_user) => _user._id !== userId);
    setUsers(deleteUser);
  };

  return (
    <div className="users">
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <BiSearch style={{marginRight:'5.5em'}}/> */}
        <input
          autoFocus
          ref={inputRef}
          id="search"
          type="text"
          role="search"
          placeholder="Search..."
          value={search}
          style={{marginLeft:'-6em'}}
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
                  <AiTwotoneEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt
                    className="icon"
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(user._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
