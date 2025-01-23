import React, { useEffect, useState } from 'react'
import Directory from '../../Components/Directory/Directory'
import { Link, useParams } from 'react-router-dom'
import { Stack } from '@mui/material'
import { itemData } from './ImageData'
import SingleImageSection from './component/SingleImageSection'

export default function ImageTemp() {
  const {name} = useParams()
  const [image, setImage]  = useState(itemData.find((itm)=>(itm.link) === (name)))
  useEffect(() => {
    setImage(itemData.find((itm)=>(itm.link) === (name)))
  }, [name])
  
  if(image){
  return (
    <>
    <Directory image={image.name}/>
    <SingleImageSection image={image} data={itemData}/>
    </>
  )}
  else{
    return(
      <>
        <Stack direction={"column"} spacing={2} sx={{height:'calc(100vh - 100px)', justifyContent:'center', alignItems:'center'}}>
          <h1>Not Found</h1>
          <p>Go back to <Link to="/gallery" style={{color:'inherit'}}>Previous Page</Link></p>
        </Stack>
      </>
    )
  }
}
