import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams, Link } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import { getComments } from '../../store/comment'
import { deleteProject, getProject, getProjects } from '../../store/project'

import './project.css'

export default function ProjectPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const project = useSelector((state) => (state?.projects[id]))
  const user = useSelector((state) => (state.session.user))
  const comments = useSelector((state) => Object.values(state.comments)
    .filter(comment => comment.projectId === Number.parseInt(id)))

  const date = (new Date(project?.createdAt).toString().slice(4, 15)).split(' ')
  const stringedDate = (`${date[0]}, ${date[1]} ${date[2]}`)

  useEffect(() => {
    dispatch(getProject(id))
    dispatch(getComments(id))
  }, [dispatch, id, user])

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])


  const handleDelete = async (e) => {
    e.preventDefault();

    const deleted = await dispatch(deleteProject(id))

    if (deleted) {
      history.push('/projects')
    }
  }

  return (
    <article className='article'>
      {user?.id === project?.user.id && (
        <div className='editable'>
          <Link to={`/projects/${project?.id}/edit`}>
            <button className='btn edit-btn' >Edit this post</button>
          </Link>
          <button className='btn dele-btn' onClick={handleDelete}>Un-publish</button>
        </div>
      )}
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
        <Comments id={id} comments={comments} />
      </div>
    </article>
  )
}
