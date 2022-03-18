import ReactDOM from "react";
import React, { useState } from "react";

class Component extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange () {
        console.log('handle change called')
    }

    render () {
        return (
        <div className="">
        <div
          contentEditable="true"
          className="inputText h-screen w-full overflow-hidden p-12 focus:outline-none"
          onInput={this.handleChange}
        >
        </div>
        </div>
    );
    }
}

export default Component