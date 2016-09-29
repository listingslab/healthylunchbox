import React from 'react'
import { Link } from 'react-router'

export default() => {
  return (
    <div className="App-header">
      <Link to="/"><img src="http://www.cancer.org.au/images/cc_logo_big.png" className="App-logo" alt="logo" /></Link>
      <h2>Healthy eating</h2>
    </div>
  )
}
