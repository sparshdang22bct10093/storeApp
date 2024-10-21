import React, { useContext, useRef } from 'react'

import style from './AuthPage.module.css';
import { CartContext } from '../../store/CartContext';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
    const context = useContext(CartContext);
    const navigate = useNavigate()
    const userRef = useRef();
    const PassRef = useRef()
    const loginHandler = (e) => {
        e.preventDefault();
        if (!!userRef.current.value && !!PassRef.current.value){
            context.login()
            navigate('/');
        }
    }


  return (
    <>
    <h1 className={style.heading}>Pallavi's Store</h1>
        <div className={style.main}>
            <h2>Login </h2>
            <form onSubmit={loginHandler}>
                <label htmlFor='username'>Username:</label>
                <input type="text" name="username" ref={userRef} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" ref={PassRef} />
                <button type="submit">Login</button>
            </form>
        </div>      
    </>
  )
}
