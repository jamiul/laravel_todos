import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Task extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            tasks: []
        };
        // bind method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
    // render tasks
    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <p>
                        {task.title}{" "}
                        <Link
                            className="btn btn-sm btn-success"
                            to={`/${task.id}/edit`}
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => {
                                window.confirm(
                                    "Are you sure you wish to delete this item?"
                                ) && this.handleDelete(task.id);
                            }}
                            className="btn btn-sm btn-danger float-right"
                        >
                            Delete
                        </button>
                    </p>
                </div>
            </div>
        ));
    }
    // get all tasks from backend
    getTasks() {
        axios.get("/todos").then(response => {
            console.log("get posts", response.data);
            this.setState({
                tasks: [...response.data.tasks]
            });
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getTasks();
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        // make delete request to the backend
        axios.delete(`/todos/${id}`);
    }
    // handle update
    handleUpdate(id) {
        axios.put(`/todos/${id}`).then(response => {
            this.getTasks();
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
                                <hr />
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
