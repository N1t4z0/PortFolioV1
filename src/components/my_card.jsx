import Nitro from '../assets/nito.png'

function MyCard() {

    return (
    <article className="bg-white font-inter text-gray-400 font-medium rounded-t-full rounded-b-full border-t-4 border-b-4 border-white mx-auto py-2 max-w-lg max-h-15 flex flex-row place-content-around">
      <section><img src={Nitro} className='max-h-xs max-w-xs'/></section>
      <section>holaaa</section>
    </article>
    )
  }
  
  export default MyCard