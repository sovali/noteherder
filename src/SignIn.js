import React from 'react'

import './SignIn.css'

const SignIn = ({ handleAuth }) => {
  return (
    <div className="SignIn">
      <h1>SIGN IN</h1>
      <button onClick={handleAuth}>Sign In</button>
    </div>
  )
}

export default SignIn
