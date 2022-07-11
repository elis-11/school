import { useDataContext } from "../../context/DataProvider";
import "./Teachers.scss";

export const Teachers = () => {
  const { teachers } = useDataContext();


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
              <div>{e.title}</div>
              <div>city: {e.city}</div>
              <div>email: {e.email}</div>
              <div>
                experience: {e.experience}{" "}
                {e.experience === 1 ? "year" : "years"}
              </div>
              <div>specialized: <br /> {e.specialized}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
