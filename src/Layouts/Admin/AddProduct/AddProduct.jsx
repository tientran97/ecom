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
import { selectProducts } from "../../../redux/Slice/productsSlice";

const categories = [
  { id: 1, name: "salmon skin" },
  { id: 2, name: "truffle" },
  { id: 3, name: "fish skin" },
  { id: 4, name: "crunchy roll" },
  { id: 5, name: "potato chips" },
  { id: 6, name: "cassava chips" },
  { id: 7, name: "gyoza skin" },
];
const backgroundColors = [
  { id: 1, name: "#ffd419" },
  { id: 2, name: "#feae7e" },
  { id: 3, name: "#966d51" },
  { id: 4, name: "#ffa65c" },
  { id: 5, name: "#ffd3b5" },
  { id: 6, name: "#f9c580" },
];
const AddProduct = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  // console.log('urls',urls)
  // console.log('url-0', urls[0])
  // console.log("url-1", urls[1]);
  // console.log("url-2", urls[2]);
  // console.log("url-3", urls[3]);
  // console.log("url-4", urls[4]);
  // console.log("url-5", urls[5]);
  // console.log("url-6", urls[6]);
  // console.log("url-7", urls[7]);
  

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
    main_image_url: urls[0],
    sub_image_url: urls[1],
    ingredient_image_url_1: urls[2],
    ingredient_image_url_2: urls[3],
    ingredient_image_url_3: urls[4],
    ingredient_image_url_4: urls[5],
    side_image_left: urls[6],
    side_image_right: urls[7],
    disc_text: "",
    ingredient_text: "",
    ellergens_text: "",
    product_info: "",
    nutrition: "",
    character_box_1: "",
    character_box_2: "",
    accordion_title_1: "",
    accordion_title_2: "",
    small_title_1: "",
    small_title_2: "",
    small_title_3: "",
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
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
      images.map((image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            toast.error(error.message);
            console.log(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // setProduct({ ...product, main_image_url: downloadURL });
              setUrls((prevState) => [...prevState, downloadURL]);
              console.log("🚀 ~ file: AddProduct.jsx ~ line 132 ~ getDownloadURL ~ downloadURL", downloadURL)
              // urls.push(downloadURL);
            });
          }
        );
      });
    }
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
        sub_image_url: product.sub_image_url,
        ingredient_image_url_1: product.ingredient_image_url_1,
        ingredient_image_url_2: product.ingredient_image_url_2,
        ingredient_image_url_3: product.ingredient_image_url_3,
        ingredient_image_url_4: product.ingredient_image_url_4,
        side_image_left: product.side_image_left,
        side_image_right: product.side_image_right,

        disc_text: product.disc_text,
        ingredient_text: product.ingredient_text,
        ellergens_text: product.ellergens_text,
        product_info: product.product_info,
        nutrition: product.nutrition,
        character_box_1: product.character_box_1,
        character_box_2: product.character_box_2,

        accordion_title_1: product.accordion_title_1,
        accordion_title_2: product.accordion_title_2,

        small_title_1: product.small_title_1,
        small_title_2: product.small_title_2,
        small_title_3: product.small_title_3,

        createAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setProduct(initialState);
      setUrls([]);
      setUploadProgress(0);
      toast.success("Product uploaded successfully");
      navigate("/admin/view-product");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error.message)
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
        sub_image_url: product.sub_image_url,
        ingredient_image_url_1: product.ingredient_image_url_1,
        ingredient_image_url_2: product.ingredient_image_url_2,
        ingredient_image_url_3: product.ingredient_image_url_3,
        ingredient_image_url_4: product.ingredient_image_url_4,
        side_image_left: product.side_image_left,
        side_image_right: product.side_image_right,

        disc_text: product.disc_text,
        ingredient_text: product.ingredient_text,
        ellergens_text: product.ellergens_text,
        product_info: product.product_info,
        nutrition: product.nutrition,
        character_box_1: product.character_box_1,
        character_box_2: product.character_box_2,

        accordion_title_1: product.accordion_title_1,
        accordion_title_2: product.accordion_title_2,

        small_title_1: product.small_title_1,
        small_title_2: product.small_title_2,
        small_title_3: product.small_title_3,

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
          <label>PRODUCT SUB IMAGE:</label>
          <div className="image-card">
            <input
              required
              type="file"
              accept="image/*"
              placeholder="Product sub image "
              name="sub_image_url"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="sub_image_url"
              readOnly
              value={product.sub_image_url}
            />
          </div>
          <label>PRODUCT INGREGREDIENT IMAGE 1:</label>
          <div className="image-card">
            <input
              type="file"
              required
              accept="image/*"
              placeholder="Product ingredient image 1"
              name="ingredient_image_url_1"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="sub_image_url"
              readOnly
              value={product.ingredient_image_url_1}
            />
          </div>
          <label>PRODUCT INGREGREDIENT IMAGE 2:</label>
          <div className="image-card">
            <input
              type="file"
              required
              accept="image/*"
              placeholder="Product ingredient image 2"
              name="ingredient_image_url_2"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="sub_image_url"
              readOnly
              value={product.ingredient_image_url_2}
            />
          </div>
          <label>PRODUCT INGREGREDIENT IMAGE 3:</label>
          <div className="image-card">
            <input
              type="file"
              required
              accept="image/*"
              placeholder="Product ingredient image 3"
              name="ingredient_image_url_3"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="sub_image_url"
              readOnly
              value={product.ingredient_image_url_3}
            />
          </div>
          <label>PRODUCT INGREGREDIENT IMAGE 4:</label>
          <div className="image-card">
            <input
              type="file"
              required
              accept="image/*"
              placeholder="Product ingredient image 4"
              name="ingredient_image_url_4"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="sub_image_url"
              readOnly
              value={product.ingredient_image_url_4}
            />
          </div>
          <label>PRODUCT SIDE IMAGE LEFT:</label>
          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              required
              placeholder="Product side image left"
              name="ingredient_image_url_4"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="side_image_left"
              readOnly
              value={product.side_image_left}
            />
          </div>
          <label>PRODUCT SIDE IMAGE RIGHT:</label>
          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              required
              placeholder="Product side image right"
              name="ingredient_image_url_4"
              onChange={(e) => handleImageChange(e)}
            />
            <span>Up load file progress: {uploadProgress} %</span>
            <input
              placeholder="MAIN IMAGE URL"
              type="text"
              required
              name="side_image_right"
              readOnly
              value={product.side_image_right}
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
          <label>SMALL TITLE 1: </label>
          <input
            type="text"
            required
            placeholder="INGREDIENTS"
            name="small_title_1"
            value={product.small_title_1}
            onChange={(e) => handleInputChange(e)}
          />
          <label>SMALL TITLE 2: </label>
          <input
            type="text"
            required
            placeholder="ALLERGENS"
            name="small_title_2"
            value={product.small_title_2}
            onChange={(e) => handleInputChange(e)}
          />
          <label>SMALL TITLE 3: </label>
          <input
            type="text"
            required
            placeholder="NUTRITION"
            name="small_title_3"
            value={product.small_title_3}
            onChange={(e) => handleInputChange(e)}
          />
          <label>ACCORDATION TITLE 1: </label>
          <input
            type="text"
            required
            placeholder="INGREDIENTS"
            name="accordion_title_1"
            value={product.accordion_title_1}
            onChange={(e) => handleInputChange(e)}
          />
          <label>ACCORDATION 2: </label>
          <input
            type="text"
            required
            placeholder="PRODUCT INFO"
            name="accordion_title_2"
            value={product.accordion_title_2}
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
