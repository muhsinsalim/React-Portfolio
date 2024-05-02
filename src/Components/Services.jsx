

const Services = () => {
  return (
    <div id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Skills</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 cursor-pointer "> 
          <h2 data-aos="fade-right" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl h-36 w-44 border-2  b_glow">MongoDB</h2>
          <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl h-36 w-44 border-2  b_glow">EXPRESS JS</h2>
          <h2 data-aos="fade-right" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl h-36 w-44 border-2  b_glow">REACT</h2>
          <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-50 rounded-3xl h-36 w-44 border-2 b_glow ">NODE JS</h2>
         

      </div>
        
    </div>
  )
}

export default Services
