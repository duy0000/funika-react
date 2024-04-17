import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSection3_img1 from "../public/images/slider-ss3-1.jpg";
import ImgSection3_img2 from "../public/images/slider-ss3--2.jpg";
import ImgSection3_img3 from "../public/images/slider-ss3-3.jpg";
import ImgSection3_img4 from "../public/images/slider-ss3-4.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronRightIcon
      className={"icon-control"}
      style={{
        ...style,
        display: "block",
        color: "#000",
        background: "rgba(255, 255, 255, 0.5)",

        height: "99%",
        top: "50%",
        right: "0",
        fontSize: "35",
        position: "absolute",
        transform: "translateY(-51%)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={"icon-control"}
      style={{
        ...style,
        display: "block",
        color: "#000",
        background: "rgba(255, 255, 255, 0.5)",

        left: "30",
        zIndex: "9",
        fontSize: "35",
        height: "99%",
        top: "50%",
        position: "absolute",
        transform: "translateY(-51%)",
      }}
      onClick={onClick}
    />
  );
}

export default function Slider_ss3() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider-item">
        <div className="persent-sale">-40%</div>
        <a href="#">
          <img src={ImgSection3_img1} alt="" />
        </a>
        <h5>
          <a href="#">
            <p>
              Bàn thông minh FC002 làm bàn trà bàn làm việc và bàn ăn xếp gọn
            </p>
          </a>
        </h5>
        <div className="price">
          <span className="cost">11.500.000đ</span>
          <span className="sale">8.500.000đ</span>
        </div>
      </div>
      <div className="slider-item">
        <div className="persent-sale">-40%</div>
        <a href="#">
          <img src={ImgSection3_img2} alt="" />
        </a>
        <h5>
          <a href="#">
            <p>
              Bàn thông minh FC002 làm bàn trà bàn làm việc và bàn ăn xếp gọn
            </p>
          </a>
        </h5>
        <div className="price">
          <span className="cost">11.500.000đ</span>
          <span className="sale">8.500.000đ</span>
        </div>
      </div>
      <div className="slider-item">
        <div className="persent-sale">-40%</div>
        <a href="#">
          <img src={ImgSection3_img3} alt="" />
        </a>
        <h5>
          <a href="#">
            <p>
              Bàn thông minh FC002 làm bàn trà bàn làm việc và bàn ăn xếp gọn
            </p>
          </a>
        </h5>
        <div className="price">
          <span className="cost">11.500.000đ</span>
          <span className="sale">8.500.000đ</span>
        </div>
      </div>
      <div className="slider-item">
        <a href="#">
          <img src={ImgSection3_img4} alt="" />
        </a>
        <h5>
          <a href="#">
            <p>
              Bàn thông minh FC002 làm bàn trà bàn làm việc và bàn ăn xếp gọn
            </p>
          </a>
        </h5>
        <div className="price">
          <span className="cost">11.500.000đ</span>
          <span className="sale">8.500.000đ</span>
        </div>
      </div>
      <div className="slider-item">
        <a href="#">
          <img src={ImgSection3_img3} alt="" />
        </a>
        <h5>
          <a href="#">
            <p>
              Bàn thông minh FC002 làm bàn trà bàn làm việc và bàn ăn xếp gọn
            </p>
          </a>
        </h5>
        <div className="price">
          <span className="cost">11.500.000đ</span>
          <span className="sale">8.500.000đ</span>
        </div>
      </div>
    </Slider>
  );
}
