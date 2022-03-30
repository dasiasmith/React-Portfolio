import resume from '../Resume.pdf'

export default function Header(){
    return (
        <><header><h1>Hi I'm DASIA.</h1>
        <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse justify-content-end" id="main-nav-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a href ="#about"> about me</a></li>
                        <li className="nav-item"> <a href= "#work"> work</a></li>
                        <li className="nav-item"> <a href={resume} target="_blank" rel='noreferrer'> resume</a></li>
                        <li className="nav-item"> <a href= "#contact"> contact</a></li>
                    </ul>
                </div>
            </div>        
        </nav>
        </header>
        </>
    )
}