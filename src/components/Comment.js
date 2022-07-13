import React from "react";

function Comment ({user, comment}) {
    return (
        <comment>
            <h4>{user}</h4>
            <h6>{comment}</h6>
        </comment>
    )
}

export default Comment