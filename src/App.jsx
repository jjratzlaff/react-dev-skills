import { useState } from 'react';
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from './SkillList/SkillList';
import NewSkillForm from './NewSkillForm/NewSkillForm';

function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  
  return (
    <>
      <h1 className="teal-text"> Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm setSkills={setSkills} skills={skills}/>
    </>
  )
}

export default App