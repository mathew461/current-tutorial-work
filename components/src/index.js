import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                commentText="What a wonderful time it is." 
                displayPic={faker.image.image()}/>
        </ApprovalCard>
        <ApprovalCard>        
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 2:11PM" 
                commentText="I like cheese." 
                displayPic={faker.image.image()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Sandy" 
                timeAgo="Yesterday at 5:02PM" 
                commentText="Nice Blog that buddy." 
                displayPic={faker.image.animals()}/>
        </ApprovalCard>
      </div>  
    );
};

if (module.hot) {
    module.hot.accept();
  }    


ReactDOM.render(<App />, document.querySelector('#root'));





