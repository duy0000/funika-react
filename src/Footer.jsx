import "../public/css/App.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RoomIcon from "@mui/icons-material/Room";
import logoFooter from "../public/images/Logo_Funika_sofa-thong-minh.png";
import Iframe from "react-iframe";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-sm-6">
                <h5>GIỚI THIỆU</h5>
                <ul>
                  <li>
                    <a href="#" className="active">
                      <ChevronRightIcon /> Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      <ChevronRightIcon /> Khách hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      <ChevronRightIcon /> Tuyển dụng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      <ChevronRightIcon /> Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Đối tác
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Luxfuni.com
                    </a>
                  </li>
                  <li className="logo">
                    <img src={logoFooter} alt="" />
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-sm-6">
                <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                <ul>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Quy định đổi trả
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Bảo mật thông tin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Chính sách bán hàng
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Hướng dẫn thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ChevronRightIcon /> Quy định Bảo hành
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-md-6">
                <h5>THEO DÕI FUNIKA TRÊN FANPAGE</h5>

                <Iframe
                  className="map"
                  style="border: none; overflow: hidden"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnoithatfunika%20&amp;tabs=timeline&amp;width=&amp;height=250px&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                  width="100%"
                  height="100%"
                  frameBorder="1"
                  scrolling="no"
                ></Iframe>
              </div>
              <div className="col-xl-3 col-md-6">
                <h5>CHỈ ĐƯỜNG NHANH NHẤT</h5>

                <Iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2898079993365!2d105.78669357343212!3d20.98101698942017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acce612c766f%3A0xf1fff967689168e!2zxJDhuqFpIEjhu41jIEtp4bq_biBUcsO6YyAtIFRy4bqnbiBQaMO6IChIw6AgxJDDtG5nKQ!5e0!3m2!1svi!2s!4v1713030218321!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></Iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 col-12">
                <h5>
                  <RoomIcon />
                  <p>FUNIKA HÀ NỘI</p>
                </h5>
                <div className="address">
                  <p>
                    Địa chỉ: 56 Vương Thừa Vũ,P.Khương Trung Q.Thanh Xuân, Hà
                    Nội
                  </p>
                  <p>Phone: 024.6292.1890 - 0913.845.189</p>
                  <p>Email:Funikavietnam@gmail.com</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12">
                <h5>
                  <RoomIcon />
                  <p>FUNIKA HỒ CHÍ MINH</p>
                </h5>
                <div className="address">
                  <p>Địa chỉ: Đang chuyển địa điểm sang quận 10</p>
                  <p>Phone: 0913 845 189</p>
                  <p>Email:Funikavietnam@gmail.com</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12">
                <h5>
                  <RoomIcon />
                  <p>FUNIKA CĂN HỘ MẪU VINHOMES SMART CITY</p>
                </h5>
                <div className="address">
                  <p>
                    Địa chỉ: Căn 3211 Tòa S101, Vinhomes smartcity, Tây Mỗ, Nam
                    Từ Liêm Hà Nội.
                  </p>
                  <p>Phone: 0913 845 189</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-12">
                <h5>
                  <RoomIcon />
                  <p>FUNIKA PHÚ THỌ</p>
                </h5>
                <div className="address">
                  <p>
                    Địa chỉ: Số 177 Đường Âu Cơ, Phường Tiên Cát, Thành Phố Việt
                    Trì, Phú Thọ
                  </p>
                  <p>Phone: 0913 845 189. Mr Vân</p>
                  <p>Email:Funikavietnam@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#">
        <p className="copyright">
          Coppyright © 2020 - 2023 Sofa phòng khách Funika. All rights reserved.
          Design by Duy
        </p>
      </a>
    </>
  );
}

export default Footer;
