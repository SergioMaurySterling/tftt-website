import React, { useContext } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// Styles
import { Section, Container } from '@styles/PartnershipsStyles'

// Images

import BgImg from '@images/bgPartnershipsImg.png'

export const Partnerships = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  return (
    <Section bgImg={BgImg}>
      <Container>
        <h1 style={{ color: 'white' }}>Coming Soon Component Here!</h1>
      </Container>
    </Section>

  )
}
