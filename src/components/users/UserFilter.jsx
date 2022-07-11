import React from "react";
import { useDataContext } from "../../context/DataProvider";

export const UserFilter = () => {
  const { filter, setFilter } = useDataContext();

  const onFilterUser = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <form className="filter">
      <div className="name">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onFilterUser}
        />
      </div>
    </form>
  );
};
