import { Link } from 'react-router-dom';

function Button({
  to,
  href,
  text = false,
  children,
  primary = false,
  className,
  disabled = false,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on' && typeof props[key] === 'function')) {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const styleDisabled = disabled ? 'pointer-events-none opacity-50' : '';
  const stylePrimary = primary ? 'bg-primary hover:opacity-90 rounded' : '';
  const styleText = text ? ' hover:text-[#c99400]' : '';

  const classes = `text-base font-semibold py-1.5 px inline-flex items-center text-center leading-5 select-none text-[#1E2329] ${stylePrimary} ${styleText} ${styleDisabled} ${className} `;
  return (
    <Comp className={classes} {...props}>
      <span className="mr-2 inline-flex w-5">{leftIcon}</span>
      <span>{children}</span>
      <span className="ml-2 inline-flex w-5">{rightIcon}</span>
    </Comp>
  );
}

export default Button;
