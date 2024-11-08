import React from "react";
import ReactDOM from "react-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productItem: "Beras" };
  }
  changeProduct = () => {
    // isi disini
    this.setState({ productItem: "Minyak" });
  };
  render() {
    return (
      <div>
        <h1>
          Produk Pilihan:
          {this.state.productItem}
        </h1>
        <button type="button" onClick={this.changeProduct}>
          Ubah Produk
        </button>
      </div>
    );
  }
}
export default Product;

//ReactDOM.render(<Product />, document.getElementById("root"));
