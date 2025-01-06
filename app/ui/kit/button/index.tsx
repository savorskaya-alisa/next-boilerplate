import type { ReactElement, ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react'
import { useEvent } from '@coxy/utils/dist/use/use-event'
import cn from 'classnames'
import { useRouter } from 'next/navigation'
import { Loader } from '@/app/ui/kit/loader'
import styles from './styles.module.css'

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  isLoading?: boolean
  href?: string
}

export function Button(props: ComponentProps): ReactElement<HTMLButtonElement> {
  const router = useRouter()
  const { isLoading, className, href, onClick, ...otherProps } = props
  const cs = cn(styles.button, className)

  const handleClick = useEvent((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    if (href) {
      void router.push(href)
      return
    }

    if (onClick) {
      onClick(event)
    }
  })

  return (
    <div className={styles.wrapper}>
      <button {...otherProps} onClick={handleClick} className={cs}>
        {isLoading ? <Loader size={20} /> : otherProps.children}
      </button>
    </div>
  )
}
