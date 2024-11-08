// start file App.js
import { withTitle } from "./withTitle";
const App = (props) => {
  return (
    <div className="App">
      <h1>Halaman: {props.title}</h1>
    </div>
  );
};
export default withTitle(App);
// end file App.js
