//import { Button, Form, Input, Layout } from 'antd'
import { Button } from 'antd';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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
    const handleGoogleLogin = async (e) => {
            e.preventDefault()
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
          .catch(alert)
        setUser(response.user)
        console.log(response.user)
      }
      return (
        <>
          <Button type='primary' onClick={handleGoogleLogin}>Sign in with Google</Button>
        </>
      )
    }
  

// export default function Login({setUser, setToken}) {
//     const handleFormSubmit = (values) => {
//         fetch('http://localhost:5002/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(values)
//         })
//         .then(response => response.json())
//         .then(data=> {
//             setToken(data.token)
//             setUser(data.user)
//         })
//         .catch(alert)
//     }
//     return (
//         <Layout.Content style={{ padding: '50px' }}>
//             <h1>Login</h1>
//             <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
//                 <Form.Item label="Email" name="email" rules={[{
//                     required: true,
//                     message: 'Please enter a valid email'
//                 }]}>
//                     <Input />
//                 </Form.Item>
//                 <Form.Item label="Password" name="password" rules={[{
//                     required: true,
//                     message: 'Please enter password'
//                 }]}>
//                     <Input.Password />
//                 </Form.Item>
//                 <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
//                     <Button type='primary' htmlType='submit'>Login</Button>
//                 </Form.Item>
//             </Form>
//         </Layout.Content>
//     )
// }
