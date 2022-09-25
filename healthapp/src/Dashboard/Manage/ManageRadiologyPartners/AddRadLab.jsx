import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createRadLab } from '../../../actions/labActions'
import CustomLink from '../../../components/CustomLink'
import FormHeading from '../../../components/FormHeading'
import '../ManagePackage/AddPackage.css'

const AddRadLab = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddRadLab = async (e) => {
    e.preventDefault()

    dispatch(createRadLab(data, navigate))
  }
  const [data, setData] = useState({
    title: '',
    logo: '',
    accrediation: '',
    time: '',
    price: '',
    state: '',
  })
  return (
    <div className='add_package'>
      <CustomLink title={'Back to Manage Radiology Lab'} />
      <FormHeading>Add New Radiology Lab</FormHeading>
      <form onSubmit={handleAddRadLab}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          name='logo'
          placeholder='logo'
          onChange={(e) => setData({ ...data, logo: e.target.value })}
        />
        <input
          type='text'
          name='accrediation'
          placeholder='Accrediation'
          onChange={(e) => setData({ ...data, accrediation: e.target.value })}
        />
        <input
          type='text'
          name='time'
          placeholder='time'
          onChange={(e) => setData({ ...data, time: e.target.value })}
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <input
          type='text'
          name='state'
          placeholder='State'
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />
        <button type='submit' className='add_package_btn'>
          Add Radiology Lab{' '}
        </button>
      </form>
    </div>
  )
}

export default AddRadLab
