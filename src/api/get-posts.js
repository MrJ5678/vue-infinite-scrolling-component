var names = ["小明", "小红", "小白", "大黑"]

const getPosts = number => {
  let ret = []

  for (let i = 0; i < number; i++) {
    ret.push({
      author: names[i % names.length],
      content: "Lor posu dolor sit amet, cnstwretur adi dliet.",
    })
  }

  return ret
}

export default getPosts
