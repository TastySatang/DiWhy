import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { creatProject } from '../../store/project'

import './New.css'

export default function NewProject() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState()
  const [category, setCategory] = useState('')
  const [imgUrl, setImgUrl] = useState()
  const [count, setCount] = useState(0)

  const handleSubmit = async e => {
    e.preventDefault();

    const projectPayload = {
      title,
      category,
      imgUrl
    }

    const stepPayload = {

    }
  }

  let steps = [];
  for (let i = 0; i < count; i++) {
    steps.push(
      <div>

      </div>
    )
  }


  return (
    <div className='project__form__wrapper'>
      <form onSubmit={handleSubmit} className='project__form'>
        <div className='form__projectinfo'>
          <div className='form__imagecontainer'>
            <input type='text' onChange={e => setImgUrl(e.target.value)} placeholder='image url' />
            {imgUrl && <img className='preview_image' alt='preview' src={imgUrl} />}
          </div>
          <div class='form__right'>
            <div>
              <input className='form__text' type='text' placeholder='project title' />
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

        </div>
      </form>
    </div>
  )
}
