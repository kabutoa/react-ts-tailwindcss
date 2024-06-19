import type { Props } from '@/types'

function AboutPage({ className, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(' ')} {...rest}>
      About Page
    </div>
  )
}

export default AboutPage
