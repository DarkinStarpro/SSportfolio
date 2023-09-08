import './contact.css';
import deatils from './json/details.json'
function Contact(){
    return(<>
    <div className="contactcontainer">
        <h1 className='u-s-n'>Get in Touch</h1>
        <div className="contactinfo">
            <div className="map">
                <iframe src={deatils.maploactionURL} 
                style={{border:"0"}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='messagebox'>
                <input type="text" placeholder='Enter Your Email'/><br/>
                <input type="text" placeholder='Enter Your Name'/><br/>
                <textarea placeholder='Enter Your Message'/><br/>
                <button type="submit" className="send-btn">Send Message</button>
            </div>
        </div>
    </div>
    </>)
}
export default Contact;