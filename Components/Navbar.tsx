import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
        <Link href={`/dashboard`}>Dashboard</Link>
        <Link href={`/pricing`}>Pricing</Link>
        <Link href={`/sessions`}>Sessions</Link>
      
    </div>
  )
}

export default Navbar
