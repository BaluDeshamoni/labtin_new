import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createRadTest } from '../../../actions/radTestActions'
import CustomLink from '../../../components/CustomLink'
import FormHeading from '../../../components/FormHeading'
import './AddRadTest.css'

const AddRadTest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddRadTest = async (e) => {
    e.preventDefault()

    dispatch(createRadTest(data, navigate))
  }
  const [data, setData] = useState({
    title: '',
    details: '',
    originalPrice: '',
    parameters: '',
    discountPrice: '',
  })
  return (
    <div className='add_package'>
      <CustomLink title={'Back to Manage Radiology Tests'} />
      <FormHeading>Add New Radiology Test</FormHeading>
      <form onSubmit={handleAddRadTest}>
        <input
          type='text'
          name='title'
          placeholder='test Title'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          name='detail'
          placeholder='test Details'
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />
        <input
          type='number'
          name='originalPrice'
          placeholder='Original Price'
          onChange={(e) => setData({ ...data, originalPrice: e.target.value })}
        />
        <input
          type='number'
          name='parameters'
          placeholder='Parameters'
          onChange={(e) => setData({ ...data, parameters: e.target.value })}
        />
        <input
          type='number'
          name='discountPrice'
          placeholder='Discount Price'
          onChange={(e) => setData({ ...data, discountPrice: e.target.value })}
        />
        <button type='submit' className='add_package_btn'>
          Add Radiology Test
        </button>
      </form>
    </div>
  )
}

export default AddRadTest
