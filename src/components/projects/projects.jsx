import './projects.css'

export default function Projects() {
  return (
    <div className='projects' id="projects">
      <h1>
        Projects
      </h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/pianowithgeorgia.png" className="d-block w-100" alt="Piano with Georgia"/>
            <div className="carousel-caption">
              <a href="https://pianowithgeorgia.com" className="caption">Piano with Georgia</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/mars.png" className="d-block w-100" alt="Mars"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/interactiondesign/COMPLETE/14-mars.html"
              className="caption">Mars</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/intdirect.png" className="d-block w-100" alt="Interaction Design Exercises"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/interactiondesign/COMPLETE/directory.html" 
              className="caption">Interaction Design Exercises</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/hiking.png" className="d-block w-100" alt="The Austin Hiking Club"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/advwww/finalproject/index.html"
              className="caption">The Austin Hiking Club</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/portfolio.png" className="d-block w-100" alt="Portfolio First Draft"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/portfoliosite/firstdraft/" 
              className="caption">Portfolio First Draft</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/georgia1.png" className="d-block w-100" alt="Capstone First Draft"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/capstone/seconddraft/index.php"
              className="caption">Capstone First Draft</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/beach.png" className="d-block w-100" alt="The Amy Beach Piano Foundation"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/interwww/beach/interhtmlfinal.html"
              className="caption">The Amy Beach Piano Foundation</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/schubert.png" className="d-block w-100" alt="Schubert Piano Sonatas"/>
            <div className="carousel-caption">
              <a href="http://webtrain.austincc.edu/~mbrady/interwww/schubert/gradedassignment1.html" className="caption">Schubert Piano Sonatas</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
