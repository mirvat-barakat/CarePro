export const redirectToDashboard = (navigate) => {
  const role = localStorage.getItem("role");

  if (role === "doctor") {
    navigate("/doctors");
  } else if (role === "patient") {
    navigate("/patients");
  }
};