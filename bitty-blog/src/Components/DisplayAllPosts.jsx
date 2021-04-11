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
        console.log(title)
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        console.log(content)
    };

    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPosts, {title, content, id}]);
        console.log(allPosts)
        setTitle("");
        setContent("");
        getTitle.current.value = "";
        getContent.current.value = "";
    };
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
    )
}
export default DisplayAllPosts