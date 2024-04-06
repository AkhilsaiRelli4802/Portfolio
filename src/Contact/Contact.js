import { React,useRef} from "react";
import "./Contact.css"
import Layout from "../contactlayoutsection/layout";
import axios from "axios";
function Contact(){
    const username=useRef();
    const email=useRef();
    const phoneNum=useRef();
    const message = useRef();

    const clicker=(e)=>{
        e.preventDefault();
        const entereduserName =username.current.value;
        const enteredEmail = email.current.value;
        const enteredPhNum = phoneNum.current.value;
        const enteredMessage = message.current.value;
        const data = {username:entereduserName,email:enteredEmail,Phno:enteredPhNum,Message:enteredMessage}
        axios.post("http://localhost:4000/Contactdata",data).then(res=>console.log(res)).catch(err=>console.log(err))
        // console.log(data)
    }
    return(
        <div>
        <div style={{textAlign:"center"}} className="ConContainer">
            <div className="formcontainer">
            <form style={{color:"white",textAlign:"center"}} onSubmit={clicker}>
                <label style={{margin:"20px"}} htmlFor="nameInput">NAME :</label>
                <input style={{margin:"20px"}} type="text" id="nameInput" name="username" ref={username} required/><br/>
                <label style={{margin:"20px"}} htmlFor="mail">EMAIL :</label>
                <input style={{margin:"20px"}} type="email" id="mail" name="email" ref={email} required /><br/>
                <label style={{margin:"20px"}} htmlFor="phoneNum">Mobile :</label>
                <input style={{margin:"20px"}} type="number" name="phoneNum" id="phoneNum" ref={phoneNum} required/><br/>
                <div style={{ display: "flex", alignItems: "center",margin:"20px" }}>
                    <label htmlFor="message" style={{ marginRight: "10px" }}>Message:</label>
                    <textarea style={{marginLeft:"20px"}} id="message" name="message" ref={message} required/> 
                </div>
                <button className="submitButton" type="submit">Submit</button>
                <button className="resetButton" type="reset">Reset</button>
            </form>
            </div>
        </div>
        <Layout/>
        </div>
    )
}
export default Contact;