import React from 'React';
import CreateNewPost from './CreateNewPost'
const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);

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

    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPosts, {title, content, id}]);
        console.log(allPosts);
        getTitle.current.value = "";
        getContent.current.value = "";
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
    <br/>
    <br/>
    <button onClock={toggleCreateNewPost}>Create New</button>
    </>
)
};
export default DisplayAllPosts