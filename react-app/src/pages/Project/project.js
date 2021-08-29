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
  }, [dispatch, id])

  const date = (new Date(project?.createdAt).toString().slice(4, 15)).split(' ')
  const stringedDate = (`${date[0]}, ${date[1]} ${date[2]}`)

  return (
    <article className='article'>
      <header className='article__header'>
        <h1 className='header__title'>
          {project?.title}
        </h1>
        <div className='header__user'>
          <span> by {project?.user.username}</span>
          {project?.category && <span> in {project.category}</span>}
        </div>
        <div className='header__posted'>
          Published {stringedDate}
        </div>
      </header>
      <div className='content'>
<<<<<<< HEAD
        <section className='project__intro'>
=======
        <section className='project__intro step'>
>>>>>>> main
          <div className='project__thumb'>
            <img src={project?.imgUrl}></img>
          </div>
        </section>
<<<<<<< HEAD
=======
        <section>
          {project?.steps.map((step, idx) => {

            return (
              <div key='idx' className='intro__step'>
                <h1 className='section__title'>Step {idx}: {step.title}</h1>
                {project.image && (<img src={project.image} />)}
                <p className='section__instruction'>{step.instruction}</p>
              </div>
            )
          })}

        </section>
>>>>>>> main
      </div>
    </article>
  )
}
