const Header = (title, date, temp) => {
  // Content
  const head = document.createElement('div')
  head.classList.add('header')
  // Date
  const datE = document.createElement('span')
  datE.classList.add('date')
  datE.textContent = date
  head.appendChild(datE)
  // Title
  const H1 = document.createElement('h1')
  H1.textContent = title
  head.appendChild(H1)
  // Temp
  const tempSpan = document.createElement('span')
  tempSpan.classList.add('temp')
  tempSpan.textContent = temp
  head.appendChild(tempSpan)

  return head
}

const headerAppender = (selector) => {
  let select = document.querySelector(selector)
  select.append(Header('Lambda Times', '7/9/2021', "91°"))
  
}

// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

    // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

export { Header, headerAppender }
