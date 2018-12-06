import fetch from 'node-fetch'

const key = process.env.REACT_APP_PRH_KEY
const domain = 'PRH.US'

export const searchAuthors = async (author) => {
    const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/${domain}` +
                `/search?suppressLinks=false&suppressRecordCount=true&returnEmptyLists=true&q=${author}&start=0&rows=50` +
                `&docType=author&api_key=${key}`

    const response = await fetch(url)
    const authors = await response.json()

    return authors
}

export const getWorksByAuthorId = async (author_id) => {
  const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/${domain}/authors/${author_id}/` +
              `works?suppressLinks=false&suppressRecordCount=true&returnEmptyLists=true&start=0&rows=50&api_key=${key}`

  const response = await fetch(url)
  const works = await response.json()

  return works
}

export const searchBooks = async (book) => {
  const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/${domain}` +
              `/search?suppressLinks=false&suppressRecordCount=true&start=0&rows=50&q=${book}` +
              `&docType=work&api_key=${key}`

  const response = await fetch(url)
  const books = await response.json()

  return books
}
