import React, { useState, useEffect } from 'react';

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            const data = await responce.json();
            setPosts(data);
            console.log(data);
        };
        fetchData();
    }, [userId]);
    console.log(posts);
    return (
        <div>
            <h1>User Data</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default UserPosts;
