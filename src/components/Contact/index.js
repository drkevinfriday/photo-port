
import React,{useState} from "react";


function ContactForm(){

const [formState, setFormState ] = useState({name:'',email:'',message:''});
const {name,email,message } = formState 
// jsx

function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
}

return ( 
    <section>
        <h1>Contact</h1>
        <form id ="contact-form" onSubmit={handleSubmit}>
            {/* name inpurt */}
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>
            
            {/* email input */}
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            {/* message test area */}
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
         <button type="submit">Submit</button>
        </form>
    </section>
)

}





export default ContactForm