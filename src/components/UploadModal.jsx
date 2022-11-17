import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { Modal, Form, Input, Button, Upload  } from "antd"

const firebaseConfig = {
    apiKey: "AIzaSyCddy_MlOAbHktYi4SyX81zUC921M-5lhE",
    authDomain: "upload-storage-ts-aaf.firebaseapp.com",
    projectId: "upload-storage-ts-aaf",
    storageBucket: "upload-storage-ts-aaf.appspot.com",
    messagingSenderId: "923057526397",
    appId: "1:923057526397:web:94eb17c226b6bed9a94314",
    measurementId: "G-HJP9Z9TTXR"
  };

export default function UploadModal({setShowUpload, setPhotoList}) {
    const handleNewPhoto = (values) => {
        console.log(values)
        //0. connect to fb storage
        const app = initializeApp(firebaseConfig)
        const storage = getStorage(app)
        //1. upload photo to storage bucket
        const fileName = values.photo.file.name
        const imageRef = ref(storage, `photos/${fileName}`)
        uploadBytes(imageRef, values.photo.file.originFileObj)
        .then(() => console.log('upload successful'))
        .catch(err => console.error(err))
        //2. figure out url for that photo
        const photoUrl = `https://firebasestorage.googleapis.com/v0/b/upload-storage-ts-aaf
        .appspot.com/o/${fileName}?alt=media`
        //3. put that url into new photo object
        let newPhotoObject = values
        newPhotoObject.photo = photoUrl
        //4. send a post req to api
        fetch('https://express-ts-af.web.app/photos', {
            //fetch(http://localhost:5002/photos)//localy
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPhotoObject)
        })
        .then(results => results.json())
        .then(neeListOfPhotos => {
            //5. get back new list of photos
            setPhotoList(neeListOfPhotos)
            //6. setPhotoList and close Modal
            closeModal()
        })
        .catch(alert)
        //send a post req to api
        //get back new list of photos
        //setPhotoList

    }

    const closeModal = () => setShowUpload(false)
    return(
        <Modal title="Upload photo" open={true} footer={null} onCancel={closeModal}>
            <Form labelCol={{ span:8 }} wrapperCol={{ span: 16}} onFinish={handleNewPhoto}>
                <Form.Item label="user name" name="userName">
                    <Input required />
                </Form.Item>
                <Form.Item label="Profile picture URL" name="profilePic">
                    <Input required />
                </Form.Item>
                <Form.Item label="Photo" name="photo">
                    <Upload listType="picture-card">
                        +
                    </Upload>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input.TextArea rows={4} required />
                </Form.Item >
                <Form.Item wrapperCol={{ offset :8, span: 16}}>
                    <Button type="primary" htmlType="submit">Save Photo</Button>
                </Form.Item>
            </Form>
        </Modal>
            )

}