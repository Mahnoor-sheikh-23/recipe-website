import React from 'react';
import "../styles/footer.css";


const Footer = () => {
    return (
        <div>

            <footer className="footer">
                <div className="footer-logo">
                    <h2>Recipe Site</h2>
                </div>
                <p>Stay Connected with Us</p>
                <ul className="social-links">
                    <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                    <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" >Twitter</a></li>
                </ul>
                <div className="footer-bottom">
                    <p>&copy; 2024 Recipe Site | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
