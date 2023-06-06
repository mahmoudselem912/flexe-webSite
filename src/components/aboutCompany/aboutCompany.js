import React from "react";
import "./aboutCompany.css";
import aboutCompany from "../../assets/aboutCompany.png";


const AboutCompany = () => {
  return (
    <div className="about-company">
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
              شركة Flexe Soft  ! احدى الشركات الرائدة فى السوق المصرى
              والعربى فى مجال تكنولوجيا المعلومات، - انشئت فى مطلع عام 2020 م
              على يد نخبة من المتخصصين لتبدء نشاطها وتنافس فى الريادة على مستوى
              القطر المصرى و العربى، - حققت العديد من الإنجازات فى تلك الفترة
              القصيرة واستحوذت على ثقة العملاء وأصبح لدينا عملاء نعتز بهم من
              مختلف الدول العربية - قمنا بإنتاج العديد من الحلول البرمجية
              المناسبة لجميع الأعمال والتى راعينا في تطويرها عدد من المعايير
              التى تضمن تحقيق أقصى إنجاز وأستفادة وحماية لأعمال عملائنا بشكل
              إحترافى -الوصول الى صدارة الشركات العربية فى تقديم حلول البرمجيات
              والمنافسة عالميا - تقديم مجموعة من الحلول البرمجية والخدمات
              للمؤسسات والأفراد مبنية على أسس الإبتكار والإبداع لننافس بها
              العلامات التجارية الأخرى. - هدفنا تمكين ودعم قطاعات الأعمال
              والتعليم والصحة فى الشرق الأوسط بحلول برمجية لادارة الموارد
              المتكاملة
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
