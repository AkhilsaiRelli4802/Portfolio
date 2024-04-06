import { useTypewriter} from "react-simple-typewriter";
import "./Project.css"

function Project(){
    const[typeEffect]=useTypewriter({
        words:["Projects 🦾🏆"],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
    return(
        <div>
            <h1 style={{textAlign:"center",color:"white",fontSize:"30px",fontFamily:"cursive"}}>My <span style={{color:"orange"}}>{typeEffect}</span></h1>
            <div className="projectsList">
            <div className="projectContainer">
                    <h1>FoodMunch</h1>
                    <img className="projectImage" src="https://th.bing.com/th/id/OIP.-veIIOnmPHyE2OYlgwMiqwHaDt?w=1600&h=800&rs=1&pid=ImgDetMain" alt="foodMuch"/>
                    <p> Responsive website for a Food Store where users can see a
                        list of food items and detailed information about a food item offered.</p>
                    <a href="https://akhilfoodmunch4.ccbp.tech/"><button style={{margin:"20px",text:"center",height:"40px",borderRadius:"25px",borderWidth:"1px",backgroundColor:"black",color:"white",borderColor:"yellow",borderStyle:"revert",width:"90px"}}>Foodmuch Website</button></a>
            </div>

            <div className="projectContainer">
                    <h1>Todo's Application</h1>
                    <img className="projectImage" src="https://i.pinimg.com/originals/4a/db/a2/4adba2afaccebd03eda10434c7b1d28e.jpg" alt="Todo's"/>
                    <p> Todo's Application is a list of tasks you need to complete or things that you want to do.</p>
                    <a href="https://actionitems.ccbp.tech/"><button style={{margin:"20px",text:"center",height:"40px",borderRadius:"25px",borderWidth:"1px",backgroundColor:"black",color:"white",borderColor:"yellow",borderStyle:"revert",width:"90px"}}>Todo's Application</button></a>
            </div>

            <div className="projectContainer">
                    <h1>Emoji Memory Game</h1>
                    <img className="projectImage" src="https://i.pinimg.com/originals/40/35/a9/4035a9be8110f127cfbae216ecd945b9.jpg" alt="foodMuch"/>
                    <p> Emoji Memory Game: Click unique emojis for points, avoid repeats. Beat your high score in this React-based challenge!</p>
                    <a href="https://nonrepeatgame.ccbp.tech/"><button style={{margin:"20px",text:"center",height:"40px",borderRadius:"25px",borderWidth:"1px",backgroundColor:"black",color:"white",borderColor:"yellow",borderStyle:"revert",width:"90px"}}>Emoji's Game</button></a>
            </div>
        </div>
        </div>
    )
}
export default Project;