import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCddy_MlOAbHktYi4SyX81zUC921M-5lhE",
  authDomain: "upload-storage-ts-aaf.firebaseapp.com",
  projectId: "upload-storage-ts-aaf",
  storageBucket: "upload-storage-ts-aaf.appspot.com",
  messagingSenderId: "923057526397",
  appId: "1:923057526397:web:94eb17c226b6bed9a94314",
  measurementId: "G-HJP9Z9TTXR"
};

export default function Login({ setUser }) {
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
      .catch(alert)
    setUser(response.user)
    localStorage.setItem("user", JSON.stringify(response.user));
    // console.log(response.user)
  }
  return (
    <div className="login">
      <h4 className="login-text">IG CLONE</h4>
      {/* <h5 className="login-text">Add Post</h5> */}
      <button className='login-button' type='primary' onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  )
}

