import React, { Component } from "react";
import { formatPrice } from "commons/helper";
import Panel from "components/Panel";
import EditInventory from "../components/EditInventory";

class Product extends Component {
  toEdit = () => {
    // 使用Panel的方法
    Panel.open({
      component: EditInventory,
      props: {
        product: this.props.product,
      },
      callback: (data) => {
        if (data) {
          this.props.update(data);
        }
      },
    });
  };

  render() {
    const { name, image, tags, price, status } = this.props.product;
    const _pClass = {
      available: "product",
      unavailable: "product out-stock",
    };
    return (
      <>
        <div className={_pClass[status]}>
          <div className="p-content">
            <div className="p-head has-text-right" onClick={this.toEdit}>
              <div className="icon edit-btn">
                <i className="fas fa-sliders-h"></i>
              </div>
            </div>
            <div className="img-wrapper">
              <div className="out-stock-text">Out of Stock</div>
              {/* scss ：out-stock-text 判斷顯示 */}
              <figure className="image is-4by3">
                <img src={image} alt={name} />
              </figure>
            </div>
            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
          <div className="p-footer">
            <p className="price">{formatPrice(price)}</p>
            <button className="add-cart" disabled={status === "unavailable"}>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-exclamation"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
