import type { Props } from '@/types'

function HomePage({ className, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(' ')} {...rest}>
      Home Page
    </div>
  )
}

export default HomePage
