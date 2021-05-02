import React from 'react';

const Post = () => {
    return (
        <>
        <section>
            <h3>{props.tile}</h3>
            <p>{props.content}</p>
            <button>Edit</button>
            <button>Delete</button>
        </section>
        </>
    )
}

export default Post 