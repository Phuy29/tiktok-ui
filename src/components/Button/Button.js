import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  letfIcon,
  rigthIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
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

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {letfIcon && <span className={cx('icon')}>{letfIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rigthIcon && <span className={cx('icon')}>{rigthIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  letfIcon: PropTypes.node,
  rigthIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
