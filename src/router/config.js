const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/dashboard", "/dashboard"],
    exact: true,
    component: "Dashboard",
  },
  {
    path: ["/signin", "/signin"],
    exact: true,
    component: "SignIn",
  },
  {
    path: ["/signup", "/signup"],
    exact: true,
    component: "SignUp",
  }
];

export default routes;
