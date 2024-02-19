import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Van-Life",
      description: "Van renting Web App for tourists",
      imgUrl: projImg1,
      link: "https://github.com/Saqib-nawab/vanlife-master"
    },
    {
      title: "Spotify Clone",
      description: "Music Web App",
      imgUrl: projImg2,
      link: "https://github.com/Saqib-nawab/spotify-clone-Project"
    },
    {
      title: "News App",
      description: "News API-driven Web Application",
      imgUrl: projImg3,
      link: "https://github.com/Saqib-nawab/News_Monkey"
    },
    {
      title: "Youtube Backend",
      description: "Production level videos serving back-end code",
      imgUrl: projImg4,
      link: "https://github.com/Saqib-nawab/Youtube-backend"
    },
    {
      title: "Budget Allocation App",
      description: "Company Budget Management Application",
      imgUrl: projImg5,
      link: "https://github.com/Saqib-nawab/Budget-Allocation-Application"
    },
    {
      title: "InoteBook",
      description: "App for keeping track of user daily reminders",
      imgUrl: projImg6,
      link: "https://github.com/Saqib-nawab/inotebook"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Throughout my web development journey, I've completed a range of projects, including:

                    Vanlife: A van renting app for adventurous souls.
                    Spotify Music Clone: Bringing the Spotify experience to life.
                    NewsMonkey: Your source for diverse news stories.
                    Budget Allocation App: Streamlining business finances.
                    Inotebook: Organizing daily notes and reminders.
                    Each project reflects my dedication to creating immersive digital experiences.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
  <Row>
    {
      projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            githubLink={project.link} // Use `link` prop from the project object
          />
        )
      })
    }
  </Row>
</Tab.Pane>
                  <Tab.Pane eventKey="second">
  <Row>
    {
      projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            githubLink={project.link} // Use `link` prop from the project object
          />
        )
      })
    }
  </Row>
</Tab.Pane>
                    <Tab.Pane eventKey="third">
  <Row>
    {
      projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            githubLink={project.link} // Use `link` prop from the project object
          />
        )
      })
    }
  </Row>
</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
