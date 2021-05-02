import React from 'React';
import CreateNewPost from './CreateNewPost'
const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setisCreateNewPost] = useState(false);
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
    const toggleCreateNewPost =()=>{
        setIsCreateNewPost(!isCreateNewPost)
    }
    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost)
    }
    const editPost = id => {
        setEditPostId(id);
        console.log(id)
        toggleModifyPostComponent ();
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
        setAllPost([...allPosts, {title, content }]);
        console.log(allPosts);
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
return (
    <>
    <h2>ALl Posts</h2>
    {!allPosts.length ? (
        <div>
          <h3>There is nothing to see here!</h3>
        </div>
      ) : (
        allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
            />
          );
        })
      )}
    <br/>
    <br/>
    <button onClock={toggleCreateNewPost}>Create New</button>
    </>
)
};
export default DisplayAllPosts