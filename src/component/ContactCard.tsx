import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send this data to a server or an API
    console.log({
      topic,
      name,
      email,
      description,
    });
    alert('Request sent! (Check console for data)');
    // Optionally clear the form
    setTopic('');
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <section className="contact-section">
      <div className="contact-section__left-content">
        <h2 className="contact-section__title">
          Bibendum et sit aliquam <br />
          morendum onsectetur <br />
          adipiscing elit scelerisque.
        </h2>
      </div>
      <div className="contact-section__right-form-wrapper">
        <p className="contact-section__form-quote">
          The harder you work for something, the greater you'll <br />
          feel when you achieve it.
        </p>
        <form className="contact-section__form" onSubmit={handleSubmit}>
          <div className="contact-section__form-group">
            <select
              className="contact-section__form-input contact-section__form-input--select"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="" disabled>Topic</option>
              <option value="general-inquiry">General Inquiry</option>
              <option value="project-discussion">Project Discussion</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <span className="contact-section__select-arrow"></span> {/* Custom arrow */}
          </div>

          <div className="contact-section__form-group contact-section__form-group--inline">
            <input
              type="text"
              className="contact-section__form-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="contact-section__form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="contact-section__form-group">
            <textarea
              className="contact-section__form-input contact-section__form-input--textarea"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4} // Adjust rows as needed
            ></textarea>
          </div>

          <button type="submit" className="contact-section__submit-button">
            SEND REQUEST
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;