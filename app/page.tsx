'use client'
import React, { Suspense, useEffect, useId } from 'react'
import toast from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { selectCounterState, setDecrement, setIncrement } from '@/app/store/reducers/counter'
import { Button } from '@/app/ui/kit/button'
import styles from './styles.module.css'

const Root = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCounterState)
  const id = useId()

  useEffect(() => {
    if (count <= 0) {
      toast.error('Count is less than 0.', { id })
    }
    if (count > 0) {
      toast.dismiss(id)
    }
  }, [count])

  return (
    <Suspense>
      <div className={styles.wrapper}>
        <div>{count}</div>
        <div className={styles.buttons}>
          <Button onClick={() => dispatch(setDecrement())}>-1</Button>
          <Button onClick={() => dispatch(setIncrement())}>+1</Button>
        </div>
      </div>
    </Suspense>
  )
}

export default Root
