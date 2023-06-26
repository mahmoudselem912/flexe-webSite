import React from "react";
import "./services.css";
import servicesImg from "../../assets/ourServices.png";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

const Services = () => {
  return (
    <div className="services-page">
      <NavBar />
      <div className="services-page__top_content">
        <div className="services_logo_container">
          <img src={servicesImg} alt="FFF" className="services__logo" />
        </div>
        <div className="top_content">
          <div className="header">خدماتــنا</div>
          <div className="sub-content">
            فلكسي سوفت هي واحدة من الشركات الرائدة في مجال التسويق الالكتروني
            وتصميم وبرمجة المواقع وتطبيقات الهاتف، بالإضافة إلى إدارة وتأمين
            السيرفرات. نحن نسعى جاهدين لتوفير خدمات متميزة على جميع المنصات على
            الإنترنت، للمساهمة في تحسين وتطوير أداء الشركات وتنمية أعمالها. نحن
            نقدم لكم خدمات برمجية وتسويقية احترافية تلبي احتياجات المؤسسات
            والشركات ورواد الأعمال، وذلك بفضل خبرتنا الواسعة في هذا المجال على
            مدار سنوات عديدة. نحن ندرك أهمية تواجدك على الإنترنت وتفوقك في سوق
            المنافسة الشديدة، وبالتالي نحرص على تقديم خدمات مصممة خصيصًا لتحقيق
            أهدافك وتحقيق نتائج ملموسة
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  تصميم تطبيقات سطح المكتب
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>برامج المحاسبات</li>
                  <li>برامج الفواتير الالكترونية</li>
                  <li>برامج الايصالات الالكترونية</li>
                  <li>برامج خاصة لاى شركة</li>
                  {/* <li>  </li> */}
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only"></p>
                  {/* <p className="card__price-value">$297</p> */}
                </div>
                <a href="#footer" className="btn btn--white">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  تصميم تطبيقات الموبايل
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>تصميم تطبيقات الاندرويد</li>
                  <li>تصميم تطبيقات الايفون</li>
                  {/* <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li> */}
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">
                    تصميم تطبيق الجوال يتمتع بالعديد من المزايا، وتشمل من بينها
                    الانتشار الأفضل لعلامتك التجارية، حيث يمكنك كصاحب مشروع
                    استغلال هذه الفرصة من خلال إضافة إعلانات أو توفير بعض
                    المميزات داخل التطبيق بمقابل مادي.{" "}
                  </p>
                  {/* <p className="card__price-value">$497</p> */}
                </div>
                <a href="#footer" className="btn btn--white">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  خدمة تصميم المواقع
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>مواقع ثابتة وديناميكية</li>
                  <li>استضافة المواقع وحجز الدومينات</li>
                  <li>تصميم المتاجر الالكترونية</li>
                  <li>عمل صفحات تقديمية للشركات</li>
                  {/* <li></li> */}
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">
                    بفضل خبرتنا في تصميم المواقع الإلكترونية، نضمن موقعًا
                    إلكترونيًا مثاليًا يتناسب مع نوع الشركة والخدمات أو المنتجات
                    التي توفرها. سنساعدك في عرض الوظائف الفنية المميزة لتصميم
                    موقع إلكتروني للشركات والمؤسسات
                  </p>
                  <p className="card__price-value"></p>
                </div>
                <a href="#footer" className="btn btn--white">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
