import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Loading } from '@/components/loading/index'
import { AnimatePresence } from 'framer-motion'
import RouteMotion from '@/components/motion/route-motion'

export interface IRouter {
  name?: string
  path: string
  children?: IRouter[]
  component: React.FC
}

const router: IRouter[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home/index'))
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/about/index'))
  },
  {
    path: '/list',
    component: lazy(() => import('@/pages/list/index'))
  }
]

const RouterConfig = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {router.map((route, i) => {
            const { path, component: Component } = route
            return (
              <Route
                key={i}
                path={path}
                element={
                  <RouteMotion>
                    <Component />
                  </RouteMotion>
                }
              />
            )
          })}
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default RouterConfig
