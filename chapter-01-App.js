


// const heading1 = React.createElement("h1",{}, "Namaste React !!!");
// const heading2 = React.createElement("h2",{}, "This is our 1st demo class !!!");

const returnLI = (arr) => {
  return arr.map((item) => React.createElement("li", {}, item));
};

const buildDynamicCode = (obj, heading) => {
  let codeObj = [];
  const headingType = heading ? heading : "h1";  

  for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
    if (Array.isArray(obj[key])) {
      let liArr = returnLI(obj[key]);
      
      codeObj.push(
        React.createElement(headingType, {}, key),
        React.createElement(
          "li",
          {
            innerHTML: key,
          },
          [...liArr]
        )
      );
    } else if (typeof obj[key] == "object") {
     
        codeObj.push(
            React.createElement(headingType, {}, key),
            ...buildDynamicCode(obj[key], "h3")
        )
    } else {
      //
    }
  }

  return codeObj;
};

let obj = {
  Theory: [
    "What is Emmet?",
    "Difference between a Library and Framework?",
    "What is CDN? Why do we use it?",
    "Why is React known as React?",
    "What is crossorigin in script tag?",
    "What is diference between React and ReactDOM",
    "What is difference between react.development.js and react.production.js files via CDN?",
    "What is async and defer? - see my Youtube video ;)",
  ],
  Coding: {
    "Set up all the tools in your laptop": [
      "VS Code",
      "Chrome",
      "Extensions of Chrome",
    ],
    "Create a new Git repo": null,
    "Build your first Hello World program using,": {
      "Using just HTML": null,
      "Using JS to manipulate the DOM": null,
      "Using React": [
        "use CDN Links",
        "Create an Element",
        "Create nested React Elements",
        "Use root.render",
      ],
    },
    "Push code to Github (Theory as well as code)": null,
    "Learn about Arrow Functions before the next class": null,
  },
  References: [
    "https://beta.reactjs.org/apis/react/createElement",
    "https://www.youtube.com/watch?v=IrHmpdORLu8",
  ],
};

let codeObj = buildDynamicCode(obj, null);

const container = React.createElement("div", {}, [...codeObj]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
