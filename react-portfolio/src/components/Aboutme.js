import me from '../images/AboutMe2.png';

export default function Aboutme(){
    return (
        <section id="about">
        <div className="col-12 col-md-6" id="cutie">
            <img src={me} alt="Dasia" width="380" height="310"/>
        </div>
        <div className="col-12 col-md-6" id="AboutMe">
            <h1 className="intro">Bringing Creative Ideas to<br/>LIFE</h1>
            <p>
                Welcome to my page! My name is Dasia and I began my career journey wanting to become a graphic designer.
                I've always done art on the side but after joining a STEM club in high school and building cool models I went to school for engineering.
                After studying Civil Engineering at Georgia Tech I decided I wanted to combine my passions for product design and technical work 
                (and my love for the Yellow Jackets) into a new career path and enrolled in a full-stack bootcamp.
                <br/>
                I'm interested in delving into both front end and back end roles while also combining art using creative technology in my spare time.
                Join me in the journey that is my portfolio and feel free to check out my art :)
            </p>
        </div>
        </section>
    )
}