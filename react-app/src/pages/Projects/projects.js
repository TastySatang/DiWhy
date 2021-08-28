import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProjects } from '../../store/project'

import './projects.css'

export default function ProjectsPage() {
  const dispatch = useDispatch()
  const projects = useSelector((state) => Object.values(state.projects))

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <div className='project-list-wrapper'>
        <div className='projects-list'>
          {projects.map((project, idx) => {
            return (
              <div className='project-wrapper' key={idx}>
                <Link to={`/projects/${project.id}`}>
                  <img className='project-thumbnail' src={project.imgUrl} alt={`${project.title}`} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
