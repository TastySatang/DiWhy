import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { deleteProject, getProject } from '../../store/project'

import './project.css'

export default function ProjectPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const project = useSelector((state) => (state?.projects[id]))

  const date = (new Date(project?.createdAt).toString().slice(4, 15)).split(' ')
  const stringedDate = (`${date[0]}, ${date[1]} ${date[2]}`)

  useEffect(() => {
    dispatch(getProject(id))
  }, [dispatch, id])


  const handleDelete = async (e) => {
    e.preventDefault();

    const deleted = await dispatch(deleteProject(id))

    if (deleted) {
      history.push('/projects')
    }
  }

  return (
    <article className='article'>
      <button onClick={handleDelete}>DELETE</button>
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
            <img className='project__image' src={project?.imgUrl} alt='projectimage'></img>
          </div>
        </section>
        <section>
          {project?.steps.map((step, idx) => {

            return (
              <div key={idx} className='step__wrapper'>
                <div className='intro__step'>
                  <h2 className='step__title'>{step.title}</h2>
                  {step.image && (
                    <div className='step__image__wrapper'>
                      <img className='step__image project__image' src={step.image} alt='projectimage' />
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
