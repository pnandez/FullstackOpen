const list_helpers = require('../utils/list_helpers')

test('dummy returns 1', () =>{
  const blogs = []

  const result = list_helpers.dummy(blogs)

  expect(result).toBe(1)
})

const emptyBlogsList = []

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]


describe('total likes', () => {
  

  test('when list has only one blog, equals the likes of that', () => {
    const result = list_helpers.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })



  test('of empty list is zero',() => {
    const result = list_helpers.totalLikes(emptyBlogsList)
    expect(result).toBe(0)
  })


  test('of bigger list is calculated right', () => {
    const result = list_helpers.totalLikes(blogs)
    expect(result).toBe(36)
  })
})

describe('favourite', () => {
  test('when empty list is null', () => {
    const result = list_helpers.favourite(emptyBlogsList)
    expect(result).toEqual(null)
  })

  test('when list has one blog, equals that blogs info', () =>{
    const expectedResult = {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    }
    const result = list_helpers.favourite(listWithOneBlog)
    expect(result).toEqual(expectedResult)
  })

  test('of bigger list is calculated right', () => {
    const expectedResult = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    }
    const result = list_helpers.favourite(blogs)
    expect(result).toEqual(expectedResult)})
})

describe('mostWritten', () => {
  test('when empty list is null', () => {
    const result = list_helpers.mostBlogger(emptyBlogsList)
    expect(result).toEqual(null)
  })

  test('when list has one blog, equals that auhtors info', () =>{
    const expectedResult = {
      author: 'Edsger W. Dijkstra',
      blogsNumber: 1
    }
    const result = list_helpers.mostBlogger(listWithOneBlog)
    expect(result).toEqual(expectedResult)
  })

  test('of bigger list is calculated right', () => {
    const expectedResult = {
      author: "Robert C. Martin",
      blogsNumber: 3
    }
    const result = list_helpers.mostBlogger(blogs)
    expect(result).toEqual(expectedResult)})
})


describe('bestAuthor', () => {
  test('when empty list is null', () => {
    const result = list_helpers.topAuhtorBlogger(emptyBlogsList)
    expect(result).toEqual(null)
  })

  test('when list has one blog, equals that auhtors info', () =>{
    const expectedResult = {
      author: 'Edsger W. Dijkstra',
      likes: 5,
    }
    const result = list_helpers.topAuhtorBlogger(listWithOneBlog)
    expect(result).toEqual(expectedResult)
  })

  test('of bigger list is calculated right', () => {
    const expectedResult = {
      author: "Edsger W. Dijkstra",
      likes: 17
    }
    const result = list_helpers.topAuhtorBlogger(blogs)
    expect(result).toEqual(expectedResult)})
})