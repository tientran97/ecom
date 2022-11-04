import { useEffect, useState } from "react";
import "./ViewProducts.css";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import {
  STORE_PRODUCTS,
  selectProducts,
} from "../../../redux/Slice/productSlice";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import {
  FILTER_BY_SEARCH,
  selectFilterProducts,
} from "../../../redux/Slice/filterSlice";
import Pagination from "../../../components/Pagination/Pagination";

const ViewProduct = () => {
  const { data, isLoading } = useFetchCollection("products");
  const [search, setSearch] = useState("");

  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilterProducts);
  const dispatch = useDispatch();

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(12);
  //get current product
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProduct = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(FILTER_BY_SEARCH({ products, search }));
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, products, search]);

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "DELETE PRODUCT !!",
      "You about to delete this product",
      "delete",
      "cancel",
      function okCb() {
        deleteProduct(id);
      },
      function cancelCb() {
        toast.success("Canceled!");
      },
      {
        width: "320px",
        borderRadius: "12px",
        titleColor: "red",
        okButtonBackground: " red",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      toast.error("Product deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="all-products-table">
        <h1>VIEW ALL PRODUCTS</h1>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search by product's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <p>
          <b>{filteredProducts.length}</b> product(s) found !
        </p>
        {filteredProducts.length === 0 ? (
          <p>NO PRODUCT FOUND</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProduct.map((product, index) => {
                const { id, name, price, main_image_url, category } = product;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={main_image_url}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td className="table-row-name">{name}</td>
                    <td className="table-row-category">{category}</td>
                    <td>{`S$${price}`}</td>
                    <td className="view-product-icon">
                      <Link to={`/admin/add-products/${id}`}>
                        <FaEdit className="view-product-icon-edit" />
                      </Link>
                      <FaTrash
                        className="view-product-icon-delete"
                        onClick={() => confirmDelete(id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </>
  );
};

export default ViewProduct;
