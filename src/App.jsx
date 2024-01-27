import MyCard from './components/my_card';
import NavBar from './components/navbar'
import ProjectCard from './components/project_card';
import MySkillsBar from './components/skills_bar';
import experienciaSVG from './assets/experiencia.svg';
import proyectosSVG from './assets/proyectos1.svg';
import aboutMeSVG from './assets/aboutme.svg';



import './index.css';

function App() {
 

  return (
    <body className='bg-black'>
      <section className='flex flex-col md:flex-row'>
      <div>
      <MyCard/>
      </div>

 <div>
       <NavBar/>

    <div className='flex flex-row'>  
     <ProjectCard image={proyectosSVG} text="Proyectos"/>
     <ProjectCard image={aboutMeSVG} text="Acerca de mí"/>
    </div> 
 </div>
      </section>
      <MySkillsBar/>
     <ProjectCard image={experienciaSVG} text="Experiencia"/> 
    </body>
  )
}

export default App
