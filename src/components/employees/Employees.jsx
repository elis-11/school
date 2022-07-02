/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { fetchEmployeesApi } from "../helpers/apiCalls";
import { useDataContext } from "../../context/DataProvider";
import "./Employees.scss";

export const Employees = () => {
  const { employees, setEmployees } = useDataContext();

  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await fetchEmployeesApi();
      if (result.error) {
        return console.log("[OUCH]", result.error);
      }
      setEmployees(result);
    };
    if (employees) {
      fetchEmployees();
    }
  }, [employees]);

  return (
    <div className="employees">
      <div className="title">Tralala</div>
      <div className="employee">
        <div className="cards">
          {employees.map((e) => (
            <div className="card" key={e._id}>
              <div>
                <img src={e.image} alt={e.name} />
              </div>
              <div>{e.role}</div>
              <div>{e.name}</div>
              <div>{e.email}</div>
              <div>City: {e.city}</div>
              <div>{e.qualification}</div>
              <div>
                experience:
                {e.experience} years
              </div>
              <div>specialized: {e.specialized}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
