import React, { FC } from 'react'
import classNames from 'classnames';


//定制主题
export type AlterType = 'success' | 'default' | 'danger' | 'warning';

interface BaseAlterProps {
    className?: string;
    close?: boolean;
    type?: AlterType;
    children: React.ReactNode;
}

//函数式组件类型可以使用React.FC，使用这个类型有个好处就是，提醒你必须返回一个ReactNode
export const Alter: FC<BaseAlterProps> = (props) => {
    const {
        className,
        close,
        type,
        children,
    } = props
    //确定类名
    const classes = classNames('alter', className, {
        [`alter-${type}`]: type,
    })
    //
    return (
        <div className={classes}>

        </div>
    )
}

