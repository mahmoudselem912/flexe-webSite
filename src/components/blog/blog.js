import React from "react";
import "./blog.css";
import blog from "../../assets/blog.mp4";
import EInvoice from '../../assets/EInvoice.jpg'
import EReceipt from '../../assets/EReceipt.jpg'
import blog1 from "../../assets/blackMan.jpg";
import ERPPOS from '../../assets/ERP&POS.png'

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-section__header">الـــمدونــــة</h2>
      <div className="blog-section__content">
        <div className="blog-section__blogVideo">
          <video loop muted autoPlay className="blog-section__video">
            <source src={blog} type="video/webm"></source>
          </video>
        </div>

        <div className="blog-section__cards-container">
          <div className="blog-section__card">
            <img src={EInvoice} alt="FFF" className="blog-section__card__img" />
            <div className="blog-section__card__text">
              كل ما تود معرفته عن الفاتورة الالكترونية
            </div>
          </div>
          <div className="blog-section__card">
            <img src={EReceipt} alt="FFF" className="blog-section__card__img" />
            <div className="blog-section__card__text">
              ما تود معرفته عن الايصال الالكترونى
            </div>
          </div>
          <div className="blog-section__card">
            <img src={ERPPOS} alt="FFF" className="blog-section__card__img" />
            <div className="blog-section__card__text" dir="rtl">
              ما الفرق بين نظامى ال ERP و POS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
