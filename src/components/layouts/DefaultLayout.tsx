import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div>
      <h1>Template Broker Frontend</h1>

      <Outlet />
    </div>
  )
}
