import React from 'react';
import classNames from 'classnames';
import './style/index.scss';

export type ButtonType = 'default' | 'primary' | 'info' | 'link';

export type ButtonSize = 'lg' | 'md' | 'sm';

export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
  const {
    type,
    size,
    disabled,
    children,
    htmlType,
    href,
    ...restProps
  } = props;

  const classes = classNames('sru-btn', {
    [`sru-btn-${type}`]: type,
    [`sru-btn-${size}`]: size,
  });

  if (type === 'link' && href) {
    return (
      <a href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={htmlType}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
