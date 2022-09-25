import React, { useEffect, useState } from 'react'
import './Login.css'
import Logo from '../image/LabtinLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin
  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='login_main_div'>
      <div className='login_main'>
        <div className='login_heading'>
          <h1>Welcome Back!</h1>
        </div>
        <div className='login_form'>
          <div className='login_form_entry'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='login_form_entry'>
            <label htmlFor='userPassword'>Password</label>
            <input
              type='password'
              name='userPassword'
              id='userPassword'
              placeholder='fs4353adf'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='submitButton' onClick={submitHandler}>
            Login
          </button>
          <div className='signUp_sec'>
            <p>Don't have a account? </p>
            <Link to='/Register'> SignUp</Link>
          </div>
        </div>
        <div className='header_logo loginfooter'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>
      {error ? <p className='wError'>{error}</p> : null}
    </div>
  )
}

export default Login
