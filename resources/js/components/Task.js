import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            tasks: []
        };
        // bind method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } // end constructor

    // handle change method
    handleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    // handle the submit method
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .post("/todos", {
                title: this.state.title
            })
            .then(response => {
                console.log("from handle submit", response);
                // set state
                this.setState({
                    tasks: [response.data, ...this.state.tasks]
                });
                // then clear the value of textarea
                this.setState({
                    title: ""
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Create a new task"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("task"));
