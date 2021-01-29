import React from 'react'

const SubscribeForm = () => (
  <div>
    <form
      action='https://buttondown.email/api/emails/embed-subscribe/rachelhow'
      method='post'
      target='popupwindow'
      onsubmit="window.open('https://buttondown.email/rachelhow', 'popupwindow')"
      class='embeddable-buttondown-form flex mt-6 sm:flex-col'
    >
      <label for='bd-email'></label>
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