import React, { useEffect } from 'react'
import '../../../App.css'
import '../../Manage/ManagePackage/ManagePackage.css'
import { useNavigate } from 'react-router-dom'

const Analytics = () => {
  const navigate = useNavigate()
  const analytics = [
    {
      _id: 1,
      total_customers: 10,
      name: 'package 1',
      details:
        'details details details details details details details details details details details details details details',
      received: 100,
      canceled: 10,
    },
    {
      _id: 2,
      total_customers: 10,
      name: 'package 2',
      details:
        'details details details details details details details details details details details details details details',
      received: 100,
      canceled: 10,
    },
    {
      _id: 3,
      total_customers: 10,
      name: 'package 3',
      details:
        'details details details details details details details details details details details details details details',
      received: 100,
      canceled: 10,
    },
    {
      _id: 4,
      total_customers: 10,
      name: 'package 4',
      details:
        'details details details details details details details details details details details details details details',
      received: 100,
      canceled: 10,
    },
    {
      _id: 5,
      total_customers: 10,
      name: 'package 5',
      details:
        'details details details details details details details details details details details details details details',
      received: 100,
      canceled: 10,
    },
  ]

  return (
    <div className='manage-package'>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Customers</th>
              <th>Details</th>
              <th>Received</th>
              <th>Canceled</th>
            </tr>
          </thead>
          <tbody>
            {analytics.map(
              ({ total_customers, name, details, received, canceled }) => (
                <tr>
                  <td>{name}</td>
                  <td>{total_customers}</td>
                  <td>{details}</td>
                  <td>{received}</td>
                  <td>{canceled}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Analytics
