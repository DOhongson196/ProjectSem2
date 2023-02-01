import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
import { LeftIcon, RightIcon } from '../Icons';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftIcon />
    </div>
  );
}

function SimpleSlider({ autoplay = false, dots = false, slidesToShow = 1, slidesToScroll = 1, children }) {
  const settings = {
    dots,
    infinite: true,
    fade: true,
    autoplay,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SimpleSlider;
