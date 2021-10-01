const Header = (title, date, temp) => {
  const div = document.createElement("div");
  div.setAttribute("class", "header");

  const span = document.createElement("span");
  span.setAttribute("class", "date");
  span.textContent = date;

  const heading = document.createElement("h1");
  heading.textContent = title;

  const span2 = document.createElement("span");
  span2.setAttribute("class", "temp");
  span2.textContent = temp;

  //span and heading
  div.appendChild(span);
  div.appendChild(heading);
  div.appendChild(span2);

  //div
  document.body.appendChild(div);
};

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

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  //enclosing in try catch as selector may not be valid
  try {
    const target_element = document.querySelector(selector);

    if (target_element == null)
      throw Error(`target element ${selector} not found`);

    //header element
    Header("header-1", "11/02/21", "#1");

    //div header
    let header_element = document.querySelector("div.header");

    //detach the element from its parent
    header_element = header_element.parentElement.removeChild(header_element);

    //attach it again under the target_element
    target_element.appendChild(header_element);
  } catch (e) {
    console.error(e.message);
  }
};

export { Header, headerAppender };
