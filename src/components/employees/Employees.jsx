import { useDataContext } from "../../context/DataProvider";
import "./Employees.scss";

export const Employees = () => {
  const { employees } = useDataContext();


  return (
    <div className="employees">
      <div className="title">Tralala</div>
      <div className="employee">
        <div className="cards">
          {employees.map((employee) => (
            <div className="card" key={employee._id}>
              <div>
                <img src={employee.image} alt={employee.name} />
              </div>
              <div>{employee.qualification}</div>
              {/* <div>{employee.role}</div> */}
              <div>{employee.name}</div>
              <div>{employee.email}</div>
              <div>City: {employee.city}</div>
              <div>
                experience:
                {employee.experience} years
              </div>
              <div>specialized: {employee.specialized}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
