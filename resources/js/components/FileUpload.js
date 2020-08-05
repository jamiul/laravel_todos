import React, { Component } from "react";
import axios, { post } from "axios";

export default class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            image: "",
            photos: []
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderFiles = this.renderFiles.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        axios
            .post(
                "/fileupload",
                {
                    file: this.state.image
                },
                {
                    onUploadProgress: progressEvent => {
                        console.log(
                            "Upload Progress: ",
                            Math.round(
                                (progressEvent.loaded / progressEvent.total) *
                                    100
                            ) + "%"
                        );
                    }
                }
            )
            .then(response => {
                console.log("from handle submit", response);
                // set state
                this.setState({
                    photos: [response.data, ...this.state.photos]
                });
                // then clear the value of textarea
                this.setState({
                    image: ""
                });
            });
    }

    onChange(e) {
        let files = e.target.files || e.daTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }
    // render tasks
    renderFiles() {
        console.log("render files: ", this.state.photos);
        return this.state.photos.map(photo => (
            <div key={photo.id} className="media">
                <div className="media-body">
                <img key={photo.id} src={photo.file} height="150" width="150"/>
                </div>
            </div>
        ));
    }
    // get all tasks from backend
    getFiles() {
        axios.get("/api/fileupload").then(response => {
            console.log("get photos", response.data);
            this.setState({
                photos: [...response.data]
            });
        });
        console.log("bf: ", this.state.photos);
    }
    // lifecycle method
    componentWillMount() {
        this.getFiles();
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Upload Your File</div>

                            <div className="card-body">
                                <form onSubmit={this.onFormSubmit}>
                                    <h1>File Upload</h1>
                                    <input
                                        type="file"
                                        onChange={this.onChange}
                                    />
                                    <button type="submit">Upload</button>
                                </form>
                                <hr />
                                {this.renderFiles()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
