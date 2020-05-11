import React, { Component } from "react";
import ReactDOM from "react-dom";

const people = [
    {
        id: 1,
        name: "Alam",
        age: 23
    },
    {
        id: 2,
        name: "Rifat",
        age: 20
    },
    {
        id: 3,
        name: "Rubel",
        age: 33
    },
    {
        id: 4,
        name: "Sadman",
        age: 19
    },
    {
        id: 5,
        name: "Nahid",
        age: 35
    },
    {
        id: 6,
        name: "Nayeem",
        age: 22
    },
    {
        id: 7,
        name: "Rayeem",
        age: 14
    }
];

function searchingFor(term) {
    return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    };
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people,
            term: '',
        };
        this.searchHandaler = this.searchHandaler.bind(this);
    }

    // search handaler method
    searchHandaler(event) {
        this.setState({
            term: event.target.value
        });
    }
    render() {
        const {term, people} = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Search Student</div>

                            <div className="card-body">
                                <form>
                                    <input
                                        type="text"
                                        onChange={this.searchHandaler}
                                        value={term}
                                    />
                                </form>
                                {people
                                    .filter(searchingFor(term))
                                    .map(person => (
                                        <ul key={person.id}>
                                            <li>{person.name}</li>
                                            <li>{person.age}</li>
                                        </ul>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

if (document.getElementById("search")) {
    ReactDOM.render(<Search />, document.getElementById("search"));
}
