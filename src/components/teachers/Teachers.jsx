import { useDataContext } from "../../context/DataProvider";
import "./Teachers.scss";

export const Teachers = () => {
  const { teachers } = useDataContext();

  return (
    <div className="Teachers">
      <div className="content">
        <h2>1 on 1 help when you need it</h2>
        <h3>
          Whenever you need extra help, feel stuck or like you’re falling
          behind, you can book a 1:1 session with an instructor who will
          personally help you with your questions. So you can learn with
          confidence and stay on track.
        </h3>
        <div className="teacher">
          <div className="cards">
            {teachers.map((e) => (
              <div className="card" key={e._id}>
                <div>
                  <img src={e.image} alt={e.name} />
                </div>
                <div>{e.name}</div>
                <div className="bold">{e.title}</div>
                <div>city: {e.city}</div>
                <div>email: {e.email}</div>
                <div>
                  experience: {e.experience}{" "}
                  {e.experience === 1 ? "year" : "years"}
                </div>
                <div>
                  specialized:
                  <div className="bold">{e.specialized}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
