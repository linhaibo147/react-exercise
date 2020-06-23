

import React,{FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react';

//classnames 是可以组成多个class类名的库（解决react的多class名称的）
import classNames from 'classnames'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?:string;
  disabled?:boolean;
  size?:ButtonSize;
  btnType?:ButtonType;
  children:React.ReactNode;
  href?:string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

//TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。
export type ButtonProps = Partial<NativeButtonProps &  AnchorButtonProps>


export const Button:FC<ButtonProps> = (props)=>{
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}


Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;