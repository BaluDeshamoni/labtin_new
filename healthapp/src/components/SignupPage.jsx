import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Logo from '../image/LabtinLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const SignupPage = ({ history }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(register(name, email, password))
  }
  return (
    <div className='login_main_div'>
      <div className='login_main'>
        <div className='login_heading'>
          <h1>Welcome To Labtin</h1>
        </div>
        <div className='login_form'>
          <div className='login_form_entry'>
            <label htmlFor='UsersName'>Name</label>
            <input
              type='text'
              name='UsersName'
              id='UsersName'
              placeholder='Ex - Shreyas Kumar'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='login_form_entry'>
            <label htmlFor='UserEmail'>Email</label>
            <input
              type='email'
              name='UserEmail'
              id='UserEmail'
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
            Sign Up
          </button>
          <div className='signUp_sec'>
            <p>Already have a account? </p>
            <Link to='/'> Login</Link>
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

export default SignupPage
