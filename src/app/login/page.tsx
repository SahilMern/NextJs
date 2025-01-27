import React from 'react'

const page = () => {
// const callingApi = async (formdata:FormData) => {
// "use server"
// const title= formdata.get("name")
// }


  return (
    <>
    <form>
      <div>
        <label htmlFor="">name</label>
        <input type="text" id='' name="name" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text"  name="email"/>
      </div>
      <div>
        <label htmlFor="">Phone</label>
        <input type="text" name="phone" />
      </div>
    </form>
    </>
  )
}

export default page