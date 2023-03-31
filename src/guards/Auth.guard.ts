
export const verifyLogin = (user: any) => {
  if (!user) {
    console.log(user)
    console.log("no user defined");
    return false;
  } else {
    console.log(user);
    return true;
  }
};
