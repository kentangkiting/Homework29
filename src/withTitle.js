// file withTitle.js
export const withTitle = (Component) => (props) => {
  let title = "Login";
  if (props.isLoggedIn) {
    title = "Dashboard";
  }
  return <Component title={title} {...props} />;
};
