import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject } from '../../store/project'

import './project.css'

export default function ProjectPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const project = useSelector((state) => (state?.projects[id]))

  useEffect(() => {
    dispatch(getProject(id))
  }, [dispatch])

  return (
    <article >
      stuff
      {project.id}
    </article>
  )
}
