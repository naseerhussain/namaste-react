import React from "react";
import ReactDOM  from "react-dom/client";

// this is syntax to save jsx into a variable. used for simple dom elements
const heading = <h3>This is namaste javascript</h3>

// this syntax is used when you have nested or complex dom structure
const heading2 = (
    <ul>
        <li>1. Import React</li>
        <li>2. Import React-Dom</li>
    </ul>
);

const TitleComponent = ()=> <h3>2 types of react components</h3>;
/***
 *   2 types of react components
 *      1. Functional component --> New one
 *      2. Class component --> Old one
 */
const componentTypes = ["Functional Component", "Class Components"];

const LIComponent = (item) => {
    return (<li key={item}>{item}</li>);
}

const HeadingComponent = () => {
    return (
        <div>
            {heading} 
            {heading2} 

            <TitleComponent />
            <ul>
            { ...componentTypes.map(item=> LIComponent(item))}
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<HeadingComponent />);