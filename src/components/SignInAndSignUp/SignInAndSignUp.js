import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from '../../context/user';
import { auth, signInWithGoogle } from '../../firebase/firebaseConfig';

import styles from './SignInAndSignUp.module.css';

const SignInAndSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') return;

    let currentUser;

    try {
      if (isSignIn) {
        const { user: authUser } = await auth.signInWithEmailAndPassword(email, password);
        currentUser = authUser;
      } else {
        const { user: newUser } = await auth.createUserWithEmailAndPassword(email, password);
        currentUser = newUser;
      }

      setUser({ displayName: currentUser.email, email: currentUser.email });
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ displayName: currentUser.email, email: currentUser.email })
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (user) return <Redirect to="/dashboard" />;

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Email</span>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Password</span>
            <input
              className={styles.formInput}
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <button className={styles.btnGoogle} type="button" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
        <div className={styles.goToSignIn}>
          <span>Already have an account?</span>
          <button className={styles.formToggle} onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;