import React from "react";
import { Split } from "react-splitio";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* fixed in v0.1.9 */}
      <Split name="my-split">
        {value => {
          return <div>hello, world</div>;
        }}
      </Split>
      {/* These two cases doen't work in v0.1.9 */}
      <Split name="my-split">
        {value => {
          return null;
        }}
      </Split>
      <Split name="my-split">
        {value => {
          if (value && value.treatment === "on") {
            return <div></div>;
          } else {
            return null;
          }
        }}
      </Split>
    </div>
  );
};

export default App;
