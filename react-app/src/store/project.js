const SET_PROJECT = 'projects/SET_PROJECT'
const SET_PROJECTS = 'prjects/SET_PROJECTS'
const REMOVE_PROJECT = 'projects/DELETE_PROJECT'

const setProject = project => ({
  type: SET_PROJECT,
  project,
})

const setProjects = project => ({
  type: SET_PROJECTS,
  project
})

const removeProject = id => ({
  type: REMOVE_PROJECT,
  id
})

export const getProjects = () => async dispatch => {
  const res = await fetch('/api/projects/');

  if (res.ok) {
    const projects = await res.json();
    dispatch(setProject(projects))
    return projects
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const getProject = (id) => async dispatch => {
  const res = await fetch(`/api/projects/${id}/`);

  if (res.ok) {
    const project = await res.json()
    dispatch(setProjects(project))
    return project
  } else {
    return ['An error has occurred. Please try again.']
  }
}

export const creatProject = project => async dispatch => {
  const res = await fetch('/api/projects/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  if (res.ok) {
    const project = await res.json()
    await dispatch(setProjects(project))
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
  const res = await fetch(`/api/projects/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  if (res.ok) {
    const project = await res.json()
    await dispatch(setProjects(project))
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
    await dispatch(removeProject(id));
    return res
  } else {
    return ['An error has occured. Please try again']
  }
}

export const createStep = step => async dispatch => {
  const { index, title, instruction, image, projectId } = step

  console.log('inside thunk action', index, title, instruction, image, projectId)
  const res = await fetch(`/api/projects/${projectId}/steps`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      index, title, instruction, image, projectId
    })
  })

  if (res.ok) {
    const data = await res.json()
    return data
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error has occurred. Please try again.']
  }
}


const initialState = {};

const projectReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_PROJECT:
      newState = { ...state };
      action.project.projects.forEach(pro => {
        newState[pro.id] = pro
      })
      return newState
    case SET_PROJECTS:
      newState = {};
      action.project.projects.forEach(pro => {
        newState[pro.id] = pro
      })
      return newState
    case REMOVE_PROJECT:
      newState = { ...state }
      delete newState[action.id]
      return newState

    default:
      return state;
  }
}

export default projectReducer
