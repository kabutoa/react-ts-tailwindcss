import { useLocation } from 'react-router-dom'

type StateType = Record<string, unknown> | null

// 获取query
export const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search)
}

// 获取state
export const useRouterState = <T = StateType>(): T => {
  const location = useLocation()
  return location.state as T
}
