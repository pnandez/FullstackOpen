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


module.exports = {
  dummy, totalLikes
}