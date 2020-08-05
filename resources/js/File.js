import React, { Component } from 'react';
import ReactDOM from "react-dom";
import FileUpload from './components/FileUpload';

class File extends Component {
  render() {
    return (
      <div className="App">
          <FileUpload/>      
      </div>
    );
  }
}

// render Task component instead of Example
if (document.getElementById("fileupload")) {
  ReactDOM.render(
     <FileUpload />,
      document.getElementById("fileupload")
  );
}
