import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#ff6600",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#cc9900",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#00cc33",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#cc3333",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "C#",
    level: "beginner",
    color: "#cc66ff",
  },
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="profile.jpg" alt="James Thanawat" />
}

function Intro() {
  return (
    <div>
      <h1>James Thanawat</h1>
      <h3>About Me</h3>
      <p>
        I'm a React Front-end developer. I started learning basic HTML in 4th grade and shifted my interest. I
        started studying web development when I started my bachelor's degree in 2015 at Business Computer.
        After I graduated with A Bachelor of Business Administration degree (BBA) in 2019 and get a job IT
        supporter a few months before the pandemic "Covid-19" at Thailand in 2019 I went deep dive into
        JavaScript and made a project by self-learning from documents and building a project. It was really
        fun. I have to tell myself "Never stop learning." and my goal is to become a full-stack developer
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🐤"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  )
}
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
