// icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AboutWidgets() {
  return (
    <div className="w-screen md:h-screen flex flex-col">
      {/* row 1 */}
      <div className="w-full md:h-[50vh] flex flex-col md:flex-row">
        {/* widget 1 */}
        <div className="w-full md:w-[33.3vw] h-full bg-violet-500 flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20">
          <h2 className="text-white font-bold text-2xl xl:text-6xl">TRABAJO</h2>
        </div>
        {/* widget 2 */}
        <div className="w-full md:w-[33.3vw] h-full bg-slate-100 flex flex-col gap-y-5 items-start justify-center p-10 sm:p-20 md:p-10 xl:p-20">
          <h2 className="text-4xl xl:text-5xl font-bold w-full">ÉXITO</h2>
          <p className="text-gray-500 font-light text-sm xl:text-md">
            Nuestro trabajo ha incrementado la reputación y presencia online de
            nuestros clientes. Combinamos servicios de identidad de marca,
            marketing digital y desarrollo web para que nuestros clientes no
            tengan que preocuparse por lo difícil que puede llegar a ser.
          </p>
          <button className="text-sm xl:text-lg bg-violet-900 px-5 xl:px-10 py-3 xl:py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg rounded-lg">
            <span>Ver más</span>
            <ChevronRightIcon className="w-3 xl:w-5" />
          </button>
        </div>
        {/* widget 3 */}
        <div className="w-full md:w-[33.4vw] h-full bg-white flex flex-row md:flex-col xl:flex-row gap-y-5 items-center justify-around md:justify-center xl:justify-around p-10 sm:p-20 md:p-10 2xl:p-20">
          {/* metrics */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-violet-900">2</span>
            <span className="font-bold">PROYECTOS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-violet-900">2</span>
            <span className="font-bold">SITIOS WEB</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold flex text-violet-900">2</span>
            <span className="font-bold">CLIENTES</span>
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
            <div className="w-[67%] flex justify-between font-bold text-xs lg:text-md">
              <span>DISEÑO</span>
              <span>67%</span>
            </div>
            <div className="w-full flex">
              <div className="w-[67%] h-2 bg-violet-900"></div>
              <div className="w-[33%] h-2 bg-slate-200"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-[90%] flex justify-between font-bold text-xs lg:text-md">
              <span>MARKETING</span>
              <span>90%</span>
            </div>
            <div className="w-full flex">
              <div className="w-[90%] h-2 bg-violet-900"></div>
              <div className="w-[10%] h-2 bg-slate-200"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-[81%] flex justify-between font-bold text-xs lg:text-md">
              <span>DESARROLLO</span>
              <span>81%</span>
            </div>
            <div className="w-full flex">
              <div className="w-[81%] h-2 bg-violet-900"></div>
              <div className="w-[19%] h-2 bg-slate-200"></div>
            </div>
          </div>
        </div>
        {/* widget 3 */}
        <div className="w-full md:w-[33.4vw] h-full bg-slate-100 flex flex-col items-start justify-center p-10 sm:p-20 md:p-10 xl:p-20 gap-y-5">
          <h2 className="text-4xl xl:text-5xl font-bold w-full">
            REDES SOCIALES
          </h2>
          <p className="text-gray-500 font-light text-sm xl:text-md">
            Mantenemos nuestras redes sociales actualizadas con avances, diseños
            y más. ¡Contáctanos!
          </p>
          <button className="text-sm xl:text-lg bg-violet-900 px-5 xl:px-10 py-3 xl:py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg rounded-lg">
            <span>Ver más</span>
            <ChevronRightIcon className="w-3 xl:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
