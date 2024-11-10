import React from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
    },
    form: {
        width: '300px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        width: '100%',
        marginTop: '10px',
        padding: '8px',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        marginTop: '10px',
        padding: '8px',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        marginTop: '10px',
        padding: '8px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '3px',
        border: 'none',
    },
    success: {
        color: 'green',
        marginTop: '10px',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    }


const Page = () => {

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setResponseMessage('Please fill in all fields.');
            return;
        }

        setResponseMessage('Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
    };
  
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
