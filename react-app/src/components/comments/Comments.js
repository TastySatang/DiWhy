import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, deleteComment, getComments, updateComment } from '../../store/comment'


const Comments = ({ id, comments }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.user)
  const [editId, setEditId] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editComment, setEditComment] = useState('')
  const [comment, setComment] = useState = ('')

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

  return (
    <div>
      <form className='comment__form' onSubmit={handleNewSubmit}>
        <textarea placeholder='Post a new Comment' value={comment} onChange={e => setComment(e.target.value)} />
        <button className='comment__button' >Post</button>
      </form>
    </div>
  )

}

