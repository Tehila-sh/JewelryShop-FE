import React, { useState } from 'react';

const Contact = () => {
  window.scrollTo(0, 0)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending data to a backend server
    
    // For demonstration purposes, we'll simply display an alert
    alert("The message has been sent successfully. Your request will be processed as soon as possible!");
    
    // Reset the form after submission
    e.target.reset();

    // Set isSubmitted to true to trigger rendering of the success message
    setIsSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h1>
      {!isSubmitted ? (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" style={{ padding: '0.5rem' }} required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" style={{ padding: '0.5rem' }} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Message" style={{ padding: '0.5rem' }} required></textarea>

          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#013754', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      ) : (
        <p style={{ textAlign: 'center', color: '#013754', fontWeight: 'bold' }}>The message has been sent successfully. Your request will be processed as soon as possible!</p>
      )}
    </div>
  );
};

export default Contact;
