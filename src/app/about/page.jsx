import React from 'react'


export const  generateMetadata = (({params}) => {
  const id = params.id
  
  return {
    title:"About",
    description:"Something about"
  }
})

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
