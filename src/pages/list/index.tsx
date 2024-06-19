import type { Props } from '@/types'

function ListPage({ className, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(' ')} {...rest}>
      List Page
    </div>
  )
}

export default ListPage
