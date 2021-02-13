import React from 'react'

const SubscribeForm = () => (
  <div>
    <form
      action='https://buttondown.email/api/emails/embed-subscribe/rachelhow'
      method='post'
      target='popupwindow'
      onSubmit={ () => window.open('https://buttondown.email/rachelhow', 'popupwindow')}
      className='embeddable-buttondown-form flex mt-6 sm:flex-col'
    >
      <label htmlFor='bd-email'></label>
      <input
        type='email'
        name='email'
        id='bd-email'
        placeholder="What's your email?"
      />
      <input type='hidden' value='1' name='embed' />
      <input
        type='submit'
        value='Subscribe ⚡️'
        className='btn btn-primary sm:mt-4'
      />
    </form>
  </div>
)

export default SubscribeForm;