import { Component } from "react"
// import layoutStyles from './Layout.css'

function Layout(props) {
  
  return (
    <div className="layout">
    {/* <Nav /> */}
    <div className="layout-children">{props.children}</div>
    {/* <Footer /> */}
  </div>
  )
  
}

export default Layout