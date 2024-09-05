import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from '../Pages/Home'

export const Route = createLazyFileRoute('/')({
  component: Home,
})