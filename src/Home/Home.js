import { useTypewriter} from "react-simple-typewriter"
import "./Home.css"

function Home(){
    const[typeEffect]=useTypewriter({
        words:["Mearn stack Developer 💻","Full Stack Developer 💻"],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })

    const[typeName]=useTypewriter({
        words:["Relli "],
        loop:{},
        typeSpeed:100,
        deleteSpeed:75
    })
    return(
        <div>
        <div className="details">
            <div style={{color:"White", margin:"50px"}}>
                <h1>Hello, it's Me</h1>
                <h3 style={{fontFamily:"TimesNewRoman",fontSize:"40px"}}>Akhilsai  <span style={{color:"Red"}}>{typeName}</span></h3>
            <h1 style={{fontFamily:"serif",fontSize:"20px"}}>And I'm a <span style={{color:"red"}}>{typeEffect}</span></h1>
            <p style={{fontFamily:"serif",fontSize:"18px"}}>I'm a web designer with over 1 year of hands-on experience. I specialize in creating captivating website designs and exceptional frontend experiences. My expertise includes Website Design,Frontend Design and manymore...</p>
            </div>
            <div className="box">
            <img src="https://www.img2link.com/images/2024/02/26/e09ab76d71fdf6e4a4b4c73560232fb8.png" alt="personalimage" className="personalimage"/>
            </div>
        </div>
        </div>  
    )
}
export default Home;