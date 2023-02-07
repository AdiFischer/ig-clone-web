import { useState, useEffect } from "react"
import { Button } from "antd"
import UploadModal from "./UploadModal"
import Post from "./Post"
import Header from "./Header"


export default function Feed({ setUser }) {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpload] = useState(false)
  useEffect(() => {
    fetch('https://express-ts-af.web.app/photos')
      // fetch('http://localhost:5002/photos')
      .then(results => results.json())
      .then((data) => setPhotoList(data))
      .catch(alert)
  }, [setPhotoList])
  return (
    <section className="photo-feed">
      <Header setUser={setUser} />
      {!photoList
        ? <p>Loading...</p>
        : (photoList.map(post => (
          <Post setPhotoList={setPhotoList} post={post} key={post.photoId} />
        ))
        )}
      {showUpload ? <UploadModal setPhotoList={setPhotoList} setShowUpload={setShowUpload} /> : null}
      {/* {showUpload &&} */}
      <Button onClick={() => setShowUpload(true)}
        className="fab" type="primary"
        shape="circle" size="large">✚</Button>
    </section>
  )
}