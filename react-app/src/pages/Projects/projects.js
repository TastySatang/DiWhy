import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProjects } from '../../store/project'

export default function ProjectsPage() {
  const dispatch = useDispatch()
  const projects = useSelector((state) => Object.values(state.projects))

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      {projects.map((project, idx) => {
        return (
          <div key={idx}>
            <Link to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </div>
        )
      })}
    </>
  )
}
