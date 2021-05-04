import React from "react";
const ModifyPost = (props) => {
    return (
        <>    
        <section className="create-post">
            <form>
                <h1>Modify Post</h1>        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <button onClick ={props.updatePost} className="edbutton">Update Post</button>
      </form>
      </section>
    </>
  );
};
export default ModifyPost;