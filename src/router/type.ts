export interface IRoute {
  path: string
  name: string
  component: any
  className?: string
  child?: Array<IRoute>
}
