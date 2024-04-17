import "../public/css/Navbar.css";
import logoHeader from "../public/images/Logo_Funika_sofa-NEW.png";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <ul className="header-top-left">
                <li>
                  {" "}
                  <a href="#">
                    <EmailIcon sx={{ fontSize: 15 }} />
                    Funikavietnam@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PhoneIcon sx={{ fontSize: 15 }} />
                    0913.845.189
                  </a>
                </li>
                <li>
                  <HomeIcon sx={{ fontSize: 15 }} />
                  Sofa phòng khách Funika Việt Nam
                </li>
              </ul>
              <ul className="header-top-right">
                <li>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon sx={{ fontSize: 15 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <YouTubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="openmenu-mobile">
                <DehazeIcon />
              </div>
              <div className="logo">
                <img src={logoHeader} />
              </div>

              <ul className="nav-main">
                <li className="nav-item pointer find">
                  <SearchIcon />
                  <ul className="list-lv2">
                    <li className="list-lv2-item need-find">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Bạn cần tìm gì ?"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <SearchIcon />
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#">
                    {" "}
                    <HomeIcon sx={{ fontSize: 15 }} />
                    TRANG CHỦ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    GHẾ SOFA <ExpandMoreIcon />
                  </a>
                  <ul className="list-lv2">
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#">
                    NỘI THẤT <ExpandMoreIcon />
                  </a>
                  <ul className="list-lv2">
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#">BÀN TRÀ</a>
                </li>
                <li className="nav-item">
                  <a href="#">KỆ TIVI</a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    ĐỒ TRANG TRÍ <ExpandMoreIcon />
                  </a>
                  <ul className="list-lv2">
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                    <li className="list-lv2-item">
                      <a href="#">Sofa góc nhập khẩu</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#">KHUYẾN MẠI</a>
                </li>
                <li className="nav-item login">
                  <a href="#">ĐĂNG NHẬP</a>
                </li>
              </ul>
              <ul className="nav-cart">
                <li className="pointer nav-item">
                  <span>GIỎ HÀNG / 0đ</span>
                  <span className="cart-icon image-icon">
                    <strong>0</strong>
                  </span>
                </li>
                <li className="phone-number pointer">
                  <a href="#">TEL: 0913.845.189</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
