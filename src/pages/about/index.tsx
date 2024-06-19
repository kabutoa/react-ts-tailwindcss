import type { Props } from '@/types'
import { useQuery, useRouterState } from '@/utils'

function AboutPage({ className, ...rest }: Props): JSX.Element {
  const state = useRouterState<{ stateKey: string }>()
  const query = useQuery()
  console.log(state?.stateKey, query.get('id'))

  return (
    <div className={[className].join(' ')} {...rest}>
      About Page
    </div>
  )
}

export default AboutPage
