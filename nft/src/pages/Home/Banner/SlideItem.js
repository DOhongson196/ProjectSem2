function SlideItem({ src, className }) {
  return <img className={`w-full h-full object-cover rounded-xl ${className}`} src={src} alt="slide" />;
}

export default SlideItem;
