
import React,{useState} from "react";
import { validateEmail } from '../../utils/helpers'


function ContactForm(){

const [formState, setFormState ] = useState({name:'',email:'',message:''});

const [ errorMessage, setErrorMessage] = useState('')
const {name,email,message } = formState 

const handleSubmit=(e)=> {
    e.preventDefault();
    if(!errorMessage){
        setFormState({[e.target.name]: e.target.value})
        console.log('Form', formState);
    }
}




// jsx

const handleChange = (e)=> {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid)
        if(!isValid){
            setErrorMessage('Your email is invalid')
        } else {
            setErrorMessage('')
        }
        // isValid conditional statement
     } else {
        if(!e.target.value.length){
            setErrorMessage(`${e.target.name} is required.`)
        } else{
            setErrorMessage('');
        }
     }
}



return ( 
    <section>
        <h1  data-testid="h1tag" >Contact me</h1>
        <form id ="contact-form" onSubmit={handleSubmit}>
            {/* name inpurt */}
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            
            {/* email input */}
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            {/* message test area */}
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {errorMessage && (
                    <div>
                        <p className="error-text">
                            {errorMessage}
                        </p>
                    </div>
                )}
            </div>
         <button data-testid="button" 
         type="submit">Submit</button>
        </form>
    </section>
)

}





export default ContactForm