import "./Skills.css"
function Skills(){
    return(
    <div className="Holecontainer">
        <div>
        <img className="Profile" src="https://www.img2link.com/images/2024/03/30/5e646e12b6c7079711af91c101d7ae16.jpg" alt="SkillProfile"/>
        </div>
        <div className="container">
            <div className="imgcontainer">
            <img className="Skillimage" src="https://img.freepik.com/premium-vector/html-file-icon-vector-image-can-be-used-computer-programming_120816-139316.jpg?w=740" alt="HtmlImg"/>
            <img className="Skillimage" src="https://img.freepik.com/premium-vector/css-word-lettering-typography-design-illustration-with-line-icons-ornaments-orange_9233-187.jpg?w=900" alt="CssImage"/>
            <img className="Skillimage" src="https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg" alt="JavascriptImage"/>
            </div>
            <div>
            <img className="Skillimage" src="https://th.bing.com/th/id/OIP.mZl1mirPYczZqdBr3RnelAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="React.jsimage"/>
            <img className="Skillimage" src="https://th.bing.com/th/id/OIP.3pPJQKaUEdqQUjkWge0M3gHaEK?rs=1&pid=ImgDetMain" alt="Node.jsImage"/>
            <img className="Skillimage" src="https://th.bing.com/th/id/OIP.6tfIMnOXRU_oeUkff7-OGAHaEK?w=323&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="PythonImage"/>
            </div>
            <div>
            <img className="Skillimage" src="https://wedatau.org/wp-content/uploads/2021/12/sql_graphic.jpg" alt="SQLImage"/>
            <img className="Skillimage" src="https://www.gfxtra32.com/uploads/posts/2016-12/1480735750_001-capture.jpg" alt="gitImage"/>
            <img className="Skillimage" src="https://th.bing.com/th/id/OIP.lNat0HG6B_Os877fgwm9GQHaFj?rs=1&pid=ImgDetMain" alt="PostmanImage"/>
            </div>
            <div style={{marginTop:"20px"}}>
            <a style={{padding:"20px"}} href="https://github.com/AkhilsaiRelli4802">
                <button className="resumebutton">View GitHub</button>
            </a>
            <a style={{padding:"20px"}} href="/Akhilsai-Relli.pdf" download>
                <button className="resumebutton">Download Resume</button>
            </a>
            </div>
        </div>
    </div>
    )
}
export default Skills