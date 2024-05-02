import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5fbftvo', 'template_3ipcsha', form.current, {
        publicKey: 'uC_vjXBoV0h_oUEtu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('email sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="Contact" className="p-4 lg:p-10 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-10 leading-normal uppercase text-fuchsia-500">Contact  Me</h1>
      <form  className="flex flex-col gap-2 lg:w-1/2" ref={form} onSubmit={sendEmail}  >
        <div className="lg:flex gap-6">
        <input type="text" name='from_name' className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2  text-xl text-slate-500" placeholder="Enter Your Name" />
        <input type="email" name='from_email' className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 text-xl text-slate-500" placeholder="Enter Your Email" />
        </div>
        <textarea name='message' cols="20" rows="10" className="w-full lg:my-3 rounded-lg bg-slate-800 p-4 border-2 text-xl text-white" placeholder="Write Your Message..." ></textarea>
        <button type="submit" value='sent' className=" neno-button-shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg my-6 py-4 px-8 uppercase relative overflow-hidden text-xl text-bold">Submit</button>
        </form>
      
     
     
        
      
      
    </div>
  )
}

export default Contact
