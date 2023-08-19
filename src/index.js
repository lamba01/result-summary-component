import React from "react";
import MyComponent from "./component";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <MyComponent /> {/* Use the imported component */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
