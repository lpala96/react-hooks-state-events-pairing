
import React, { useState} from "react";
import video from "../data/video";


function Details({title, views, createdAt, upvotes, downvotes}) {
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function handleUpClick () {
        setUpVotes(upVotes => upVotes + 1)
    
    }

    function handleDownClick () {
        setDownVotes(downVotes => downVotes + 1)

    }

    return (
    <div>
        <h1>{title}</h1>
        <p>{views} Views | {createdAt} Created At</p>
        <button onClick={handleUpClick}>{upVotes}👍</button>
        <button onClick={handleDownClick}>{downVotes}👎</button>
        <br></br>
        <br></br>
        <button>Hide Comments</button>
    </div>
    )
}

export default Details