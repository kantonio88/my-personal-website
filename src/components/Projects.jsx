import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects text-center py-5" style={{ background: "#b8c1ec" }}>
      <div className="container">
        <h2 className="text-white mb-4 display-4">My Projects</h2>
        <div className="row py-5">
          <div className="col-md-6 col-lg-3">
            <div className="card" style={{ background: "#232946" }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <div className="text-center text-light">
                  <p>Shrugman Game</p>
                  <a href="https://github.com/kantonio88/Shrugman_Game" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#FFFF", color: "#232946"  }}>
                    GitHub
                  </a>
                  <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#b8c1ec", color: "#232946"  }}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card" style={{ background: "#232946" }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <div className="text-center text-light">
                  <p>TypeScript-Todo-List</p>
                  <a href="https://github.com/kantonio88/Typescript-Todo-List" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#FFff", color: "#232946"  }}>
                    GitHub
                  </a>
                  <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#b8c1ec", color: "#232946"  }}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card" style={{ background: "#232946" }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <div className="text-center text-light">
                  <p>JavaScript-Calculator</p>
                  <a href="https://github.com/kantonio88/JavaScript-Calculator" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#FFFF", color: "#232946"  }}>
                    GitHub
                  </a>
                  <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#b8c1ec", color: "#232946"  }}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <div className="card" style={{ background: "#232946" }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 4" />
              <div className="card-body">
                <div className="text-center text-light">
                  <p>Project</p>
                  <a href="https://github.com/example-repo-4" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#ffff", color: "#232946"  }}>
                    GitHub
                  </a>
                  <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer" className="btn py-2 px-3 my-2 mx-2" style={{ backgroundColor: "#b8c1ec", color: "#232946" }}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
