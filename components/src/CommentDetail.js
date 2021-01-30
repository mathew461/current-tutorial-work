import React from 'react';

const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.animals()} />
        </a>     
        <div className="content"> 
            <a href="/" className="author">
                Sam
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">Nice Blog Post!</div> 
        </div>
        </div>
    );
};