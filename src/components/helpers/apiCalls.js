const API_URL = process.env.REACT_APP_API_URL;

export const fetchEmployeesApi = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    credentials: "include",
  });
  return response.json();
};
