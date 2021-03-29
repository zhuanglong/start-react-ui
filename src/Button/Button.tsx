import React from 'react';
import classNames from 'classnames';
import './style/index.scss';

export type ButtonType = 'default' | 'primary' | 'info' | 'link';

export type ButtonSize = 'lg' | 'md' | 'sm';

interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

type NativeButtonProps = {
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

type AnchorButtonProps = {
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
    disabled: type === 'link' && href && disabled,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
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
