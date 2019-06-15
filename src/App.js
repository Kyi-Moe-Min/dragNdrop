import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div
          draggable
          onDragStart={e =>
            console.log("drag start", e.target.classList.add("hide"))
          }
          onDragEnd={e =>
            console.log("drag end", e.target.classList.remove("hide"))
          }
          style={{ width: 70, backgroundColor: "#88f" }}
        >
          drag
        </div>
        <div style={{ padding: 100 }}>
          <div
            onDrop={(e, c) => console.log("drop", e, c)}
            style={{ backgroundColor: "#ff8", width: 300 }}
            onDragOver={event => {
              event.preventDefault();
            }}
          >
            drop
          </div>
        </div>
      </div>
    );
  }
}
