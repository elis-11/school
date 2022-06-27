/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { fetchEmployeesApi } from "../components/helpers/apiCalls";
import { useDataContext } from "../context/DataProvider";
import "../components/employees/Employees.scss";

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

        <div className="cards">
          {employees.map((e) => (
            <div className="card" key={e._id}>
              <div>
                <img src={e.image} alt="photo" />
              </div>
              <div>{e.role}</div>
              <div>{e.name}</div>
              <div>{e.email}</div>
              <div>City: {e.city}</div>
              <div>{e.qualification}</div>
              <div>experience:
                {e.experience} years</div>
              <div>specialized: {e.specialized}</div>
            </div>
          ))}
        </div>
      </div>
  );
};
