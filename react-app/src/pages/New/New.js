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

  return (
    <div className='project__form__wrapper'>
      <form className='project__form'>
        <div>
        </div>
      </form>
    </div>
  )
}
