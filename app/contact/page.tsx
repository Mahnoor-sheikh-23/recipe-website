import { NextPage } from "next";
import styles from "../styles/contact.module.css";
import "../styles/footer.css"

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="relative">
        </div>
        <div className={`${styles.heroContent} changes`}>
          <h1 className="changes ">Contact Us</h1>
          <p className="changes">Have a question or want to get in touch? We had love to hear from you!</p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <h2>Send Us a Message</h2>
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name and Email */}
            <div className="flex flex-col">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.inputField}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.inputField}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col mt-6">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`${styles.textareaField} textareaField`}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button type="submit" className={`${styles.button} button`}>
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfoSection}>
        <div className="max-w-4xl mx-auto text-center">
          <h2>Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={styles.contactInfoCard}>
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className={styles.contactInfoCard}>
              <h3>Email</h3>
              <p>contact@recipe.com</p>
            </div>
            <div className={styles.contactInfoCard}>
              <h3>Social Media</h3>
              <div className={styles.socialIcons}>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className={styles.mapSection}>
        <div className="max-w-4xl mx-auto text-center">
          <h2>Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799081642!2d-74.2598757!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af38e64f5f%3A0x43fa0eb502f13944!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1619007845180!5m2!1sen!2sus"
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
