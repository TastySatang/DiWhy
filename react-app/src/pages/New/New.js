import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { creatProject, createStep } from '../../store/project'

import './New.css'

export default function NewProject() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [steps, setSteps] = useState([{ 'title': '', 'image': '', 'index': 0 }])

  const increment = () => {
    let newArr = [...steps]
    newArr.push({})
    console.log(newArr)
    setSteps(newArr)
  }

  const decrement = () => {
    let newArr = [...steps]
    newArr.pop()
    console.log(newArr)
    setSteps(newArr)
  }

  function handleValidation() {
    let errors = [];
    let formIsValid = true;

    // steps title
    steps.forEach((step, index) => {
      if (!step.title) {
        formIsValid = false;
        errors.push(`Step ${index} is missing a title`)
      }

      if (!step.instruction) {
        formIsValid = false;
        errors.push(`Step ${index} is missing instructions`)
      }
    })

    setValidationErrors(errors);
    return formIsValid
  }

  const handleSubmit = async e => {
    e.preventDefault();


    if (handleValidation()) {
      const projectPayload = {
        title,
        category,
        imgUrl,
        userId: user.id,
      }

      const project = await dispatch(creatProject(projectPayload))
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

      history.push(`/projects/${projectId}`)
    } else {
      console.log(validationErrors);
    }
  }

  const handleImageUpdate = idx => e => {
    let newArr = [...steps];
    newArr[idx]['image'] = `${e.target.value}`
    setSteps(newArr)
  }

  const handleTitleUpdate = idx => e => {
    console.log('index ' + idx)
    console.log('target value: ' + e.target.value)

    let newArr = [...steps];
    if (idx > 0) {
      newArr[idx]['title'] = `Step ${idx}: ${e.target.value}`
    } else if (idx === 0) {
      newArr[idx]['title'] = `Intro + Supplies: ${e.target.value}`
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
        <div className='step__form__left'>
          <input type='url' placeholder='Img URL #optional' onChange={handleImageUpdate(i)} />
          {step.image && <img src={step.image} alt='stepimg' />}
        </div>
        <div className='step__form__right'>
          <input type='text' placeholder={`Step ${i}:`} onChange={handleTitleUpdate(i)} />
          <textarea placeholder='instructions' required value={step?.instruction} onChange={handleInstructionUpdate(i)} />
        </div>
      </div>
    )
  }


  return (
    <div className='project__form__wrapper'>
      <form onSubmit={handleSubmit} className='project__form'>
        <div className='form__projectinfo'>
          <div className='projectinfo__wrapper'>
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

        </div>
        <div className='steps__container'>
          {steps &&
            <div className='step__form'>
              <div className='step__form__left'>
                <input placeholder='Img URL #optional' type='url' value={steps[0]?.image} onChange={handleImageUpdate(0)} />
                {steps[0]?.image && <img src={steps[0]?.image} alt='stepimg' />}
              </div>
              <div className='step__form__right'>
                <input type='text' placeholder='Intro + Supplies' onChange={handleTitleUpdate(0)} required />
                <textarea placeholder='Describe your project' value={steps[0]?.instruction} onChange={handleInstructionUpdate(0)} required />
              </div>

            </div>}
          {stepsForm}
        </div>
        <div className='button__holder'>
          <button type='button' className='steps__button increment' onClick={increment}>Add Step</button>
          {steps?.length > 1 && <button type='button' className='steps__button decrement' onClick={decrement}>Remove Step</button>}
        </div>

      </form>
    </div>
  )
}
