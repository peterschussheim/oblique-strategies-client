const randomizer = data => {
  const rand = Math.floor(Math.random() * data.length)
  return data[rand]
}

export { randomizer }
