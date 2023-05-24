// icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
// hooks
import { useState, useEffect } from 'react';
// redux 
import { useDispatch, useSelector } from "react-redux";
// assets
import whatsapp from '../../media/whatsapp.png';
// next
import Image from 'next/image';

export default function ContactForm() {

  const dispatch = useDispatch();
  const submitForm = () => dispatch({ type: 'SUBMITTED' });
  const submitted = useSelector(state => state.formSubmitted);

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');

  const [phoneValidation, setPhoneValidation] = useState(false);
 
     // validate phone number
     const validatePhoneNumber = (num) => {
         const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
         return re.test(num);
     }

     useEffect(() => {
          setPhoneValidation(validatePhoneNumber(phone));
      }, [phone]);

   // submit form
   const handleSubmit = (e) => {
      e.preventDefault();
      if (phoneValidation) {
         fetch("https://formsubmit.co/ajax/contacto@enhanceyoureality.com", {
               method: "POST",
               headers: { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
               },
               body: JSON.stringify({
                  name,
                  email,
                  phone,
                  subject,
                  message,
               })
         })
         .then(response => response.json())
         .then(() => console.log(validatePhoneNumber(phone)))
         .then(() => submitForm())
         .catch(error => console.log(error));
      } else {
         alert('El número telefónico no es válido.');
      }
   }

  return (
    <div className="w-screen py-20 flex items-center px-10 md:px-20 flex-col md:flex-row gap-y-20">
      {/* info */}
      <div className="w-full md:w-[50%] flex flex-col gap-y-5 pr-0 md:pr-10">
        <h2 className="text-3xl md:text-5xl font-semibold">Contáctanos</h2>
        <h3 className="text-md9 md:text-lg">¿Qué puedo hacer por ti?</h3>
        <p className="font-light text-gray-700 text-sm">
          ¿Estás buscando mejorar la presencia en línea de tu empresa o negocio? Complete nuestro formulario y un miembro de nuestro equipo se contactará contigo y junto con nuestros expertos lograremos llevar su presencia empresarial al siguiente nivel. ¡Contáctenos ya!
        </p>
        {/* email */}
        <div className='text-xl font-semibold text-violet-900 flex gap-x-2 items-center'>
          <EnvelopeIcon className='w-5' />
          <span>
            contacto@enhanceyoureality.com
          </span>
          <span className='font-light text-black'>[Si, con una r]</span>
          </div>
          <div className='text-xl font-semibold text-violet-900 flex gap-x-2 items-center'>
            <Image src={whatsapp} className='w-5 h-5 object-cover' />
            <span>+52 55 3949 8680</span>
      </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-[50%]">
        <div className="flex flex-col sm:flex-row gap-x-5">
          <input
            name='name'
            type="text"
            placeholder="Nombre Completo"
            className="placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name='email'
            type="text"
            placeholder="Email"
            className="placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-5">
          <input
            name='subject'
            type="text"
            placeholder="Asunto"
            className="placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            name='phone'
            type="text"
            placeholder="Número telefónico"
            className="placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
            className="placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          {
            submitted ? <span className='text-green-500'>¡Mensaje enviado! Pronto nos pondremos en contacto contigo.</span> :
            <button type='submit' className="rounded-lg bg-red-500 w-full py-5 flex justify-center items-center gap-x-5 shadow-lg hover:bg-sky-400 mt-5 transition-colors">
              <span className="text-white font-semibold">Enviar</span>
              <ChevronRightIcon className="w-5 text-white" />
          </button>
          }
        </div>
      </form>
    </div>
  );
}
