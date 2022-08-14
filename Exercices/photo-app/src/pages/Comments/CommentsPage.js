import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(({ data }) => {
                setComments(data);
            })
    }, [])

    const renderComments = () => {
        return comments.map((data, index) => {
            return <div class="comment">
                <div class="avatar">
                    <img alt="" src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"></img>
                </div>
                <div class="content">
                    <h3 class="author">{data.email}</h3>
                    <div class="text">
                        {data.body}
                    </div>
                    <div class="actions">
                        <a href='#' class="reply">Reply</a>
                    </div>
                </div>
            </div>
        })
    }
    if (comments.length === 0) return <div>Loading...</div>
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", padding: '25px' }} class="ui comments">
            {renderComments()}
        </div>
    )
}

export default CommentsPage;