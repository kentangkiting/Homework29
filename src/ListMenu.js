import React from "react";
import ReactDOM from "react-dom";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productItem: "Beras" };
  }

  changeProduct = () => {
    // isi disini
    this.setState({ productItem: "Minyak" });
  };
  render() {
    const listMenu = [
      { code: "home", name: "Home" },
      { code: "about", name: "About" },
      { code: "contact", name: "Contact" },
    ];

    return (
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        {listMenu.map((list) => (
          <span key={list.code}>{list.name}</span>
        ))}
      </div>
    );
  }
}
export default ListMenu;

//ReactDOM.render(<Product />, document.getElementById("root"));
