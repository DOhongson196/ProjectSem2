function SlideItem({ src, className }) {
  return <img className={`w-full h-auto object-cover rounded-xl ${className}`} src={src} alt="slide" />;
}

export default SlideItem;
