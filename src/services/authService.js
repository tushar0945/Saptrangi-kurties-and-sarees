// export const AuthService = {
//   // ==========================
//   // LOCAL DB GETTER
//   // ==========================
//   getLocalUsers() {
//     return JSON.parse(localStorage.getItem("local_users")) || [];
//   },

//   saveLocalUsers(users) {
//     localStorage.setItem("local_users", JSON.stringify(users));
//   },

//   // ==========================
//   // REGISTER OR GET USER
//   // ==========================
//   registerOrGetUser(phone) {
//     let users = this.getLocalUsers();

//     // check if user exists
//     let existing = users.find((u) => u.phone === phone);
//     if (existing) return existing;

//     // create new user
//     const newUser = {
//       id: Date.now(),
//       phone,
//       createdAt: new Date().toISOString(),

//       // profile fields (empty on first time)
//       firstName: "",
//       lastName: "",
//       email: "",
//       gender: "",
//       dob: "",
//     };

//     users.push(newUser);
//     this.saveLocalUsers(users);

//     return newUser;
//   },

//   // ==========================
//   // UPDATE USER PROFILE
//   // ==========================
//   updateUserProfile(id, updates) {
//     let users = this.getLocalUsers();

//     const index = users.findIndex((u) => u.id === id);
//     if (index === -1) return null;

//     // update specific fields
//     users[index] = {
//       ...users[index],
//       ...updates,
//     };

//     this.saveLocalUsers(users);
//     return users[index];
//   },

//   // ==========================
//   // AUTH SESSION
//   // ==========================
//   setAuthSession(user, token) {
//     localStorage.setItem("auth_user", JSON.stringify(user));
//     localStorage.setItem("auth_token", token);
//   },

//   getAuthSession() {
//     const user = JSON.parse(localStorage.getItem("auth_user"));
//     const token = localStorage.getItem("auth_token");
//     if (!user || !token) return null;

//     return { user, token };
//   },

//   logout() {
//     localStorage.removeItem("auth_user");
//     localStorage.removeItem("auth_token");
//   },

//   // Fake token
//   generateToken(id) {
//     return "token_" + id;
//   },

//   // OTP
//   generateOTP() {
//     return String(Math.floor(100000 + Math.random() * 900000));
//   },
// };

export const AuthService = {
  getLocalUsers() {
    return JSON.parse(localStorage.getItem("local_users")) || [];
  },

  saveLocalUsers(users) {
    localStorage.setItem("local_users", JSON.stringify(users));
  },

  registerOrGetUser(phone) {
    let users = this.getLocalUsers();

    let existing = users.find((u) => u.phone === phone);
    if (existing) return existing;

    const newUser = {
      id: Date.now(),
      phone,
      createdAt: new Date().toISOString(),

      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      dob: "",
    };

    users.push(newUser);
    this.saveLocalUsers(users);

    return newUser;
  },

  updateUserProfile(id, updates) {
    let users = this.getLocalUsers();

    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    users[index] = {
      ...users[index],
      ...updates,
    };

    this.saveLocalUsers(users);
    return users[index];
  },

  setAuthSession(user, token) {
    // ★ ALWAYS store updated user from local DB ★
    const freshUser = this.registerOrGetUser(user.phone);

    localStorage.setItem("auth_user", JSON.stringify(freshUser));
    localStorage.setItem("auth_token", token);
  },

  getAuthSession() {
    const user = JSON.parse(localStorage.getItem("auth_user"));
    const token = localStorage.getItem("auth_token");
    if (!user || !token) return null;

    return { user, token };
  },

  logout() {
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_token");
  },

  generateToken(id) {
    return "token_" + id;
  },

  generateOTP() {
    return String(Math.floor(100000 + Math.random() * 900000));
  },
};
