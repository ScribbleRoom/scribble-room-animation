import styles from "./styles.module.scss"
import { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const center = useMemo(
    () => ({ lat: 51.44876269977327, lng: -2.5818604127367983 }),
    []
  )

  if (!isLoaded) return null

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName={styles.map}>
      <MarkerF position={center} />
    </GoogleMap>
  )
}
