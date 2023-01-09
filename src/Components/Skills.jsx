const Skills = () => {
  const skills = [
    { iconLink: "fa-brands fa-html5", text: "HTML" },
    { iconLink: "fa-brands fa-css3-alt", text: "CSS" },
    { iconLink: "fa-brands fa-square-js", text: "JavaScript" },
    { iconLink: "fa-brands fa-git", text: "Git" },
    { iconLink: "fa-brands fa-github-alt", text: "Github" },
    { iconLink: "fa-brands fa-sass", text: "SASS" },
    { iconLink: "fa-solid fa-terminal", text: "Command Line Interface" },
    { iconLink: "devicon-vscode-plain", text: "VS Code" },
    { iconLink: "devicon-linux-plain", text: "Linux" },
  ];

  return (
    <section id="section_skills">
      <h2>skills and tools</h2>
      <div id="skills_container">
        {skills.map(({ iconLink, text }) => {
          return (
            <div key={text} className="skills_icon">
              <i className={iconLink}></i>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
