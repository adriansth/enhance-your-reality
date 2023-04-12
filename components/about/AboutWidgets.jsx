// icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";
// next 
import Link from 'next/link';

export default function AboutWidgets() {
  return (
    <div className="w-screen md:h-screen flex flex-col">
      {/* row 1 */}
      <div className="w-full md:h-[50vh] flex flex-col md:flex-row">
        {/* widget 1 */}
        <div className="w-full md:w-[33.3vw] h-full bg-violet-500 flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20">
          <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">TU MEJOR ALIADO</h2>
        </div>
        {/* widget 2 */}
        <div className="w-full md:w-[33.3vw] h-full bg-slate-100 flex flex-col gap-y-5 items-start justify-center p-10 sm:p-20 md:p-10 xl:p-20">
          <h2 className="text-4xl xl:text-5xl font-bold w-full">ÉXITO</h2>
          <p className="text-gray-500 font-light text-sm xl:text-md">
            Nuestro trabajo ha incrementado el alcance y la presencia online de nuestros clientes. Combinamos servicios de identidad corporativa, estrategias de marketing y desarrollo de soluciones web promoviendo soluciones creativas que faciliten las operaciones de nuestros clientes. 
          </p>
          <Link href='/portfolio' className="transition-colors text-sm xl:text-lg bg-violet-900 px-5 xl:px-10 py-3 xl:py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg rounded-lg">
            <span>Ver más</span>
            <ChevronRightIcon className="w-3 xl:w-5" />
          </Link>
        </div>
        {/* widget 3 */}
        <div className="w-full md:w-[33.4vw] h-full bg-white flex flex-col sm:flex-row md:flex-col xl:flex-row gap-y-5 items-center justify-around md:justify-center xl:justify-around p-10 sm:p-20 md:p-10 2xl:p-20">
          {/* metrics */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-violet-900">5</span>
            <span className="text-sm lg:text-md font-bold">PROYECTOS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-violet-900">3</span>
            <span className="text-sm lg:text-md font-bold">SITIOS WEB</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold flex text-violet-900">4</span>
            <span className="text-sm lg:text-md font-bold">CLIENTES</span>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="w-full md:h-[50vh] flex flex-col md:flex-row">
        {/* widget 1 */}
        <div className="w-full md:w-[33.3vw] h-full bg-red-500 flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20">
          <h2 className="text-white font-bold text-2xl xl:text-6xl">
            HABILIDADES
          </h2>
        </div>
        {/* widget 2 */}
        <div className="w-full md:w-[33.3vw] h-full bg-white flex flex-col items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 gap-y-10">
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-[full] flex justify-between font-bold text-xs lg:text-md">
              <span>CREATIVIDAD</span>
              <span>100%</span>
            </div>
            <div className="w-full">
              <div className="w-[full] h-2 bg-violet-900"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-full flex justify-between font-bold text-xs lg:text-md">
              <span>INGENIO</span>
              <span>100%</span>
            </div>
            <div className="w-full">
              <div className="w-full h-2 bg-violet-900"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-full flex justify-between font-bold text-xs lg:text-md">
              <span>TRABAJO EN EQUIPO</span>
              <span>100%</span>
            </div>
            <div className="w-full">
              <div className="w-full h-2 bg-violet-900"></div>
            </div>
          </div>
        </div>
        {/* widget 3 */}
        <div className="w-full md:w-[33.4vw] h-full bg-slate-100 flex flex-col items-start justify-center p-10 sm:p-20 md:p-10 xl:p-20 gap-y-5">
          <h2 className="text-4xl xl:text-5xl font-bold w-full">
            REDES SOCIALES
          </h2>
          <p className="text-gray-500 font-light text-sm xl:text-md">
          Generamos campañas de impacto para que sobresalgas de tu competencia. ¿Quieres saber cómo? ¡Contáctanos!

          </p>
          <Link href='/contact' className="transition-colors text-sm xl:text-lg bg-violet-900 px-5 xl:px-10 py-3 xl:py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg rounded-lg">
            <span>Ver más</span>
            <ChevronRightIcon className="w-3 xl:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
