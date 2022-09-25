import { Close } from '@mui/icons-material'
import React, { useState, useRef, useEffect } from 'react'
import './PrescriptionDialog.css'
import camera from '../image/camera.png'
import gallery from '../image/gallery.png'
import Webcam from 'react-webcam'
import { useDispatch } from 'react-redux'
import { addPrescription } from '../actions/prescriptionActions'

import axios from 'axios'

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: 'user',
}

function PrescriptionDialog(props) {
  const dispatch = useDispatch()

  const [prescription, setPrescription] = useState({
    name: '',
    mobile: '',
    img: [],
    files: [],
  })
  const [image, setImage] = useState('')
  const webcamRef = useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  })
  const [cam, setCam] = useState(false)

  const hiddenFileInput = useRef(null)
  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }
  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i])
    }

    const { data } = await axios.post('//localhost:5000/upload', formData)
    console.log(data)
    setPrescription({
      ...prescription,
      files: data,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(prescription)
    dispatch(addPrescription(prescription))
    setImage('')
    props.onClose()
    setPrescription({ name: '', mobile: '', img: [], files: [] })
  }
  if (!props.visibility) {
    return null
  }
  return (
    <div className='my_modal'>
      {cam === true ? (
        <div className='dialog_body'>
          <div className='webcam-container'>
            <div className='webcam-img'>
              {image == '' ? (
                <Webcam
                  audio={false}
                  height={200}
                  ref={webcamRef}
                  screenshotFormat='image/jpeg'
                  width={220}
                  videoConstraints={videoConstraints}
                />
              ) : (
                <img src={image} />
              )}
            </div>
            <div>
              {image != '' ? (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setImage('')
                    }}
                    className='webcam-btn'
                  >
                    Retake Image
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setPrescription({
                        ...prescription,
                        img: [...prescription.img, image],
                      })
                      setImage('')
                    }}
                    className='webcam-btn'
                  >
                    Capture Another
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    capture()
                  }}
                  className='webcam-btn'
                >
                  Capture
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  {
                    image !== '' &&
                      setPrescription({
                        ...prescription,
                        img: [...prescription.img, image],
                      })
                  }
                  setCam(false)
                  setImage('')
                }}
                className='webcam-btn'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='dialog_body'>
          <div>
            <div className='heading_and_close'>
              <div
                style={{ flex: '1', paddingLeft: '15px', fontSize: 'larger' }}
              >
                Upload your Prescription
              </div>
              <div
                className='close_button'
                onClick={async () => {
                  props.onClose()
                }}
              >
                <Close />
              </div>
            </div>
            <p
              style={{ textAlign: 'center', fontSize: 'large', color: 'gray' }}
            >
              choose an option to upload
            </p>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={camera} height={70} onClick={() => setCam(true)} />
                <div
                  style={{
                    paddingLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: 'large',
                  }}
                >
                  Camera
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'baseline',
                }}
              >
                <img src={gallery} onClick={handleClick} height={70}></img>

                <input
                  type='file'
                  multiple
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={uploadFileHandler}
                />
                <div
                  style={{
                    paddingLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: 'large',
                  }}
                >
                  Gallery
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                paddingTop: '10px',
              }}
            >
              <div
                style={{
                  width: '350px',
                  height: '125px',
                  backgroundColor: 'whitesmoke',
                  alignSelf: 'center',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: 'small',
                    fontWeight: 'bold',
                    paddingTop: '10px',
                  }}
                >
                  Attached Prescriptions
                </div>
                <div className='prec'>
                  {prescription.img &&
                    prescription.img.map((d) => (
                      <img className='prec_img' src={d}></img>
                    ))}
                  {prescription.files &&
                    prescription.files.map((f) => (
                      <img
                        className='prec_img'
                        src={`//localhost:5000/${f}`}
                      ></img>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                }}
              >
                <p>Enter Your Details</p>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  onChange={(e) =>
                    setPrescription({ ...prescription, name: e.target.value })
                  }
                  style={{
                    width: '200px',
                    height: '15px',
                    fontSize: '15px',
                    padding: '10px',
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'whitesmoke',
                    border: '0.5px solid',
                    marginBottom: '10px',
                    borderRadius: '5px',
                  }}
                />
                <input
                  type='text'
                  placeholder='Mobile Number*'
                  onChange={(e) =>
                    setPrescription({ ...prescription, mobile: e.target.value })
                  }
                  style={{
                    width: '200px',
                    height: '15px',
                    fontSize: '15px',
                    padding: '10px',
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'whitesmoke',
                    border: '0.5px solid',
                    borderRadius: '5px',
                  }}
                />
                <button
                  onClick={submitHandler}
                  style={{
                    width: '100px',
                    height: '35px',
                    fontSize: '15px',
                    border: '1px solid var(--color-light)',
                    backgroundColor: 'deepskyblue',
                    color: 'white',
                    marginTop: '20px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrescriptionDialog
