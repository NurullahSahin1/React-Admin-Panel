import { UploadFile } from "@mui/icons-material";
import "../../components/styles/NewProduct.css";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple 15 Pro" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="98" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select
            type="password"
            placeholder="password"
            className="addProductSelect"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
