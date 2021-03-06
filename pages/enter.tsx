import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({}) {
  const {user, userName} = useContext(UserContext)
  return (
    <main>
      {user ?
        !userName ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  )
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    const auth = getAuth()
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}