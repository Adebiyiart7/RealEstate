const constants = {
  passwordRegEx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
  passwordError:
    "Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.",

  asyncStorageNames: {
    favoriteHomes: "@favorites",
  },
};

export default constants;
