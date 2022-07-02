/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataProvider";
import { fetchTeachersApi } from "../helpers/apiCalls";
import "./Teachers.scss";

export const Teachers = () => {
  const { teachers, setTeachers } = useDataContext();

  useEffect(() => {
    const fetchTeachers = async () => {
      const result = await fetchTeachersApi();
      if (result.error) {
        return console.log("[OUCH]", result.error);
      }
      setTeachers(result);
    };
    if (teachers) {
      fetchTeachers();
    }
  }, [teachers]);

  return (
    <div className="Teachers">
      <div className="title">Tralala</div>
      <div className="teacher">
        <div className="cards">
          {teachers.map((e) => (
            <div className="card" key={e._id}>
              <div>
                <img src={e.image} alt={e.name} />
              </div>
              <div>{e.name}</div>
              <div>city: {e.city}</div>
              <div>email: {e.email}</div>
              <div>title: {e.title}</div>
              <div>experience: {e.experience}</div>
              <div>specialized: {e.specialized}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
