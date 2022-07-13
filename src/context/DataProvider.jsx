import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatusApi, fetchUsersApi } from "../helpers/apiCalls";

const API_URL = process.env.REACT_APP_API_URL;

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
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState();
  const [filter, setFilter] = useState(filterDefault);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetchUsersApi();
      if (result.error) {
        return console.log(result.error);
      }
      console.log(result);
      setUsers(result);
    };
    if (user) {
      fetchData();
    }
  }, [user]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await fetch(`${API_URL}/users`);
  //     const usersApi = await response.json();
  // console.log(usersApi);
  //     setUsers(usersApi);
  //   };
  //   if (user) {
  //     fetchData();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let result = await fetchProjectsApi();
  //     if (result.error) {
  //       return console.log(result.error);
  //     }
  //     console.log(result);
  //     setProjects(result);
  //   };
  //   if (user) {
  //     fetchData();
  //   }
  // }, [user]);

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
      let response = await fetch(`${API_URL}/employees`);
      const employeesApi = await response.json();
      // console.log({employeesApi});
      setEmployees(employeesApi);

      response = await fetch(`${API_URL}/courses`);
      const coursesApi = await response.json();
      setCourses(coursesApi);

      response = await fetch(`${API_URL}/teachers`);
      const teachersApi = await response.json();
      setTeachers(teachersApi);

      response = await fetch(`${API_URL}/projects`)
      const projectsApi = await response.json()
      setProjects(projectsApi);
    };
    fetchData();
  }, []);

  const sharedData = {
    user,
    setUser,
    employees,
    setEmployees,
    courses,
    setCourses,
    teachers,
    setTeachers,
    users,
    setUsers,
    projects,
    setProjects,
    errors,
    setErrors,
    filter,
    setFilter,
  };

  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  );
};
