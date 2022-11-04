import React, { useEffect, useState } from "react";
import "./AddProducts.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/Slice/productSlice";

const categories = [
  { id: 1, name: "salmon skin" },
  { id: 2, name: "truffle" },
  { id: 3, name: "fish skin" },
  { id: 4, name: "crunchy roll" },
  { id: 5, name: "potato chips" },
  { id: 6, name: "cassava chips" },
  { id: 7, name: "gyoza skin" },
  { id: 8, name: "bundle" },
  { id: 9, name: "noodle" },
];
const backgroundColors = [
  { id: 1, name: "#ffd419" },
  { id: 2, name: "#feae7e" },
  { id: 3, name: "#966d51" },
  { id: 4, name: "#ffa65c" },
  { id: 5, name: "#ffd3b5" },
  { id: 6, name: "#f9c580" },
  { id: 7, name: "#fff" },
];
const AddProduct = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const productEdit = products.find((item) => item.id === id);

  function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    } else {
      return f2;
    }
  }

  const initialState = {
    name: "",
    price: 0,
    category: "",
    main_image_url: "",
    disc_text: "",
    ingredient_text: "",
    ellergens_text: "",
    product_info: "",
    nutrition: "",
    character_box_1: "",
    character_box_2: "",
    background_color: "",
  };

  const [product, setProduct] = useState(() => {
    const newState = detectForm(id, { ...initialState }, productEdit);
    return newState;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImageChange = (e) => {
    // files.push(e.target.files[0])
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, main_image_url: downloadURL });
        });
      }
    );
  };
  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        background_color: product.background_color,
        main_image_url: product.main_image_url,
        disc_text: product.disc_text,
        ingredient_text: product.ingredient_text,
        ellergens_text: product.ellergens_text,
        product_info: product.product_info,
        nutrition: product.nutrition,
        character_box_1: product.character_box_1,
        character_box_2: product.character_box_2,
        createAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setProduct(initialState);
      setUploadProgress(0);
      toast.success("Product uploaded successfully");
      navigate("/admin/view-product");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  const editProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setDoc(doc(db, "products", id), {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        background_color: product.background_color,
        main_image_url: product.main_image_url,
        disc_text: product.disc_text,
        ingredient_text: product.ingredient_text,
        ellergens_text: product.ellergens_text,
        product_info: product.product_info,
        nutrition: product.nutrition,
        character_box_1: product.character_box_1,
        character_box_2: product.character_box_2,
        createAt: product.createAt,
        editedAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      toast.success("Edit Successfully");
      navigate("/admin/view-product");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="add-product-container">
        <h2>{detectForm(id, "ADD NEW PRODUCT", "EDIT PRODUCT")} </h2>

        <form onSubmit={detectForm(id, addProduct, editProduct)}>
          <label>PRODUCT NAME:</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PRODUCT PRICE:</label>
          <input
            type="number"
            placeholder="Product price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PRODUCT MAIN IMAGE:</label>
          <div className="image-card">
            <input
              multiple
              type="file"
              accept="image/*"
              required
              placeholder="Product main image "
              name="main_image"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="main_image_url"
              readOnly
              value={product.main_image_url}
            />
          </div>

          <label>PRODUCT CATEGORY:</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              --- CHOOSE PRODUCT CATEGORY ---
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
          <label> BACKGROUND COLOR:</label>
          <select
            required
            name="background_color"
            value={product.background_color}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              --- CHOOSE PRODUCT BACKGROUND COLOR ---
            </option>
            {backgroundColors.map((color) => {
              return (
                <option key={color.id} value={color.name}>
                  {color.name}
                </option>
              );
            })}
          </select>

          <label>DISCRIPTION TEXT: </label>
          <textarea
            type="text"
            placeholder="discription text"
            required
            name="disc_text"
            value={product.disc_text}
            onChange={(e) => handleInputChange(e)}
          />
          <label>INGREDIENT TEXT: </label>
          <textarea
            type="text"
            placeholder="ingredient text"
            required
            name="ingredient_text"
            value={product.ingredient_text}
            onChange={(e) => handleInputChange(e)}
          />
          <label>ELLERGENS TEXT: </label>
          <textarea
            type="text"
            placeholder="ellergens text"
            required
            name="ellergens_text"
            value={product.ellergens_text}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PRODUCT INFOMATION: </label>
          <textarea
            type="text"
            placeholder="product infomation"
            required
            name="product_info"
            value={product.product_info}
            onChange={(e) => handleInputChange(e)}
          />
          <label>NUTRITION: </label>
          <textarea
            type="text"
            placeholder="nutrition"
            required
            name="nutrition"
            value={product.nutrition}
            onChange={(e) => handleInputChange(e)}
          />
          <label>CHARACTER BOX 1: </label>
          <textarea
            type="text"
            placeholder="character box 1"
            required
            name="character_box_1"
            value={product.character_box_1}
            onChange={(e) => handleInputChange(e)}
          />
          <label>CHARACTER BOX 2: </label>
          <textarea
            type="text"
            placeholder="character box 2"
            required
            name="character_box_2"
            value={product.character_box_2}
            onChange={(e) => handleInputChange(e)}
          />

          <button type="submit">
            {detectForm(id, "ADD PRODUCT", "EDIT PRODUCT")}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
