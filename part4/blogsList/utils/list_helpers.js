const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if(blogs.length === 0) return 0 
  if(blogs.length === 1) return blogs[0].likes

  const result = blogs.reduce((a,b) => a + b.likes,0)
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

const mostBlogger = (blogs) => {
  if (blogs.length === 0) return null
  if(blogs.length === 1) 
    return {
      author: blogs[0].author,
      blogsNumber: 1
    }

  let authorsList = []

  blogs.forEach(element => {

    if(authorsList.map(author => author.author).includes(element.author)){
      authorsList = authorsList.map(author => {
        if (author.author === element.author) 
          return {
            author: element.author,
            blogsNumber: author.blogsNumber + 1
          }
        else return author
      })
    }
    else{
      authorsList = authorsList.concat({
        author: element.author,
        blogsNumber: 1
      })
    }
  });

  console.log(authorsList)

  const favouriteAuthor = authorsList.reduce((a,b) => a.blogsNumber >= b.blogsNumber ? a : b)

  return {
    author: favouriteAuthor.author,
    blogsNumber: favouriteAuthor.blogsNumber
  }
} 

const topAuhtorBlogger = (blogs) => {

  if(blogs.length === 0) return null
  if(blogs.length === 1) {
    return {
      author: blogs[0].author,
      likes: blogs[0].likes,
    }
  } 

  let authorsFame = []

  blogs.forEach(element => {

    if(authorsFame.map(author => author.author).includes(element.author)){
      authorsFame = authorsFame.map(author => {
        if (author.author === element.author) 
          return {
            author: element.author,
            likes: author.likes + element.likes
          }
        else return author
      })
    }
    else{
      authorsFame = authorsFame.concat({
        author: element.author,
        likes: element.likes
      })
    }
  });

  console.log(authorsFame)

  const favouriteAuthor = authorsFame.reduce((a,b) => a.likes >= b.likes ? a : b)

  return {
    author: favouriteAuthor.author,
    likes: favouriteAuthor.likes
  }
}


module.exports = {
  dummy, totalLikes, favourite, mostBlogger, topAuhtorBlogger
}