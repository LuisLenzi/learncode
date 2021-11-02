import React, { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} type="button" {...rest}>
      {children}
    </button>
  )
}
