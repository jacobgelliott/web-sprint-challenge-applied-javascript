import axios from "axios"

const Card = (article) => {
  // Body
  const cardBody = document.createElement('div')
  cardBody.classList.add('card')
  // Headline
  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = article.headline
  cardBody.appendChild(headlineDiv)
  // Author
  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')
  cardBody.appendChild(authorDiv)
  // Image container
  const imgCon = document.createElement('div')
  imgCon.classList.add('img-container')
  authorDiv.appendChild(imgCon)
  // Image
  const img = document.createElement('img')
  img.src = article.authorPhoto
  imgCon.appendChild(img)
  // Author Name
  const authName = document.createElement('span')
  authName.textContent = article.authorName
  authorDiv.appendChild(authName)
  // Event listener
  cardBody.addEventListener('click', () =>{ console.log(article.headline)
})
  return cardBody
}

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    res.data.topics.forEach(topic => {
      axios.get('http://localhost:5000/api/articles')
      .then(res => {
        let target = document.querySelector(selector)
        if(topic === 'node.js'){
          topic = "node"
        }
        let cardData = (res.data.articles[topic])
        for(let i=0;i<cardData.length;i++){
          target.append(Card(cardData[i]))
        }
      })
    })
  })
}

// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
export { Card, cardAppender }
