import imagen1  from '../assets/imagen1.png';
function MySkillsBar() {

    return (
        <article className="bg-white font-inter text-gray-400 font-medium rounded-3xl border-t-2 border-b-2 border-gray-200 mx-auto py-5 flex flex-col items-center  w-142 h-240 ">
    <div className="flex flex-wrap justify-center ">
        <img src={imagen1} alt="Imagen 1" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 2" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 3" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 4" className="w-24 h-24 flex-shrink-0" />
    </div>
    <div className="flex flex-wrap justify-center ">
        <img src={imagen1} alt="Imagen 5" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 6" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 7" className="w-24 h-24 flex-shrink-0" />
        <img src={imagen1} alt="Imagen 8" className="w-24 h-24 flex-shrink-0" />
    </div>
    <p className="text-center flex-grow ">Aquí va tu texto</p>
</article>
    )
  }
  
  export default MySkillsBar