import React, { useState } from 'react'
import CustomLink from '../../../components/CustomLink'
import FormHeading from '../../../components/FormHeading'
import './AddPackage.css'
import { createPackage } from '../../../actions/packageActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddPackage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddPackage = async (e) => {
    e.preventDefault()

    dispatch(createPackage(data, navigate))
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
      <CustomLink title={'Back to Manage Package'} />
      <FormHeading>Add New Package</FormHeading>
      <form onSubmit={handleAddPackage}>
        <input
          type='text'
          name='title'
          placeholder='Package Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          name='detail'
          placeholder='Package Details'
          value={data.details}
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />
        <input
          type='number'
          name='originalPrice'
          placeholder='Original Price'
          value={data.originalPrice}
          onChange={(e) => setData({ ...data, originalPrice: e.target.value })}
        />
        <input
          type='number'
          name='parameters'
          placeholder='Parameters'
          value={data.parameters}
          onChange={(e) => setData({ ...data, parameters: e.target.value })}
        />
        <input
          type='number'
          name='discountPrice'
          placeholder='Discount Price'
          value={data.discountPrice}
          onChange={(e) => setData({ ...data, discountPrice: e.target.value })}
        />
        <button type='submit' className='add_package_btn'>
          Add Package
        </button>
      </form>
    </div>
  )
}

export default AddPackage
