// components 
import MainBackground from "../home/MainBackground";

export default function AboutImage() {
     return(
          <div className='w-screen h-[30vh] relative'>
               <div className='w-full h-full absolute z-[-10]'>
                    <MainBackground />
               </div>
          </div>
     );
}