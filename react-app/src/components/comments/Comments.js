import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createComment, deleteComment, getComments, updateComment } from '../../store/comment'

import './comments.css'

const Comments = ({ id, comments }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.user)
  const [editId, setEditId] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editComment, setEditComment] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    dispatch(getComments(id))
  }, [dispatch, id, editComment])

  const handleNewSubmit = async e => {
    e.preventDefault()

    let payload = {
      comment,
      userId: user.id,
      projectId: id,
    }

    setComment('')
    await dispatch(createComment(payload))
  }

  const handleUpdateSubmit = async e => {
    e.preventDefault()

    let payload = {
      id: editId,
      comment: editComment,
      userId: user.id,
      projectId: id,
    }

    setEditId(false)
    setShowEdit(false)
    await dispatch(updateComment(payload))
  }

  const handleDeleteSubmit = async e => {
    e.preventDefault()

    await dispatch(deleteComment(editId))
  }

  let commentForm;
  if (user) {
    commentForm = (
      <form className='comment__form' onSubmit={handleNewSubmit}>
        <div className='comment__creator'>
          <b>
            {user.username}
          </b>
        </div>
        <textarea maxLength='500' placeholder='Post a new Comment' value={comment} onChange={e => {
          setComment(e.target.value)
        }} />
        <p className='maxLength'>{comment.length}/{500}</p>
        <div className='comment__utils'>
          <p>We have a <b>be nice</b> policy <br></br> Please be positive and constructive</p>
          <button className='comment__button'>Post</button>
        </div>
      </form>
    )
  } else {
    commentForm = (
      <form className='comment__form' onSubmit={handleNewSubmit}>
        <div className='comment__creator'>
          <b>
            Not Logged in!
          </b>
        </div>
        <div className='faketextarea' >
          <Link className='comment__login' to='/login'>
            <button className='comment__loginbtn'>
              <b>Log in to post Comments</b>
            </button>
          </Link>
        </div>
        <div className='comment__utils'>
          <p>We have a <b>be nice</b> policy <br></br> Please be positive and constructive</p>
          <button className='comment__button disabled' disabled>Post</button>
        </div>
      </form>
    )
  }



  return (
    <div className='comment__section'>
      <div className='section__wrapper'>
        {commentForm}

        <h2>{comments.length} Comments</h2>
        {comments?.slice(0).reverse().map((comment, idx) => {
          const date = (new Date(comment?.createdAt).toString().slice(4, 15)).split(' ')
          const stringedDate = (`${date[0]}, ${date[1]} ${date[2]}`)

          let content;
          if (showEdit && comment.id === editId) {
            content = (
              <div className='content__comment'>
                <div className='comment__creator'>
                  <b>
                    {comment.userId.username}
                  </b>
                  <span className='comment__date'>
                    {stringedDate}
                  </span>
                </div>
                <div className='comment__updater'>
                  <form onSubmit={handleUpdateSubmit}>
                    <textarea wrap='soft'
                      maxLength='500'
                      value={editComment}
                      required
                      onChange={e => {
                        console.log(e.target.value)
                        setEditComment(e.target.value)
                      }} />
                    <p className='maxLength'>{editComment.length}/{500}</p>

                    <div className='buttonsHolder'>
                      <button className='comment__button ' onClick={() => setShowEdit(false)}>Cancel</button>
                      <div>
                        {editComment && <button className='comment__button post' type='submit'>Post</button>}

                        <button className='comment__button delete' onClick={handleDeleteSubmit}>Delete</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )
          } else {
            content = (
              <div className='content__comment'>
                <div className='comment__creator'>
                  <b>
                    {comment.userId.username}
                  </b>
                  <span className='comment__date'>
                    {stringedDate}
                  </span>
                </div>

                <div className='comment__updater'>
                  <p>
                    {comment.comment}
                  </p>
                </div>
                {comment.userId.id === user?.id && (
                  <button className='comment__button'
                    onClick={() => {
                      showEdit === false ? setShowEdit(true) : setShowEdit(false)
                      setEditId(comment.id)
                      setEditComment(comment.comment)
                    }}>Edit</button>
                )}
              </div>
            )
          }

          return (
            <div className='comment__wrapper' key={idx}>
              {content}
            </div>
          )
        })}

      </div>

    </div>
  )

}

export default Comments
