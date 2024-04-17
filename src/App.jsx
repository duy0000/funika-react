import "../public/css/App.css";
import ImgSection1 from "../public/images/sofa-giuong-2023-1920-×-745-px-1536x596.png";
import ImgSection2Bg from "../public/images/bg-content1-300x13.png";
import ImgSection2_img1 from "../public/images/icon4.png";
import ImgSection2_img2 from "../public/images/giao-hang.png";
import ImgSection2_img3 from "../public/images/icon3.png";
import ImgSection2_img4 from "../public/images/icon2.png";
import ImgSection4_img1 from "../public/images/ss4-1.jpg";
import ImgSection9_img1 from "../public/images/tham-long-ngan-I0029-1-300x170 (1).jpg";
import ImgSection9_img2 from "../public/images/tham-long-xu-E0011-1-300x170.jpg";
import ImgSection9_img3 from "../public/images/tham-long-ngan-I0029-1-300x170 (1).jpg";
import ImgSection9_img4 from "../public/images/tham-trai-san-i0012-6-300x170.jpg";
import Slider_ss3 from "./Slider.jsx";
import Slider_ss10 from "./SliderSs10.jsx";
import Slider_ss12 from "./Sliderss12.jsx";

function App() {
  return (
    <>
      <main>
        <section className="ss1-section">
          <div>
            <img src={ImgSection1} alt="" />
          </div>
        </section>
        <section className="ss2-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>FUNIKA – THƯƠNG HIỆU SỐ 1 SOFA THÔNG MINH</h2>
                <div className="col-6">
                  <img className="bg-content" src={ImgSection2Bg} alt="" />
                </div>
              </div>
            </div>
            <div className="row list-item">
              <div
                className="col-sm-6 col-lg-3 col-12 list-item-ss2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={ImgSection2_img1} alt="" />
                <h5>500 M2 TRƯNG BÀY</h5>
                <p>
                  Hỗ trợ khách hàng thăm quan trải nghiệm thực tế sản phẩm tốt
                  nhất với hàng trăm mẫu sẵn mà không nơi nào có.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 col-12 list-item-ss2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={ImgSection2_img2} alt="" />
                <h5>500 M2 TRƯNG BÀY</h5>
                <p>
                  Hỗ trợ khách hàng thăm quan trải nghiệm thực tế sản phẩm tốt
                  nhất với hàng trăm mẫu sẵn mà không nơi nào có.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 col-12 list-item-ss2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={ImgSection2_img3} alt="" />
                <h5>500 M2 TRƯNG BÀY</h5>
                <p>
                  Hỗ trợ khách hàng thăm quan trải nghiệm thực tế sản phẩm tốt
                  nhất với hàng trăm mẫu sẵn mà không nơi nào có.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 col-12 list-item-ss2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={ImgSection2_img4} alt="" />
                <h5>500 M2 TRƯNG BÀY</h5>
                <p>
                  Hỗ trợ khách hàng thăm quan trải nghiệm thực tế sản phẩm tốt
                  nhất với hàng trăm mẫu sẵn mà không nơi nào có.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-6"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img src="./img/L06-1-sofa-bed555-×-375-px.png" alt="" />
              </div>
              <div
                className="col-sm-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img src="./img/81-mau-ban-tra-banner-C2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="ss3-section"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>sản phẩm mới nhất</h2>
              </div>
              <div className="slider-ss3">
                {" "}
                <Slider_ss3 />
              </div>

              <div className="seemore col-12">
                <a href="#">xem thêm sản phẩm mới nhất</a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ss4-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>108 + MẪU SOFA GIƯỜNG ĐA NĂNG</h2>
              </div>
            </div>
            <div className="ss4-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect">Liên hệ</span>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect">Liên hệ</span>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect">Liên hệ</span>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect col-12">Liên hệ</span>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM 108 MẪU SOFA GIƯỜNG</a>
            </div>
          </div>
        </section>
        <section
          className="ss5-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>COMBO NỘI THẤT</h2>
              </div>
            </div>
            <div className="ss5-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect">Liên hệ</span>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect col-12">Liên hệ</span>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM COMBO NỘI THẤT</a>
            </div>
          </div>
        </section>
        <section
          className="ss6-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>BỘ SOFA PHÒNG KHÁCH 2022</h2>
              </div>
            </div>
            <div className="ss5-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect">Liên hệ</span>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <span className="connect col-12">Liên hệ</span>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM BỘ SOFA PHÒNG KHÁCH KHÁC</a>
            </div>
          </div>
        </section>
        <section
          className="ss7-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>BÀN ĂN MẶT ĐÁ</h2>
              </div>
            </div>
            <div className="ss5-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM BÀN ĂN MẶT ĐÁ</a>
            </div>
          </div>
        </section>
        <section
          className="ss8-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>BÀN TRÀ HIỆN ĐẠI</h2>
              </div>
            </div>
            <div className="ss5-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection4_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM BÀN trà</a>
            </div>
          </div>
        </section>
        <section
          className="ss9-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>THẢM TRẢI SÀN THỔ NHĨ KỲ</h2>
              </div>
            </div>
            <div className="ss5-list row">
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection9_img1} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="evaluate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <a href="#">
                  <img src={ImgSection9_img2} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="evaluate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection9_img3} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="evaluate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12 item-list">
                <div className="persent-sale">-40%</div>
                <a href="#">
                  <img src={ImgSection9_img4} alt="" />
                </a>
                <h5>
                  <a href="#">Combo nội thất 1392</a>
                </h5>
                <div className="evaluate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <span className="cost">11.500.000đ</span>
                  <span className="sale">8.500.000đ</span>
                </div>
              </div>
            </div>
            <div className="seemore col-12">
              <a href="#">XEM THÊM THẢM TRẢI SÀN</a>
            </div>
          </div>
        </section>
        <section className="ss10-section">
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>HƯỚNG DẪN SỬ DỤNG SOFA GIƯỜNG</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <iframe
                  width="100%
                "
                  height="360"
                  src="https://www.youtube.com/embed/9rEVu8qBunM"
                  title="✅Đánh giá nhanh ghế sofa giường cao cấp VS3065 của Funika."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <iframe
                  width="100%"
                  height="364"
                  src="https://www.youtube.com/embed/rOv0kNAcCsU"
                  title="[Tổng Hợp] Các Mẫu Ghế Sofa Kết Hợp Giường Ngủ Được Ưa Chuộng Nhất."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ss11-section"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>TƯ VẤN NỘI THẤT- PHONG THỦY</h2>
              </div>
              <div className="slider-ss3">
                <Slider_ss10 />
              </div>
            </div>
          </div>
        </section>
        <section className="ss12-section">
          <div className="container">
            <div className="row">
              <div className="content col-12">
                <b></b>
                <h2>BÁO CHÍ & ĐỐI TÁC KHÁCH HÀNG</h2>
              </div>
            </div>
            <div className="slider-ss12">
              <Slider_ss12 />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
