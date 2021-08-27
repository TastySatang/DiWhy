const SET_PROJECT = 'projects/SET_PROJECT'
const REMOVE_PROJECT = 'projects/DELETE_PROJECT'

const setProject = project => ({
  type: SET_PROJECT,
  project,
})

const removeProject = id => ({
  type: REMOVE_PROJECT,
  id
})

export const getProjects = () => async dispatch => {
  const res = await fetch('/api/projects');

  if (res.ok) {
    const projects = await res.json();
    dispatch(setProject(projects))
    return projects
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const getProject = (id) => async dispatch => {
  const res = await fetch(`/api/projects/${id}`);

  if (res.ok) {
    const project = await res.json()
    dispatch(setProject(projects))
    return project
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const creatProject = project => async dispatch => {
  const res = await fetch('/api/projects', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  if (res.ok) {
    const project = await res.json()
    await dispatch(setProject)
    return project
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const updateProject = project => async dispatch => {
  const res = await fetch('/api/projects', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  if (res.ok) {
    const project = await res.json()
    await dispatch(setProject)
    return project
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const deleteProject = id => async dispatch => {
  const res = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
  })

  if (res.ok) {
    await dispatch(deleteProject(id));
    return res
  } else {
    return ['An error has occured. Please try again']
  }
}

const initialState = {};

const projectReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_PROJECT:
      action.project.projects.forEach(pro => {
        newState[pro.id] = pro
      })
      return newState

    case REMOVE_PROJECT:
      delete newState[action.id]
      return newState

    default:
      return state;
  }
}

export default projectReducer
