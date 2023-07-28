import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
                <h1>ASSIGN TASK</h1>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">TASK</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">DATE</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.author}</td>
                        <td>{p.genre}</td>
                        <td>{p.chapters}</td>
                        <td>
                          <Link to={'/editProduct/'+p.id} className="btn btn-dark">
                            Update
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-dark">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;