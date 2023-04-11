export default function MainBackground() {
   return(
      <div className='w-full h-full'>
         <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
         <style jsx global>{`
            @keyframes animate {
                0%{
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                    border-radius: 0;
                }
                100%{
                    transform: translateY(-1000px) rotate(720deg);
                    opacity: 0;
                    border-radius: 50%;
                }
            }
            
            .background {
                position: fixed;
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                margin: 0;
                padding: 0;
                background: #4c1d95;
                overflow: hidden;
            }
            .background li {
                position: absolute;
                display: block;
                list-style: none;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.2);
                animation: animate 7s linear infinite;
            }
            
            
            
            
            .background li:nth-child(0) {
                left: 73%;
                width: 47px;
                height: 47px;
                bottom: -47px;
                animation-delay: 1s;
            }
            .background li:nth-child(1) {
                left: 21%;
                width: 130px;
                height: 130px;
                bottom: -130px;
                animation-delay: 3s;
            }
            .background li:nth-child(2) {
                left: 9%;
                width: 48px;
                height: 48px;
                bottom: -48px;
                animation-delay: 10s;
            }
            .background li:nth-child(3) {
                left: 38%;
                width: 72px;
                height: 72px;
                bottom: -72px;
                animation-delay: 11s;
            }
            .background li:nth-child(4) {
                left: 23%;
                width: 126px;
                height: 126px;
                bottom: -126px;
                animation-delay: 15s;
            }
            .background li:nth-child(5) {
                left: 3%;
                width: 63px;
                height: 63px;
                bottom: -63px;
                animation-delay: 16s;
            }
            .background li:nth-child(6) {
                left: 34%;
                width: 121px;
                height: 121px;
                bottom: -121px;
                animation-delay: 23s;
            }
            .background li:nth-child(7) {
                left: 89%;
                width: 171px;
                height: 171px;
                bottom: -171px;
                animation-delay: 4s;
            }
            .background li:nth-child(8) {
                left: 55%;
                width: 171px;
                height: 171px;
                bottom: -171px;
                animation-delay: 18s;
            }
            .background li:nth-child(9) {
                left: 68%;
                width: 137px;
                height: 137px;
                bottom: -137px;
                animation-delay: 2s;
            }
            .background li:nth-child(10) {
                left: 75%;
                width: 87px;
                height: 87px;
                bottom: -87px;
                animation-delay: 17s;
            }
            .background li:nth-child(11) {
                left: 18%;
                width: 159px;
                height: 159px;
                bottom: -159px;
                animation-delay: 1s;
            }
            .background li:nth-child(12) {
                left: 70%;
                width: 132px;
                height: 132px;
                bottom: -132px;
                animation-delay: 1s;
            }
            .background li:nth-child(13) {
                left: 77%;
                width: 163px;
                height: 163px;
                bottom: -163px;
                animation-delay: 55s;
            }
            .background li:nth-child(14) {
                left: 40%;
                width: 80px;
                height: 80px;
                bottom: -80px;
                animation-delay: 13s;
            }
            .background li:nth-child(15) {
                left: 37%;
                width: 87px;
                height: 87px;
                bottom: -87px;
                animation-delay: 48s;
            }
            .background li:nth-child(16) {
                left: 48%;
                width: 149px;
                height: 149px;
                bottom: -149px;
                animation-delay: 79s;
            }
            .background li:nth-child(17) {
                left: 27%;
                width: 192px;
                height: 192px;
                bottom: -192px;
                animation-delay: 21s;
            }
            .background li:nth-child(18) {
                left: 27%;
                width: 130px;
                height: 130px;
                bottom: -130px;
                animation-delay: 66s;
            }
            .background li:nth-child(19) {
                left: 88%;
                width: 177px;
                height: 177px;
                bottom: -177px;
                animation-delay: 41s;
            }
            .background li:nth-child(20) {
                left: 43%;
                width: 188px;
                height: 188px;
                bottom: -188px;
                animation-delay: 20s;
            }
            .background li:nth-child(21) {
                left: 73%;
                width: 95px;
                height: 95px;
                bottom: -95px;
                animation-delay: 96s;
            }
            .background li:nth-child(22) {
                left: 20%;
                width: 182px;
                height: 182px;
                bottom: -182px;
                animation-delay: 70s;
            }
            .background li:nth-child(23) {
                left: 79%;
                width: 101px;
                height: 101px;
                bottom: -101px;
                animation-delay: 87s;
            }
            .background li:nth-child(24) {
                left: 68%;
                width: 199px;
                height: 199px;
                bottom: -199px;
                animation-delay: 79s;
            }
         `}</style>
      </div>
   );
}