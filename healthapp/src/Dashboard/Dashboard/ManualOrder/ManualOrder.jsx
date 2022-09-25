import React, { useEffect } from 'react'
import '../../../App.css'
import '../../Manage/ManagePackage/ManagePackage.css'
import { useNavigate } from 'react-router-dom'

const ManualOrder = () => {
  const navigate = useNavigate()
  const Orders = [
    {
      _id: 1,
      Customer: 'Customer 1',
      name: 'package 1',
      details:
        'details details details details details details details details details details details details details details',
      totalPrice: 100,
      Address: 'Address Address',
    },
    {
      _id: 2,
      Customer: 'Customer 2',
      name: 'package 2',
      details:
        'details details details details details details details details details details details details details details',
      totalPrice: 100,
      Address: 'Address Address',
    },
    {
      _id: 3,
      Customer: 'Customer 3',
      name: 'package 3',
      details:
        'details details details details details details details details details details details details details details',
      totalPrice: 100,
      Address: 'Address Address',
    },
    {
      _id: 4,
      Customer: 'Customer 4',
      name: 'package 4',
      details:
        'details details details details details details details details details details details details details details',
      totalPrice: 100,
      Address: 'Address Address',
    },
    {
      _id: 5,
      Customer: 'Customer 5',
      name: 'package 5',
      details:
        'details details details details details details details details details details details details details details',
      totalPrice: 100,
      Address: 'Address Address',
    },
  ]

  return (
    <div className='manage-package'>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Name</th>
              <th>Details</th>
              <th>Total Price</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {Orders.map(({ Customer, name, details, totalPrice, Address }) => (
              <tr>
                <td>{Customer}</td>
                <td>{name}</td>
                <td>{details}</td>
                <td>{totalPrice}</td>
                <td>{Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManualOrder
