import { Link } from "react-router-dom";
import "../../components/styles/Product.css";
import Charts from "../../components/chart/Charts";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://techfuture.pl/wp-content/uploads/2024/11/Samsung-S25-TechFuture_pl.webp"
              alt=""
              className="prodcutInfoImg"
            />
            <span className="productName">Samsung Galaxy S25 Ultra</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">423</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">178</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Samsung Galaxy S25 Ultra" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://techfuture.pl/wp-content/uploads/2024/11/Samsung-S25-TechFuture_pl.webp"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
