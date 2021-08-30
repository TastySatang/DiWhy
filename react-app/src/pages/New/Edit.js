import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createStep, getProject, updateProject } from '../../store/project'

import './New.css'

export default function EditProject() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const project = useSelector(state => state.projects[id])
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState(project?.title)
  const [category, setCategory] = useState(project?.category)
  const [imgUrl, setImgUrl] = useState(project?.imgUrl)
  const [steps, setSteps] = useState([{ 'title': '', 'image': '', 'index': 0 }])

  useEffect(() => {
    (async () => {
      await dispatch(getProject(id))
    })();
  }, [dispatch, id])

  useEffect(() => {
    setTitle(project?.title || '')
    setCategory(project?.category || '')
    setImgUrl(project?.imgUrl || '')
    setSteps(project?.steps || [{ 'title': '', 'image': '', 'index': 0 }])
    console.log('steps', steps)
  }, [project, project.steps])

  const increment = () => {
    let newArr = [...steps]
    newArr.push({})
    setSteps(newArr)
    console.log(steps)
  }

  const decrement = () => {
    let newArr = [...steps]
    newArr.pop()
    setSteps(newArr)
    console.log(steps)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const projectPayload = {
      id,
      title,
      category,
      imgUrl,
      userId: user.id,
    }

    const project = await dispatch(updateProject(projectPayload))
    const projectId = project.projects[0].id

    console.log('inside handle submit ', steps, 'projectid', projectId)
    steps.forEach(async (step, idx) => {
      const stepPayload = {
        index: idx,
        title: step.title,
        instruction: step.instruction,
        image: step.image,
        projectId,
        project,
      }

      await dispatch(createStep(stepPayload))
    })

    if (project) history.push(`/projects/${id}`)
  }

  const handleImageUpdate = idx => e => {
    let newArr = [...steps];
    console.log(newArr)
    newArr[idx]['image'] = `${e.target.value}`
    setSteps(newArr)
  }

  const handleTitleUpdate = idx => e => {
    console.log('index ' + idx)
    console.log('target value: ' + e.target.value)

    let newArr = [...steps];
    if (idx > 0) {
      newArr[idx]['title'] = `${e.target.value}`
    } else if (idx === 0) {
      newArr[idx]['title'] = `${e.target.value}`
    }
    setSteps(newArr)
  }

  const handleInstructionUpdate = idx => e => {
    console.log('index ' + idx)
    console.log('target value: ' + e.target.value)

    let newArr = [...steps];
    newArr[idx]['instruction'] = e.target.value
    setSteps(newArr)
  }


  let stepsForm = [];
  for (let i = 1; i < steps?.length; i++) {
    let step = steps[i]
    stepsForm.push(
      <div key={i} className='step__form'>
        <input type='url' onChange={handleImageUpdate(i)} />
        {step.image && <img src={step.image} alt='stepimg' />}
        <input type='text' placeholder={`Step ${i}:`} value={step?.title} onChange={handleTitleUpdate(i)} />
        <textarea placeholder='instructions' required value={step?.instruction} onChange={handleInstructionUpdate(i)} />
      </div>
    )
  }


  return (
    <div className='project__form__wrapper'>
      <form onSubmit={handleSubmit} className='project__form'>
        <div className='form__projectinfo'>
          <div className='form__imagecontainer'>
            <input type='url' onChange={e => setImgUrl(e.target.value)} value={imgUrl} placeholder='image url' required />
            {imgUrl && <img className='preview_image' alt='preview' src={imgUrl} />}
          </div>
          <div className='form__right'>
            <div>
              <input className='form__text' value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='project title' required />
            </div>
            <div className='form__toolbar'>
              <select className='tool' value={category} onChange={e => setCategory(e.target.value)} placeholder='Category'>
                <option value='Life Hacks'>Life Hacks</option>
                <option value='Food'>Food</option>
                <option value='Fashion'>Fashion</option>
                <option value=''>Others</option>
              </select>
              <button type='submit' className='form__btn'>Publish</button>
            </div>
          </div>
        </div>
        <div className='steps__container'>
          {steps &&
            <div className='step__form'>
              <input type='url' value={steps[0]?.image} onChange={handleImageUpdate(0)} />
              {steps[0]?.image && <img src={steps[0]?.image} alt='stepimg' />}
              <input type='text' placeholder='Intro + Supplies' value={steps[0]?.title} onChange={handleTitleUpdate(0)} />
              <textarea placeholder='Describe your project' value={steps[0]?.instruction} onChange={handleInstructionUpdate(0)} required />
            </div>}
          {stepsForm}
        </div>
        <button type='button' onClick={increment}>Add Step</button>
        {steps?.length > 1 && <button type='button' onClick={decrement}>Remove Step</button>}

      </form>
    </div>
  )
}
