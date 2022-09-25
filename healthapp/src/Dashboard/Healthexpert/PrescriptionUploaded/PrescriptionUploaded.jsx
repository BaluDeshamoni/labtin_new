import React, { useEffect } from 'react'
import '../../../App.css'
import './PrescriptionUploaded.css'
import { useNavigate } from 'react-router-dom'
import PrescriptionRow from './PrescriptionRow'
import { useDispatch, useSelector } from 'react-redux'
import { getPrescriptions } from '../../../actions/prescriptionActions'

const PrescriptionUploaded = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoading, prescriptions } = useSelector(
    (state) => state.prescriptions
  )
  console.log(prescriptions)

  useEffect(() => {
    dispatch(getPrescriptions())
  }, [dispatch])
  return (
    <div className='prescription_uploaded'>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((d) => (
              <PrescriptionRow
                name={d.name}
                mobile={d.mobile}
                img={d.img}
                files={d.files}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PrescriptionUploaded
