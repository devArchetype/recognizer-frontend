import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div>
      <h1>Recognizer Frontend</h1>
      <Outlet />
    </div>
  )
}
