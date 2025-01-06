'use client'
import React, { Suspense } from 'react'
import { Button } from '@/app/ui/kit/button'
import styles from './styles.module.css'

const NotFound = () => {
  return (
    <Suspense>
      <div className={styles.wrapper}>
        <div>404. The page was not found</div>
        <Button href="/">Go home</Button>
      </div>
    </Suspense>
  )
}

export default NotFound
