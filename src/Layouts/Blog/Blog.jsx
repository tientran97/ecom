import React, { useState, useEffect } from "react";
import "./Blog.css";
import FlavorMain from "../Mains/MainHome/FlavorMain/Flavor/FlavorMain";
import { useNavigate, useParams } from "react-router-dom";
import dataBlog from "../../data/data.blog";
const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState({
    id: "",
    title: "",
    banner: "",
    date: "",
    text_1: "",
    text_2: "",
    text_3: "",
    text_4: "",
    text_5: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: "",
  });

  const params = useParams();
  const currentId = params.id;
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const blogId = currentId;
    const selectedBlog = dataBlog.find((item) => item.id === blogId);
    setSelectedBlog(selectedBlog);
  }, [currentId, dataBlog]);

  const navigate = useNavigate();
  return (
    <div className="blog-container">
      <div className="blog-banner">
        <img src={selectedBlog.banner} alt="banner" />
      </div>
      <div className="blog-content">
        <p className="irvfiles">THE IRV FILES</p>
        <p className="blog-title">{selectedBlog.title}</p>
        <p className="blog-time">{selectedBlog.date}</p>
        <p className="text">{selectedBlog.text_1}</p>
        <img src={selectedBlog.image_1} alt="image1" />
        <p className="text">{selectedBlog.text_2}</p>
        <img src={selectedBlog.image_2} alt="image2" />
        <p className="text">{selectedBlog.text_3}</p>
        <img src={selectedBlog.image_3} alt="image3" />
        <p className="text">{selectedBlog.text_4}</p>
        <img src={selectedBlog.image_4} alt="image3" />
        <p className="text">{selectedBlog.text_5}</p>
        <button className="button" onClick={() => navigate("/the-irv-files")}>
          <span className="button-text">BACK TO BLOGS</span>
        </button>
      </div>
      <FlavorMain />
    </div>
  );
};

export default Blog;
