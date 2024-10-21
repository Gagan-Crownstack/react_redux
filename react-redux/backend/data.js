let users = [];

export const addUser = (user) => {
  users.push(user);
};

export const getUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

