import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div class="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
            <div className="content">
                <a href="/" className="author">
                    Jake Hollcroft
                </a>
                <div className="metadata">
                    <span className="data">
                        Today at 5:02AM
                    </span>
                </div>
                <div className="text">
                    This is awesome!
                </div>
            </div>
            </div>
    );
};

export default CommentDetail;