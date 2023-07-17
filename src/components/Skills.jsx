import React from 'react';
import { ReactComponent as HtmlIcon } from 'devicon/icons/html5/html5-original.svg';
import { ReactComponent as CssIcon } from 'devicon/icons/css3/css3-original.svg';
import { ReactComponent as JsIcon } from 'devicon/icons/javascript/javascript-original.svg';
import { ReactComponent as TsIcon } from 'devicon/icons/typescript/typescript-original.svg';
import { ReactComponent as ReactIcon } from 'devicon/icons/react/react-original.svg';
import { ReactComponent as BootstrapIcon } from 'devicon/icons/bootstrap/bootstrap-plain.svg';
import { ReactComponent as GitIcon } from 'devicon/icons/git/git-plain.svg';
import { ReactComponent as GithubIcon } from 'devicon/icons/github/github-original.svg';

const Skills = () => {
  return (
    <section id="skills" className="skills text-white text-center py-5" style={{ background: "#232946" }}>
      <div className="container">
        <h2 className="py-2 mb-5">Skills</h2>
        <div className="row">
          <div className="col">
            <div className="skill-icon">
              <HtmlIcon className="icon" />
              <span>HTML</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <CssIcon className="icon" />
              <span>CSS</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <JsIcon className="icon" />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <TsIcon className="icon" />
              <span>TypeScript</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <ReactIcon className="icon" />
              <span>React</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <BootstrapIcon className="icon" />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <GitIcon className="icon" />
              <span>Git</span>
            </div>
          </div>
          <div className="col">
            <div className="skill-icon">
              <GithubIcon className="icon" style={{ background: "#ffffff" }} />
              <span>GitHub</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-lg" style={{ background: "#eebbc3" }}>My Work</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
