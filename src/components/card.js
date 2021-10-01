const Card = (article) => {
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

  //adds a blue box
  const div = document.createElement("div");
  div.setAttribute("style", "width: 100px; height: 100px; background: blue;");
  const target_element = document.getElementsByClassName("cards-container");
  target_element[0].appendChild(div);
  console.log(target_element);

  //my attempt at adding a card
  //   let cardWrap = document.createElement('div')
  //   let headDiv = document.createElement('div')
  //   let authorDiv = document.createElement('div')
  //   let picWrap = document.createElement('div')
  //   let imgAuthor = document.createElement('img')
  //   let authorSpan = document.createElement('span')

  //   cardWrap.classList.add('card')
  //   headDiv.classList.add('headline')
  //   authorDiv.classList.add('author')
  //   picWrap.classList.add('img-container')

  //   cardWrap.appendChild(headDiv)
  //   cardWrap.appendChild(authorDiv)
  //   authorDiv.appendChild(picWrap)
  //   picWrap.appendChild(imgAuthor)
  //   authorDiv.appendChild(authorSpan)

  // headDiv.textContent = article.headline;
  // imgAuthor.src = article.authorPhoto;
  // authorSpan.textContent = article.authorName;

  //   cardWrap.addEventListener(('click'), e => {
  //     console.log(article.headline)

  //   document.body.appendChild(cardWrap);
  //   return cardWrap
};

const cardAppender = (selector) => {
  Card();
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //my attempt
  // axios.get('http://localhost:5000/api/articles')
  //   .then((articleData) => {
  //     console.log(articleData.data.articles.javascript)
  //     articleData.data.articles.javascript.forEach(articleNew => {
  //       console.log(articleNew)
  //       let newCard = Card(articleNew);
  //       console.log(newCard)
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
};

export { Card, cardAppender };
