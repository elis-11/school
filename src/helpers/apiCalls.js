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

export const fetchTeachersApi = async () => {
  const response = await fetch(`${API_URL}/teachers`, {
    credentials: "include",
  });
  return response.json();
};

export const fetchUsersApi = async () => {
  const response = await fetch(`${API_URL}/users`, {
    credentials: "include",
  });
  return response.json();
};

export const fetchProjectsApi = async ()=> {
  const response = await fetch(`${API_URL}/projects`, {
    credentials: "include",
  })
  return response.json();
}

export const checkAuthStatusApi = async () => {
  const response = await fetch(`${API_URL}/users/me`, {
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
      Accept: "application/json",
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
      Accept: "application/json",
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

export const updateUserAPI = async (userId, updateData) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  return response.json();
};

export const deleteUserApi= async (userId)=>{
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE"
  })
  return response.json();
}
