const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //my attempt
  const title = document.createElement("div");

  let newvariables = [];
  for (let i = 0; i < topics.length; i++) {
    let item,
      [i] = document.createElement("div");
    item, ([i].textContent = topics[i]);
    newvariables.push(item, [i]);
    item, [i].classList.add("tab");
    title.appendChild(item, [i]);
  }

  title.classList.add("topics");

  return title;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  //my attempt
  const entryPoint = document.body.querySelector(`${selector}`);
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((res) => {
      console.log(res.data.topics.length);
      console.log(res.data.topics);
      let newvariables = [];
      res.data.topics.forEach((element) => {
        newvariables.push(element);
      });

      const newTabs = Tabs(newvariables);
      entryPoint.appendChild(newTabs);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Tabs, tabsAppender };
