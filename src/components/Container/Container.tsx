import React from 'react'
import styles from './Container.module.css'

interface Props {
    className?: string,
    children: React.ReactNode
}

const Container = ({ className, children}: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>{children}</div>
  )
}

export default Container