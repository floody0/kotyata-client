import React from 'react'
import styles from "./MySelect.module.css"

interface Props {
    className: string
}

const MySelect = (props: Props) => {
  return (
    <div className={`${styles.mySelect} ${props.className || ""}`}>MySelect</div>
  )
}

export default MySelect