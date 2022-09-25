import React, { useEffect } from 'react'
import '../../../App.css'
import '../../Manage/ManagePackage/ManagePackage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRadLabs } from '../../../actions/labActions'

const ManageRadPartners = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { radLabList } = useSelector((state) => state.radLabList)

  useEffect(() => {
    dispatch(getRadLabs())
  }, [dispatch])

  return (
    <div className='manage-package'>
      <p className='btn-container'>
        <button
          onClick={() => navigate('/dashboard/addRadLab')}
          className='add-btn'
        >
          + Add Radiology Lab
        </button>
      </p>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>logo</th>
              <th>accrediation</th>
              <th>time</th>
              <th>price</th>
              <th>state</th>
            </tr>
          </thead>
          <tbody>
            {radLabList.map(
              ({ title, logo, accrediation, time, price, state }) => (
                <tr>
                  <td>{title}</td>
                  <td>{logo}</td>
                  <td>{accrediation}</td>
                  <td>{time}</td>
                  <td>{price}</td>
                  <td>{state}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageRadPartners
