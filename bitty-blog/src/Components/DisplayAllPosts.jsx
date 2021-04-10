import React from 'React';
import CreateNewPost from './CreateNewPost'
const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const savePostTitletoState = event => {
        setTitle(event.target.value);
        console.log(title)
    };
    const savePostConenttoState = event => {
        setContent(event.target.value);
        console.log(content)
    };
    return (
        <>
        <CreateNewPost 
        savePostTitletoState = {savePostConenttoState}
        savePostConenttoState = {savePostConenttoState}
        />
        </>
    )
}
export default DisplayAllPosts