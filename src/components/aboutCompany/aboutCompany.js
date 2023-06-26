import React from "react";
import "./aboutCompany.css";
import aboutCompany from "../../assets/aboutCompany.gif";

const AboutCompany = () => {
  return (
    <div className="about-company" id="aboutCompany">
      <div className="about-company__content">
        <div className="about-company__logo-container">
          <img src={aboutCompany} className="about-company__logo" alt="FFF" />
        </div>
        <div className="about-company__info-container">
          <div className="about-company__info-container__text">
            <div className="about-company__info-container__text__text">
              أحدى أفضل شركات البرمجيات لخدماتك
            </div>
            <div className="horizontal-line"></div>
          </div>

          <h2 className="company_name">شركة فليكســــي للحلول البرمجية</h2>
          <div className="company_information">
            تعد شركة FLexe Soft من الشركات الرائدة في السوق المصري والعربي في
            مجال تكنولوجيا المعلومات. تأسست الشركة في مطلع عام 2020 م على يد
            نخبة من المتخصصين، وبدأت نشاطها بعد ذلك في التنافس على ريادة المجال
            في القطر المصري والوطن العربي. حققت الشركة العديد من الإنجازات في
            فترة قصيرة جداً، مما أدى إلى اكتساب ثقة العملاء، والتي بدورها أدت
            إلى اتساع دائرة العملاء في مختلف دول العالم العربي. من خلال إنتاج
            العديد من الحلول البرمجية المتعلقة بأنشطة الشركات، تأكدت شركة FLexe
            Soft من الرعاية المستمرة لتطوير نمطها البرمجي بأنتاج ذات سلامة
            التسليم والجودة العالية. وهو ما يضمن جودة الخدمات التي يتم تقديمها
            للعملاء في كافة القطاعات البرمجية والتجارية والصناعية والتعليمية
            والصحية في الشرق الأوسط. فعلى أساس هذا، ترتكز منهجية عملنا على تصميم
            حلول البرمجيات الرقمية المتكاملة التي تمكّن جميع الأعمال من التطور
            والنجاح في سوق تكنولوجي المعلومات، حيث نتطلع نحو الوصول إلى صدارة
            الشركات العربية في تقديم حلول البرمجيات والمنافسة عالميا.
          </div>
          <a href="#" className="about-company__button">
            تعرف على المزيد
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
