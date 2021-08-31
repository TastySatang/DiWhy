import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, deleteComment, getComments, updateComment } from '../../store/comment'


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
      project_id: id,
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
          <textarea placeholder='Post a new Comment' value={comment} onChange={e => setComment(e.target.value)} />
          <button className='comment__button' >Post</button>
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
      {commentForm}

      {comments?.slice(0).reverse().map((comment, idx) => {
        let content;
        if (showEdit && comment.id === editId) {
          content = (
            <div>
              <form >
                <textarea wrap='soft' value={editComment} onChange={e => setEditComment(e.target.value)} />
              </form>
            </div>
          )
        } else {
          content = (
            <div>
              <div>
                {comment.comment}
              </div>
            </div>
          )
        }

        return (
          <div key={idx}>
            {content}
          </div>
        )
      })}
    </div>
  )

}

export default Comments
