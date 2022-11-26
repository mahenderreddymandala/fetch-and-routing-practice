// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogdetails} = props
  const {author, imageUrl, avatarUrl, title, topic, id} = blogdetails
  console.log(id)

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item">
        <div className="blog">
          <img src={imageUrl} alt={`imageUrl${id}`} className="imageUrl" />
        </div>
        <div className="style">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>

          <div className="avatar-section">
            <img src={avatarUrl} alt={`avatarUrl${id}`} className="avatarUrl" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
