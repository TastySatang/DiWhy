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
    <div className='projects-content'>
      <div className='project-list-wrapper'>
        <div className='projects-list'>
          {projects.slice(0).reverse().map((project, idx) => {
            return (
              <div className='project-wrapper' key={idx}>
                <Link to={`/projects/${project.id}`}>
                  <img className='project-thumbnail' src={project.imgUrl} alt={`${project.title}`} />
                </Link>
                <div className='project-info'>
                  <strong><Link className='project-info-title' to={`/projects/${project.id}`}>{project.title}</Link></strong>
                  <span> by <span className='projectdot'>{project.user.username}</span></span>
                  {project.category && <span> in <span className='projectdot'>{project.category}</span></span>}
                </div>
                <div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
