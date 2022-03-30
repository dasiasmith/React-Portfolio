import linkedin from '../images/Circle_linkedin_icon.png';
import github from '../images/GitHub-Mark-64px.png';
import gmail from '../images/gmail_icon-icons.com_59877.png'

export default function Contact() {
    return (
        <div id="contact" className="container-fluid container text-center">
                  <div classNameclass="col-12 col-md-12">
                      <h1>contact</h1>
                      <hr id= "contactHr" className="rounded"/>
                  </div>
                  <div className="container fillout">
                    <form action="/action_page.php">
                      <label for="fname">First Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                      <label for="lname">Last Name</label>
                      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                      <label for="subject">Subject</label>
                      <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 10 }}></textarea>

                      <input type="submit" value="Submit"/>
                    </form>
                  </div>
                  <div id="icons" classNameclass="icons row">
                      <a href ="https://www.linkedin.com/in/dasia-smith/" target="_blank" rel='noreferrer'><img src={linkedin} alt="LinkedIn Icon"/></a>
                      <a href= "https://github.com/dasiasmith" target="_blank" rel='noreferrer'><img src={github} alt="GitHub icon"/></a>
                      <a href= "mailto:dasiasmith023@gmail.com" target="_blank" rel='noreferrer'><img src={gmail} alt="Gmail icon"/></a>
                  </div>
                </div>
    )
}