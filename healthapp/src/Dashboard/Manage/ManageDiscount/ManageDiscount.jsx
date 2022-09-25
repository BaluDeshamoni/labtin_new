import React, { useEffect } from 'react'
import '../../../App.css'
import '../ManagePackage/ManagePackage.css'
import { useNavigate } from 'react-router-dom'
import DiscountRow from './DiscountRow'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscounts } from '../../../actions/packageActions'

const ManageDiscounts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { discountList } = useSelector((state) => state.discounts)
  useEffect(() => {
    dispatch(getDiscounts())
  }, [dispatch])

  return (
    <div className='manage-package'>
      <p className='btn-container'>
        <button
          onClick={() => navigate('/dashboard/addDiscount')}
          className='add-btn'
        >
          + Add Discount
        </button>
      </p>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Promo code</th>
              <th>Discount Percentage</th>
            </tr>
          </thead>
          <tbody>
            {discountList &&
              discountList.map((discount) => (
                <DiscountRow discount={discount} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageDiscounts
