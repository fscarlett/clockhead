import { useEffect, useState } from 'react'

const Location = () => {
  const [locationLoading, setLocationLoading] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setLocationLoading(false)
          },
          (error) => {
            console.error('Error getting location:', error)
            setLocationLoading(false)
          },
        )
      } else {
        setLocationLoading(false)
      }
    } catch (error) {
      console.log('Something went wrong!', error)
    }
  }, [])
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=14&ie=UTF8&iwloc=B&output=embed`

  return (
    <>
      <h3>Clockhead is everywhere</h3>
      {!locationLoading ? (
        <div>
          {/* <p>Latitude: {latitude}</p> */}
          {/* <p>Longitude: {longitude}</p> */}
          <div className='map'>
            <div
              className='mapouter'
              style={{
                position: 'relative',
                textAlign: 'right',
                width: '100%',
                height: '100%',
              }}
            >
              <div
                className='gmap_canvas'
                style={{
                  overflow: 'hidden',
                  background: 'none!important',
                  width: '100%',
                  height: '100%',
                }}
              >
                <iframe
                  className='gmap_iframe'
                  src={mapSrc}
                  style={{ width: '400px', height: '400px', border: 'none' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Location Loading...'
      )}
    </>
  )
}

export default Location
