import React from "react";
const CreateNewPost = props => {
    return (
        <>
    <form>
            <h1>Create New Post</h1>
            <input type ="text" 
            onChange={props.savePostTitleToState}
            placeHolder="title" 
            size="39" 
            required>

            </input>
            <br />
            <br />
            <textarea 
            onChange={props.savePostTitleToState}
            placeHolder="contents" 
            rows="8" 
            cols="41" required>
            </textarea>
            <br />
            <br />
            <button>Save Post</button>

    </form>
    </>
    );
};

export default CreateNewPost;