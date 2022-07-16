import { useDataContext } from "../../context/DataProvider";
import "./Employees.scss";

export const Employees = () => {
  const { employees } = useDataContext();

  return (
    <div className="employees">
      <div className="content">
        <div className="title">
          A PERSONALIZED SUPPORT SYSTEM BASED ON 40+ YEARS OF EXPERIENCE
        </div>
        <div className="text">
          Of course, we weren’t helping people to find tech jobs back in the
          80s. But we did spend 40 years perfecting our training programs to
          help people find jobs in all kinds of industries. Now we have taken
          our system and applied it to the tech industry. You won’t get this
          level of support anywhere else:
        </div>
        <div className="employee">
          <div className="cards">
            {employees.map((employee) => (
              <div className="card" key={employee._id}>
                <div>
                  <img src={employee.image} alt={employee.name} />
                </div>
                <div className="qualification">{employee.qualification}</div>
                {/* <div>{employee.role}</div> */}
                <div>{employee.name}</div>
                <div>{employee.email}</div>
                <div>City: {employee.city}</div>qualification
                <div>
                  experience: {employee.experience}{" "}
                  {employee.experience === 1 ? "jear" : "jears"}
                </div>
                <div className="specialized">
                  specialized: {employee.specialized}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
