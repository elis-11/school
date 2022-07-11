import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatusApi } from "../helpers/apiCalls";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};
const filterDefault = {
  name: "",
};

export const DataProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState();
  const [teachers, setTeachers] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState();
  const [filter, setFilter] = useState(filterDefault);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const usersApi = await response.json();
      // console.log(usersApi);
      setUsers(usersApi);
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const result = await checkAuthStatusApi();
      console.log(result);
      if (!result.error) {
        setUser(result);
      }
    };
    checkAuthStatus(); // Load user in to state
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/employees`);
      const employeesApi = await response.json();
      // console.log({employeesApi});
      setEmployees(employeesApi);

      response = await fetch(`${process.env.REACT_APP_API_URL}/courses`);
      const coursesApi = await response.json();
      setCourses(coursesApi);

      response = await fetch(`${process.env.REACT_APP_API_URL}/teachers`);
      const teachersApi = await response.json();
      setTeachers(teachersApi);
    };
    fetchData();
  }, []);

  const sharedData = {
    employees,
    setEmployees,
    courses,
    setCourses,
    user,
    setUser,
    users,
    setUsers,
    teachers,
    setTeachers,
    errors,
    setErrors,
    filter,
    setFilter,
  };

  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  );
};
