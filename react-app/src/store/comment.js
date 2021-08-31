const SET_COMMENT = 'comments/SET_COMMENT'
const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

const setComment = comment => ({
  type: SET_COMMENT,
  comment
})

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
})

export const getComments = projectId => async dispatch => {
  const res = await fetch(`/api/projects/${projectId}/comments`)

  if (res.ok) {
    const comments = await res.json();
    dispatch(setComment(comments))
    return comments
  }
}

export const createComment = payload => async dispatch => {
  const { projectId } = payload;

  console.log('before fetch to comments', payload)
  const res = await fetch(`/api/projects/${projectId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(setComment(data))
    return data
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occured. Please try again.']
  }
}

export const updateComment = payload => async dispatch => {
  const { id } = payload;

  const res = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(setComment(comment))
    return comment
  } else if (res.status < 500) {
    const comment = await res.json();
    if (comment.errors) {
      return comment.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const deleteComment = id => async dispatch => {
  const res = await fetch(`/api/comments/${id}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    await res.json();
    dispatch(removeComment(id))
  }
}

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case SET_COMMENT:
      action.comment.comments.forEach(com => {
        newState[com.id] = com
      })
      return newState
    case REMOVE_COMMENT:
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default commentsReducer
