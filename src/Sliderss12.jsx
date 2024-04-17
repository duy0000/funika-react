import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSection12_img1 from "../public/images/tải-xuống-1.png";
import ImgSection12_img2 from "../public/images/dantri.jpg";
import ImgSection12_img3 from "../public/images/logo-vinhomes-ocean-park.jpg";
import ImgSection12_img4 from "../public/images/VHSC_LogoFinal-02.png";
import ImgSection12_img5 from "../public/images/logo_timescity-150x98-1.png";
import ImgSection12_img6 from "../public/images/Vingroup-150x98-1.png";
import ImgSection12_img7 from "../public/images/VnExpress_logo.jpg";
import ImgSection12_img8 from "../public/images/VTV2-150x98-1.png";
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
        background: "rgba(255, 255, 255, 0.0)",

        height: "99%",
        top: "50%",
        right: "-30px",
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
        background: "rgba(255, 255, 255, 0.0)",

        left: "0",
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

export default function Slider_ss12() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
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
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider-item">
        <img src={ImgSection12_img1} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img2} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img3} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img4} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img5} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img6} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img7} alt="" />
      </div>
      <div className="slider-item">
        <img src={ImgSection12_img8} alt="" />
      </div>
    </Slider>
  );
}
