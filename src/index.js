import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ children, type }) => {
  if (type === 'primary') {
    return <button style={{ backgroundColor: 'green' }}>{children}</button>
  }
  if (type === 'dashed') {
    return (
      <button style={{ backgroundColor: 'black', color: 'white' }}>
        {children}
      </button>
    )
  }
  if (type === 'text') {
    return (
      <button style={{ backgroundColor: 'black', color: 'green' }}>
        {children}
      </button>
    )
  }
  if (type === 'link') {
    return (
      <button style={{ backgroundColor: 'white', color: 'green' }}>
        {children}
      </button>
    )
  } else {
    return <button>{children}</button>
  }
}
