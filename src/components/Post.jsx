import { Card, Avatar } from "antd"
import { HeartTwoTone } from '@ant-design/icons'

export default function Post({ post, setPhotoList }) {
  const handleLikeClick = () => {
    fetch(`https://express-ts-af.web.app/photos/${post.photoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(results => results.json())
      .then(newListOfPhotos => {
        setPhotoList(newListOfPhotos)
      })
      .catch(alert)
  }
  const Heart = () => {
    return post.likes ? <><HeartTwoTone twoToneColor="#eb2f96" onClick={handleLikeClick} />
      {post.likes.toLocaleString()} Likes</> : <HeartTwoTone twoToneColor="#bbb" onClick={handleLikeClick} />
  }
  return (
    <Card
      className="card"
      hoverable
      actions={[
        <Heart />
      ]}
      cover={
        <img alt={post.description} src={post.photo} />
      }
    >
      <Card.Meta
        avatar={<Avatar src={post.avatar} size="large" />}
        title={post.userName}
        description={post.description}
      />
    </Card>
  )
}


