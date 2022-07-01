const API_URL = process.env.REACT_APP_API_URL;

export const fetchEmployeesApi = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    credentials: "include",
  });
  return response.json();
};

export const fetchCoursesApi = async () => {
  const response = await fetch(`${API_URL}/courses`, {
    credentials: "include",
  });
  return response.json();
};

export const loginApi = async (email, password) => {
  const credentials = { email, password };

  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",  
  });

  return response.json();
};

export const signupApi = async (name, email, password) => {
  const userData = { name, email, password };

  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return response.json();
};

export const logoutApi = async () => {
  const response = await fetch(`${API_URL}/users/logout`, {
    credentials: "include",
  });
  return response.json();
};

export const checkAuthStatusApi = async () => {
  const response = await fetch(`${API_URL}/users/me`, {
    credentials: "include",
  });
  return response.json();
};
