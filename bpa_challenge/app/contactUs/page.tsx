import React from 'react'

const Page = () => {
  return (
    <div class="contact-form">
    <h2>Contact Us</h2>
    <form id="contactForm">
        <input type="text" id="name" placeholder="Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <textarea id="message" rows="4" placeholder="Message" required></textarea>
        <button type="button" onclick="submitForm()">Submit</button>
    </form>
    <p id="responseMessage"></p>
</div>
  )
}

export default Page
