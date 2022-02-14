const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if(blogs.length === 0) return 0 
  if(blogs.length === 1) return blogs[0].likes

  const result = blogs.reduce((a,b) => a + b.likes,0)
  console.log(result);

  return result
}

const favourite = (blogs) => {
  if(blogs.length === 0) return null
  if(blogs.length === 1) {
    const blogToReturn = {
      title: blogs[0].title,
      author: blogs[0].author,
      likes: blogs[0].likes,
    }
    return blogToReturn
  } 

  const favouriteBlog = blogs.reduce((a,b) => a.likes >= b.likes ? a : b)

  const blogToReturn = {
      title: favouriteBlog.title,
      author: favouriteBlog.author,
      likes: favouriteBlog.likes,
    }
  
    return blogToReturn
}


module.exports = {
  dummy, totalLikes, favourite
}