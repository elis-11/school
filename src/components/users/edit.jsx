import { useState } from "react";
import { useDataContext } from "../../context/DataProvider";
import { deleteUserApi, updateUserAPI } from "../../helpers/apiCalls";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import "./Users.scss";

export const Users = () => {
  const { user, users, setUsers } = useDataContext();
  const [search, setSearch] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [userCopy, setUserCopy] = useState(user);

  const handleChange = (e) => {
    const updated = { ...userCopy, [e.target.name]: e.target.value };
    setUserCopy(updated);
  };

  const submitUpdate = async () => {
    // send updated user (not saved yet) => to API
    const userUpdatedApi = await updateUserAPI(userCopy._id, userCopy);
    console.log(userUpdatedApi);
    setEditMode(false);

    // save in Browser
    const usersCopy = users.map((_user) => {
      return _user._id === userUpdatedApi._id ? userUpdatedApi : _user;
    });
    setUsers(usersCopy);
  };

  const handleDelete = async () => {
    const response = await deleteUserApi(userCopy._id);
    console.log(response);
    const usersCopy = users.filter((_user) => {
      return _user._id !== userCopy._id;
    });
    setUsers(usersCopy);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users">
      <div className="total">
        Total: {users.length} {users.length === 1 ? "User" : "Users"}
      </div>

      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="search"
          type="text"
          role="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
      </form>

      <div className="components">
        {filteredUsers.map((user) => (
          <div className="user" key={user._id}>
            {editMode ? (
              <div className="edit">
                <div className="avatar">
                  <img src={`/images/users/${user.image}`} alt={user.name} />
                </div>
                <input
                  className="name"
                  name="name"
                  value={userCopy.name}
                  onChange={handleChange}
                />
                <input
                  className="email"
                  name="email"
                  value={userCopy.email}
                  onChange={handleChange}
                />
                <MdSaveAlt className="save" onClick={submitUpdate} />
              </div>
            ) : (
              <div className="item">
                <img src={`/images/users/${user.image}`} alt={user.name} />
                <div className="name">{user.name}</div>
                <div className="email">{user.email}</div>
              </div>
            )}
            <div className="icons">
              <AiTwotoneEdit
                className="icon"
                onClick={() => setEditMode(!editMode)}
              />
              <AiFillDelete className="icon" onClick={() => handleDelete()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
.users {
    // margin: auto;
    display: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    place-items: center;
  .total{
  margin-left:4rem;
  font-weight: bold;
  }
    .search {
      input {
        margin-left: 37%;
        width: 24%;
        height: 2.3rem;
        font-size: 1.2rem;
        padding-left: 2em;
      }
    }
    .components {
      width: 100%;
      border-collapse: collapse;
      color: #777;
      // text-align: left;
      font-size: 1.1rem;
      .user {
        display: flex;
        justify-content: space-evenly;
        padding: 0.3rem;
        margin: 0.5rem;
        border-bottom: 1px solid white;
        .item{
          img {
            width: 3rem;
          border-radius: 50%;
          align-items: start;
        }
        .name {
          width: 20%;
          align-items: start;
        }
        .email {
          width: 25%;
          align-items: start;
        }
      }
        .icons {
          width: 10%;
          align-items: start;
      }
        
      }
    }
  }
  