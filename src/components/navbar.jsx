

function NavBar() {

    return (
    <div className="bg-white font-inter text-gray-400 font-medium rounded-t-full rounded-b-full border-t-4 border-b-4 border-white mx-auto max-w-lg py-2">
        <ul className="flex flex-row place-content-around">
            <li><a href="#home">Acerca de mí</a></li>
            <li><a href="#about">Contáctame</a></li>
            <li><a href="#projects">Descargar CV</a></li>
        </ul>
    </div>
    )
  }
  
  export default NavBar