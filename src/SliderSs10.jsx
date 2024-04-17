import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSection10_img1 from "../public/images/slider-ss3-1.jpg";
import ImgSection10_img2 from "../public/images/slider-ss3--2.jpg";
import ImgSection10_img3 from "../public/images/slider-ss3-3.jpg";
import ImgSection10_img4 from "../public/images/slider-ss3-4.jpg";
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

export default function Slider_ss10() {
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
        <div className="date-submitted">
          <span>04</span>
          <span>Th3</span>
        </div>
        <a href="#">
          {" "}
          <img src={ImgSection10_img1} alt="" />
        </a>
        <div>
          <a href="#">
            <p>
              <strong>
                Sofa đa chức năng giải pháp mới tối ưu hoàn hảo không gian
              </strong>
            </p>
            <span>
              Ghế sofa đa chức năng đã và đang mang đến rất nhiều tiện lợi cho
            </span>
          </a>
        </div>
      </div>
      <div className="slider-item">
        <div className="date-submitted">
          <span>04</span>
          <span>Th3</span>
        </div>
        <a href="#">
          {" "}
          <img src={ImgSection10_img2} alt="" />
        </a>
        <div>
          <a href="#">
            <p>
              <strong>
                Sofa đa chức năng giải pháp mới tối ưu hoàn hảo không gian
              </strong>
            </p>
            <span>
              Ghế sofa đa chức năng đã và đang mang đến rất nhiều tiện lợi cho
            </span>
          </a>
        </div>
      </div>
      <div className="slider-item">
        <div className="date-submitted">
          <span>04</span>
          <span>Th3</span>
        </div>
        <a href="#">
          {" "}
          <img src={ImgSection10_img3} alt="" />
        </a>
        <div>
          <a href="#">
            <p>
              <strong>
                Sofa đa chức năng giải pháp mới tối ưu hoàn hảo không gian
              </strong>
            </p>
            <span>
              Ghế sofa đa chức năng đã và đang mang đến rất nhiều tiện lợi cho
            </span>
          </a>
        </div>
      </div>
      <div className="slider-item">
        <div className="date-submitted">
          <span>04</span>
          <span>Th3</span>
        </div>
        <a href="#">
          {" "}
          <img src={ImgSection10_img4} alt="" />
        </a>
        <div>
          <a href="#">
            <p>
              <strong>
                Sofa đa chức năng giải pháp mới tối ưu hoàn hảo không gian
              </strong>
            </p>
            <span>
              Ghế sofa đa chức năng đã và đang mang đến rất nhiều tiện lợi cho
            </span>
          </a>
        </div>
      </div>
      <div className="slider-item">
        <div className="date-submitted">
          <span>04</span>
          <span>Th3</span>
        </div>
        <a href="#">
          {" "}
          <img src={ImgSection10_img1} alt="" />
        </a>
        <div>
          <a href="#">
            <p>
              <strong>
                Sofa đa chức năng giải pháp mới tối ưu hoàn hảo không gian
              </strong>
            </p>
            <span>
              Ghế sofa đa chức năng đã và đang mang đến rất nhiều tiện lợi cho
            </span>
          </a>
        </div>
      </div>
    </Slider>
  );
}
