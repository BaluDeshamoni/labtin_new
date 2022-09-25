import './ListPakage.css'
import { useLocation } from 'react-router-dom'
import DSlider from '../components/DSlider'
import PopularPakages from './PopularPakages'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPackages } from '../actions/packageActions'

const ListPakage = () => {
  const { state } = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPackages())
  }, [dispatch])
  const { packageList } = useSelector((state) => state.packages)
  return (
    <div className='pakages_main'>
      <div className='third_section desktopElement'>
        <DSlider />
      </div>
      <div className='pakages_main_div'>
        <h2>{state?.name || 'Individual Tests'}</h2>
        <div className='pakages_grid'>
          {packageList.map((data) => (
            <PopularPakages offPercentage='30' data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListPakage
