import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/employees`);
      const employeesApi = await response.json();
      console.log(employeesApi);
      setEmployees(employeesApi);
    };

    fetchData();
  }, []);

  const sharedData = {
    employees,
    setEmployees,
  };

  return (
    <DataContext.Provider value={sharedData}>
      {children}
      </DataContext.Provider>
  );
};
