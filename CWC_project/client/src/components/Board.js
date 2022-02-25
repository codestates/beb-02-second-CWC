import './Board.css';
import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';

function Board() {
  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
    username: '',
  })

  const [따봉, 따봉변경] = useState(0);
  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setPostContent({...postContent,[name]: value})
    console.log(postContent);
  };


  useEffect(()=> {
    Axios.get('http://localhost:8000/api/get').then((response)=>{
      // console.log(response);
      setViewContent(response.data);
    })
  },[viewContent])

  const submitPost = ()=>{
    Axios.post('http://localhost:8000/api/insert', {
      title: postContent.title,
      content: postContent.content,
      username : postContent.username,
    }).then(()=>{
      alert('Completed!😄👍');
    })
  };


  return (
    <div className="Board">
      <h1 className='logo-name'>CWC's Community Guidelines
      <p className='logo-paragrph'>When you use CWC, you join a community of people from all over the world. The guidelines below help keep CWC fun and enjoyable for everyone.
        If you see content that you think violates these guidelines, use the flagging feature to submit it for review by our CWC staff.</p></h1>
        <div className='welcome-page'>
          <h2 className='discussion-page'>👋 Welcome to CWC Discussion Page!</h2>
        </div>
      
      <div className='post-container'>
        {viewContent.map(element =>
          <div className='post'>
            <h2 className='username'>김기동</h2>
            {/* <h2 className='username'>{element.username}</h2> */}
            <h2 className='title'>{element.title}</h2>
            {/* <h3 className='like'>{따봉} likes</h3> */}
                <hr></hr>
            <div className='content'>{ReactHtmlParser(element.content)}</div>
            {/* <div className='thumbsup-reply-button'>
              <button className='thumbsup'>💡</button>
              <button className='thumbsup' onClick={() => {따봉변경(따봉 + 1)}}>👍</button>
            </div> */}
          </div>
          )}
      </div>

      <div className='form-wrapper'>
        <div className='title-container'>
          <p>Write</p>
          <input className="username-input" 
                  type='text' 
                  placeholder='Username' 
                  onChange={getValue}
                  name='username'
                  />

          <input className="title-input" 
                  type='text' 
                  placeholder='Title' 
                  onChange={getValue}
                  name='title'
                  />

          <textarea className="content-input" 
                  type='text' 
                  placeholder='Content' 
                  onChange={getValue}
                  name='content'
                  />
        </div>
          
        {/* <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setPostContent({...postContent, content: data})
            console.log(postContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />*/}
      </div>

      <button className="button"
      onClick={submitPost}
        // () => {
        // setViewContent(viewContent.concat({...postContent}))};
    >Post</button>
    </div>
  );
}

export default Board;
