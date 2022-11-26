// Write your JS code here

import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsdata()
  }

  getBlogsdata = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData})
  }

  render() {
    const {blogsData} = this.state

    return (
      <div className="blogList-container">
        {blogsData.map(each => (
          <BlogItem blogdetails={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default BlogList
