import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createDiscount } from '../../../actions/packageActions'
import CustomLink from '../../../components/CustomLink'
import FormHeading from '../../../components/FormHeading'
import './AddDiscount.css'

const AddDiscount = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddDiscount = async (e) => {
    e.preventDefault()

    dispatch(createDiscount(data, navigate))
  }
  const [data, setData] = React.useState({
    name: '',
    promoCode: '',
    discountPercentage: 0,
  })
  return (
    <div className='add_package'>
      <CustomLink title={'Back to Manage Discount'} />
      <FormHeading>Add New Discount</FormHeading>
      <form onSubmit={handleAddDiscount}>
        <input
          type='text'
          name='title'
          placeholder='Discount Name'
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <textarea
          name='promoCode'
          placeholder='Promo Code'
          onChange={(e) => setData({ ...data, promoCode: e.target.value })}
        />
        <input
          type='number'
          name='discountPercentage'
          placeholder='Discount Percentage'
          onChange={(e) =>
            setData({ ...data, discountPercentage: e.target.value })
          }
        />

        <button type='submit' className='add_package_btn'>
          Add Discount
        </button>
      </form>
    </div>
  )
}

export default AddDiscount
