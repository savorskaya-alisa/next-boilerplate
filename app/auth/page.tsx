'use client'
import React, { Suspense } from 'react'
import styles from '../styles.module.css'

const Root = () => {
  return (
    <Suspense>
      <div className={styles.wrapper}>
        <div>Auth Page</div>
      </div>
    </Suspense>
  )
}

export default Root
