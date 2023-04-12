// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// next
import Image from 'next/image';
import Link from 'next/link';
// assets 
import twitter from '../../media/twitter.png';
import instagram from '../../media/instagram.png';
import linkedin from '../../media/linkedin.png';
import facebook from '../../media/facebook.png';
// hooks 
import { useState, useEffect } from 'react'; 
// redux 
import { useDispatch, useSelector } from 'react-redux';

export default function Contact() {

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

   return(
      <div className='bg-white w-screen py-20 px-10 md:px-20 flex flex-col md:flex-row justify-between'>
         {/* contact form */}
         <form className='w-full md:w-[45%] pb-20 md:pb-0' onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row gap-y-5'>
               <input 
                  name='name'
                  type="text"
                  placeholder='Nombre Completo'
                  className='placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors'
                  required
                  onChange={(e) => setName(e.target.value)}
               />
               <input
                  name='email'
                  type="text"
                  placeholder='Email'
                  className='placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors'
                  required
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className='flex flex-col sm:flex-row gap-y-5'>
               <input 
                  name='subject'
                  type="text"
                  placeholder='Asunto'
                  className='placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors'
                  required
                  onChange={(e) => setSubject(e.target.value)}
               />
               <input 
                  name='phone'
                  type="text"
                  placeholder='Número telefónico'
                  className='placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors'
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
                  placeholder='Mensaje'
                  className='placeholder:text-sm border-b-2 border-gray-400 focus:outline-none p-5 w-full focus:border-black transition-colors'
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  >
               </textarea>
            </div>
            <div>
               {
                  submitted ? <span className='text-green-500'>¡Mensaje enviado! Pronto nos pondremos en contacto contigo.</span> :
                  <button type='submit' className='bg-red-500 w-full py-5 flex justify-center items-center gap-x-5 shadow-lg hover:bg-sky-400 transition-colors rounded-lg'>
                     <span className='text-white font-semibold'>Enviar</span>
                     <ChevronRightIcon className='w-5 text-white' />
                  </button>
               }
            </div>
         </form>
         {/* contact info */}
         <div className='w-full md:w-[45%] flex flex-col gap-y-5'>
            <h2 className='text-3xl md:text-5xl font-semibold'>Contáctanos</h2>
            <p className='font-light text-gray-700 text-xl text-justify'>Para adquisición de alguno de nuestros servicios, dudas o más información; utiliza este formulario de contacto. Nosotros nos pondremos en contacto contigo al correo proporcionado y abriremos una conversación con respecto a tus inquietudes.</p>
            <div className='flex flex-col'>
               <span className='text-xl font-semibold text-violet-900'>
                  contacto@enhanceyoureality.com
               </span>
               <div className='w-full flex justify-start gap-x-3 py-10'>
                  <Link href='https://www.instagram.com/enhanceyoureality/' target='_blank'>
                     <Image src={instagram} alt="" className='hover:opacity-50 cursor-pointer' />
                  </Link>
                  <Link href='https://linkedin.com/company/enhance-your-reality-%C2%A0q%C3%BCu' target='_blank'>
                     <Image src={linkedin} alt="" className='hover:opacity-50 cursor-pointer' />
                  </Link>
                  <Link href='https://twitter.com/enhanceureality' target='_blank'>
                     <Image src={twitter} alt="" className='hover:opacity-50 cursor-pointer' />
                  </Link>
                  <Link href='https://www.facebook.com/enhanceyoureality'target='_blank'>
                     <Image src={facebook} alt="" className='hover:opacity-50 cursor-pointer' />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}