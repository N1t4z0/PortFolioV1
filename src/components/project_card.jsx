function ProjectCard({ image, text }) {

    return (
<article className="bg-white font-inter text-gray-400 font-medium rounded-3xl border-t-2 border-b-2 border-gray-200 mx-auto py-5 flex flex-col items-center justify-between w-272 h-240 ">
    <div className="w-full h-3/4">
        <img src={image} alt="" className="w-full h-full object-cover"/>
    </div>
    <div className="w-full h-1/4 flex items-center justify-center">
       <span>{text}</span> 
    </div>
</article>
    )
}
  
export default ProjectCard