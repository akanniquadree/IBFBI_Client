import React, { useEffect, useState } from 'react'
import Directory from '../../Components/Directory/Directory'
import SingleBlogSection from './component/SingleBlogSection'
import { Link, useParams } from 'react-router-dom'
import { BannerSevenData } from '../../Components/BannerSeven/BannerSevenData'
import { Stack } from '@mui/material'

export default function SingleBlog() {
  const [blog, setBlog]  = useState({})
  const {id} = useParams()
  useEffect(() => {
    const data = BannerSevenData.find((itm)=>itm.id === Number(id))
    setBlog(data)
    return () => {
    }
  }, [id])
  if(blog){
  return (
    <>
    <Directory blog={blog.title}/>
    <SingleBlogSection blog={blog} data={BannerSevenData}/>
    </>
  )}
  else{
    return(
      <>
        <Stack direction={"column"} spacing={2} sx={{height:'calc(100vh - 100px)', justifyContent:'center', alignItems:'center'}}>
          <h1>Not Found</h1>
          <p>Go back to <Link to="/" style={{color:'inherit'}}>Home Page</Link></p>
        </Stack>
      </>
    )
  }
}
