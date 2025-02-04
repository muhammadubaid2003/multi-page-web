export default function Contact() {
    return (
        <div className="contact-wrapper">
            {/* Left Side - Company Info */}
            <div className="contact-info">
                <h2>Company Info</h2>
                <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Email:</strong> contact@company.com</p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
