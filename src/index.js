import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sarah Anne" text="This worked for me too!" data="5:13AM" />
            <CommentDetail author="Jakers" text="I can't believe it!!" data="6:27AM"/>
            <CommentDetail author="Miguel Angel" text="I knew it was this all along. pfft" data="8:19AM" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))