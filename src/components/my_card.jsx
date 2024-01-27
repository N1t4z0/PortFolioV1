import Nitro from '../assets/nito.png'

function MyCard() {

    return (
<article className="bg-white font-inter text-gray-400 font-medium rounded-3xl border-t-2 border-b-2 border-gray-200 mx-auto py-5 max-h-15 flex flex-row justify-center space-x-10 w-142 h-82">
   <img src={Nitro} className='h-56 w-56  rounded-tl-3xl rounded-br-3xl object-cover' />
      <section>
        <p className='my-3'>Desarrollador FullStack</p>
        <span className='text-black text-2xl font-extrabold max-w-64 '>Agustin Del Percio</span>
        <p className='max-w-64  font-medium text-md my-1'>Desarrollador fullStack en búsqueda de desafíos para impulsar mi creatividad y mejorar constantemente.</p>
      </section>
    </article>
    )
  }
  
  export default MyCard