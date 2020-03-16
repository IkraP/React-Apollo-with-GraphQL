import React, { Component } from "react";

// Interaction with server

export default class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };
  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for your link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="A url for your link"
          />
        </div>
        <button onClick={`... coming soon`}>Submit</button>
      </div>
    );
  }
}
