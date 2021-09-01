import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <div>
        <form className='comment__form' onSubmit={handleNewSubmit}>
          <div className='comment__creator'>
            {user.username}
          </div>
          <textarea placeholder='Post a new Comment' value={comment} onChange={e => {
            console.log(e.target.value)
            setComment(e.target.value)
          }} />
          <button className='comment__button'>Post</button>
        </form>
      </div>
    )
  } else {
    commentForm = (
      <div>
        no user found
      </div>
    )
  }



  return (
    <div className='comment__section'>
      <div className='section__wrapper'>
        {commentForm}

        {comments?.slice(0).reverse().map((comment, idx) => {
          const date = (new Date(comment?.createdAt).toString().slice(4, 15)).split(' ')
          const stringedDate = (`${date[0]}, ${date[1]} ${date[2]}`)

          let content;
          if (showEdit && comment.id === editId) {
            content = (
              <div>
                <div className='comment__creator'>
                  {comment.userId.username}
                  {stringedDate}
                </div>
                <div className='comment__updater'>
                  <form onSubmit={handleUpdateSubmit}>
                    <textarea wrap='soft' value={editComment} required onChange={e => {
                      console.log(e.target.value)
                      setEditComment(e.target.value)
                    }} />
                    <div className='buttonsHolder'>
                      <button type='submit'>Post</button>
                      <button className='button' onClick={() => setShowEdit(false)}>Cancel</button>
                      <button className='button delete' onClick={handleDeleteSubmit}>Delete</button>
                    </div>
                  </form>
                </div>
              </div>
            )
          } else {
            content = (
              <div className='content__comment'>
                <div className='comment__creator'>
                  {comment.userId.username}
                  {stringedDate}
                </div>

                <div className='comment__updater'>
                  {comment.comment}
                </div>
                {comment.userId.id === user?.id && (
                  <button onClick={() => {
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
