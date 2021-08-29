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
        <section className='project__intro step'>
          <div className='project__thumb'>
            <img className='project__image' src={project?.imgUrl}></img>
          </div>
        </section>
        <section>
          {project?.steps.map((step, idx) => {

            return (
              <div className='step__wrapper'>
                <div key='idx' className='intro__step'>
                  <h2 className='step__title'>Step {idx}: {step.title}</h2>
                  {step.image && (
                    <div className='step__image__wrapper'>
                      <img className='step__image project__image' src={step.image} />
                    </div>)}
                  <p className='step__body'>{step.instruction}</p>
                </div>
                <div className='step__divider'>
                </div>
              </div>
            )
          })}

        </section>
      </div>
    </article>
  )
}
