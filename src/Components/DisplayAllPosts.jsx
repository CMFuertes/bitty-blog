import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost";
import { fadeInDown } from 'react-animations'; 
import Radium, { StyleRoot } from 'radium'; 

const styles = {
  fadeInDown: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}


const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    const getTitle = useRef();
    const getContent = useRef();

    const savePostTitleToState = event => {
        setTitle(event.target.value);
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
    };
    const toggleCreateNewPost = () =>{
        setIsCreateNewPost(!isCreateNewPost)
    }
    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost)
    }
    const editPost = id => {
        setEditPostId(id);
        console.log(id)
        toggleModifyPostComponent();
    };
    const deletePost = id => {
        const modifiedPost = allPosts.filter(eachPost => {
          return eachPost.id !== id;
        });
        setAllPosts(modifiedPost);
      };
    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map(eachPost => {
          if (eachPost.id === editPostId) {
            console.log([eachPost.id, editPostId] )
            return {
              ...eachPost,
              title: title || eachPost.title,
              content: content || eachPost.content
            };
          }
          console.log(eachPost)
          return eachPost;
        });
        setAllPosts(updatedPost);
        toggleModifyPostComponent();
      };
    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, {title, content, id }]);
        console.log(allPosts);
        setTitle("");
        setContent("");
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost();
    };
    if(isCreateNewPost){
        return (
        <>
        <CreateNewPost 
        savePostTitleToState = {savePostTitleToState}
        savePostContentToState = {savePostContentToState}
        getTitle={getTitle}
        getContent={getContent}
        savePost={savePost}
        />
        </>
    );
}
else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    );
  }
return (
    <>
    <h2>Bitty Blog</h2>
    {!allPosts.length ? (
        <div>
          <StyleRoot><h1 style={styles.fadeInDown}>No Posts Found.</h1></StyleRoot>
          <h3>Please click "create new" to start a new post.</h3>
        </div>
      ) : (
        allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
    <br/>
    <br/>
    <section className="button-wrapper">
    <button onClick={toggleCreateNewPost} className="button">Create New</button>
    </section>
    </>
)
};
export default DisplayAllPosts