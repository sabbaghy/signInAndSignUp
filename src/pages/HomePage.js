import React from 'react'

const HomePage = () => {
   console.log('homepage');
   return (
      <div>
         <h1>HOME PAGE</h1>
         <h1>TAGUARA DIGITAL</h1>
         <button
            onClick={signInWithGoogle}
         >
            Sign In with Google
         </button>
      </div>
   )
}

export default HomePage;