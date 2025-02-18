export const refreshToken = async (cb) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/admin/refresh`,
      {
        method: "POST",
        credentials: "include", //send Cookie
      }
    );
    if (!response.ok) throw new Error("Refresh Failed");
    const { accesstoken } = await response.json();
    localStorage.setItem("access-token", accesstoken);
    return cb();
  } catch (error) {
  }
};
