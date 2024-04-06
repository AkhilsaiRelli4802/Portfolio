import { useTypewriter} from "react-simple-typewriter"
import "./about.css"

function About() {

  const[typeEffect]=useTypewriter({
    words:["Mearn stack Developer!","Full Stack Developer!"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:70
})

    return (
      <div className="aboutContainer">
        <img src="https://www.img2link.com/images/2024/02/26/cd8673d657703ffeda2b816998d44219.png" alt="Aboutimage" className="aboutImage"/>
        <div className="Aboutdetails">
          <h1 style={{color:"red"}}>{typeEffect}</h1>
        <p>Greetings, I'm Akhilsai Relli, a Computer Science and Engineering graduate with a keen interest in crafting digital solutions that positively impact society. Proficient in a range of technologies including HTML, CSS, SQL, Python, JavaScript, Bootstrap, Node.js, and React.js, I have a solid foundation in both front-end and back-end development. During my academic tenure, I undertook several projects, notably developing a WhatsApp clone using React.js to enhance my front-end skills and design aesthetics.</p>
        <p>As a fresher entering the tech industry, I am eager to channel my passion for coding challenges and collaborative problem-solving into meaningful projects. My ability to swiftly adapt to new technologies and learn on the go allows me to approach challenges with a fresh perspective and deliver innovative solutions.</p>
        <p>I am excited about the prospect of contributing my skills and enthusiasm to a dynamic team. Feel free to connect with me at <a href="mailto:akhilsai93811@gmail.com">akhilsai93811@gmail.com</a> to explore how we can collaborate and innovate together.</p>
        </div>
      </div>
    );
  }
export default About;
  