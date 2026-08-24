import React from 'react'
import './Contact.css'
import { BiMessageAltDetail, BiRightArrowAlt } from 'react-icons/bi'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "196cbb1d-7fc1-4a7f-be1c-22bb0f7115cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3> Send us a Message <BiMessageAltDetail size={25}/> </h3>
            <p> Feel free to reach out through contact form or find our contact information below. Your feedback, and suggestions are important to us we strive to provide exceptional service to our university community </p>
            <ul>
                <li> <MdEmail size={30} className='icon'/> devcode@gmail.com </li>
                <li> <MdPhone size={30} className='icon'/> +94 77 153 3595 </li>
                <li> <MdLocationOn size={30} className='icon'/> 123 Main St, Austin, USA </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your Name </label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label> Phone Number </label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label> Write Your Message Here </label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now <BiRightArrowAlt size={30}/>  </button>
            </form>
            <span> {result}  </span>
        </div>
      
    </div>
  )
}

export default Contact
