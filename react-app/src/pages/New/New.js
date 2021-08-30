import { useState } from 'react'

import './New.css'

export default function NewProject() {

  const [title, setTitle] = useState()
  const [category, setCategory] = useState('')
  const [imgUrl, setImgUrl] = useState()
  const [steps, setSteps] = useState([{}])
  const [count, setCount] = useState(1)

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

  }

  const handleImageUpdate = idx => e => {
    console.log('index ' + idx)
    console.log('target value: ' + e.target.value)

    let newArr = [...steps];
    newArr[idx]['image'] = e.target.value
    setSteps(newArr)
  }

  const handleTitleUpdate = idx => e => {
    console.log('index ' + idx)
    console.log('target value: ' + e.target.value)

    let newArr = [...steps];
    newArr[idx]['title'] = `Step ${idx}: ${e.target.value}`
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
  for (let i = 1; i < steps.length; i++) {
    let step = steps[i]
    stepsForm.push(
      <div key={i} className='step__form'>
        <input type='url' value={step.image} onChange={handleImageUpdate(i)} />
        <input type='text' placeholder={`Step ${i}:`} onChange={handleTitleUpdate(i)} />
        <textarea placeholder='instructions' required value={step.instruction} onChange={handleInstructionUpdate(i)} />
      </div>
    )
  }


  return (
    <div className='project__form__wrapper'>
      <form onSubmit={handleSubmit} className='project__form'>
        <div className='form__projectinfo'>
          <div className='form__imagecontainer'>
            <input type='url' onChange={e => setImgUrl(e.target.value)} placeholder='image url' required />
            {imgUrl && <img className='preview_image' alt='preview' src={imgUrl} />}
          </div>
          <div className='form__right'>
            <div>
              <input className='form__text' onChange={e => setTitle(e.target.value)} type='text' placeholder='project title' required />
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
          <div className='step__form'>
            <input type='url' />
            <input type='text' placeholder='Intro + Supplies' />
            <textarea placeholder='Describe your project' required />
          </div>
          {stepsForm}
        </div>
        <button type='button' onClick={increment}>Add Step</button>
        {steps.length > 1 && <button type='button' onClick={decrement}>Remove Step</button>}

      </form>
    </div>
  )
}
