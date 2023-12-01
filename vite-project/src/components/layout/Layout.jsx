import React from 'react'

function Layout(children) {
  return (
    <div>
      <Navbar/>
      <div classname ="Content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout