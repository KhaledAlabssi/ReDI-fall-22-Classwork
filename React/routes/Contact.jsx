import React from 'react'

function Contact() {
  return (
    <main className='contact'>
      <form action="">
        <div>

        <input type="text" placeholder='You name' />
        <input type="text" placeholder='Your email'/>
        </div>
        <input type="text" placeholder='Email subject'/>
        <textarea placeholder='Text...' name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>

      </form>
    </main>
  )
}

export default Contact