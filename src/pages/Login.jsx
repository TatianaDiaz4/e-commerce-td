import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'
import "./styles/Login.css"


const Login = () => {
  const {token, user} = useSelector((state) => state.userInfo);

  const {register, handleSubmit} = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
  console.log(data);
  dispatch(loginUserThunk(data));
};

const handleClickLogout = () => {
  dispatch(logOutThunk())
}

return (
  <main className='login'>
    {token ? (
        <section className='login_loged'>
          <i className='login_loged-icon bx bx-user-circle'></i>
          <h3 className='login_loged-name'>{`${user.firstName} ${user.lastName}`}</h3>
          <button className='login_loged-btn' onClick={handleClickLogout}>Logout</button>
        </section>
      ) : (
    
    <form className='login_form' onSubmit={handleSubmit(submit)}>
      <h3 className='login_title'>Welcome! Enter your email and password to continue</h3>
      <div className='login_container-test'>
        <h4 className='login_test-title'>Test data</h4>
        <p className='login_test-email'>
          <i className='bx bx-envelope'></i> john@gmail.com
          </p>
        <p className='login_test-password'>
          <i className='bx bx-lock-alt'></i> john1234
          </p>
      </div>
      <div className='login_field'>
        <label className='login_label'>Email</label>
        <input className='login_input' type="email" {...register("email")} />
      </div>
      <div className='login_field'>
      <label className='login_label'>Password</label>
      <input className='login_input' type="password" {...register("password")} />
      </div>
      <button className='login_btn'>Login</button>
      <p className='login_text-footer'>Don't have an account? <span>Sign up</span>
      </p>
    </form>
    )}
  </main>
);
};
export default Login