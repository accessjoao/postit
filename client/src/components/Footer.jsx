/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <p>This app was made by Joao Felipe Silveira</p>
      <a className='email' onClick={() => window.location = 'mailto:joaofe747@gmail.com'}><Icon icon="eva:email-outline" height={20} style={{ color: 'white' }}/> joaofe747@gmail.com</a>
      <a href="https://github.com/accessjoao" target="_blank" rel="noreferrer"><Icon icon="akar-icons:github-fill" height={20} style={{ color: 'white' }}/> Github</a>
    </div>
  )
}
