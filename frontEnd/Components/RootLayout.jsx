import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
    <div className="min-h-screen flex  bg-linear-to-br from-gray-900 via-gray-800 to-black">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout