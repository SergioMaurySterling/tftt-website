import React from 'react'

// Styles
import '@styles/Footer.scss'
// Components
import FooterCard from '@components/FooterCard'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='lettersContainer'>
        <h1 className='Title1'>CONNECT WITH THE <span>TRAP</span></h1>
      </div>
      <div className='cardsContainer'>
        <FooterCard />
      </div>
    </div>
  )
}

export default Footer
