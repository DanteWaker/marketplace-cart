import { createLazyFileRoute } from '@tanstack/react-router'
import { Cart } from '../Pages/Cart'

export const Route = createLazyFileRoute('/cart')({
  component: Cart
})