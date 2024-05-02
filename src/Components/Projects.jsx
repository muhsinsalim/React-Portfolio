import img1 from "../assets/calculator.jpg";
import img2 from "../assets/game.jpg"

const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center gap-5">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"> Projects</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-20 cursor-pointer ">
        <img data-aos="fade-up"  height={250} width={250} className="flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl  border-2 p-1 "  src={img1}alt=""/>
        <img data-aos="fade-down"  height={250} width={250}  className="flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl  border-2 p-1" src={img2} alt=""/>
        
      </div>
    </div>
  )
}

export default Projects

