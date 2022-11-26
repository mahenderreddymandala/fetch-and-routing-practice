// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, author, imageUrl, content, avatarUrl, id} = blogData

    return (
      <div className="blogItemdetails-section">
        <h1 className="title1">{title}</h1>
        <div className="section1">
          <img src={avatarUrl} alt={`avatarUrl${id}`} className="avatarUrl1" />
          <p className="author1">{author}</p>
        </div>
        <img className="imageUrl1" src={imageUrl} alt={`imageUrl${id}`} />

        <p className="content1">{content}</p>
      </div>
    )
  }

  render() {
    const {blogData} = this.state
    console.log(blogData)
    return this.renderBlogItemDetails()
  }
}

export default BlogItemDetails
