import React from 'React';
import CreateNewPost from './CreateNewPost'
const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const savePostTitleToState = event => {
        setTitle(event.target.value);
        console.log(title)
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        console.log(content)
    };

    const savePost = () => {
        const id = Date.now();
        setAllPost([...allPost, {title, content, id}]);
        setTitle("");
        setContent("");
        console.log(allPost)
    };
    return (
        <>
        <CreateNewPost 
        savePostTitleToState = {savePostTitleToState}
        savePostContentToState = {savePostContentToState}
        getTitle={getTitle}
        getContent={getContent}
        />
        </>
    )
}
export default DisplayAllPosts