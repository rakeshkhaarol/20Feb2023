import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'


export default class Layout extends Component {
  render() {
    return (
      <>
        <header>header</header>
        <Outlet/>
        <footer>footer</footer>
      </>
    )
  }
}
