import { Card, Avatar } from "antd"

export default function Post({ post }) {
    return(
       <Card
       style={{ width: 300 }}
       cover={
        <img alt={post.description} src={post.photo} />
       }

       >
        <Card.Meta 
            avatar={<Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />}
            title={post.userName}
            description={post.description}
        />
       </Card>

    )
 }

