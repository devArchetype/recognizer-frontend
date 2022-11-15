import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <>
      <h1>Recognizer Frontend</h1>
      <Outlet />
    </>
  )
}
