import { Outlet, useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation()

  return <div>{pathname === '/' ? <h1>Home</h1> : <Outlet />}</div>
}

export default Home
