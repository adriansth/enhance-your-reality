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
               animation: animate 14s linear infinite;
           }
           
           
           
           
           .background li:nth-child(0) {
               left: 61%;
               width: 162px;
               height: 162px;
               bottom: -162px;
               animation-delay: 1s;
           }
           .background li:nth-child(1) {
               left: 78%;
               width: 130px;
               height: 130px;
               bottom: -130px;
               animation-delay: 3s;
           }
           .background li:nth-child(2) {
               left: 35%;
               width: 87px;
               height: 87px;
               bottom: -87px;
               animation-delay: 6s;
           }
           .background li:nth-child(3) {
               left: 46%;
               width: 172px;
               height: 172px;
               bottom: -172px;
               animation-delay: 3s;
           }
           .background li:nth-child(4) {
               left: 87%;
               width: 45px;
               height: 45px;
               bottom: -45px;
               animation-delay: 2s;
           }
           .background li:nth-child(5) {
               left: 38%;
               width: 75px;
               height: 75px;
               bottom: -75px;
               animation-delay: 12s;
           }
           .background li:nth-child(6) {
               left: 80%;
               width: 71px;
               height: 71px;
               bottom: -71px;
               animation-delay: 8s;
           }
           .background li:nth-child(7) {
               left: 34%;
               width: 153px;
               height: 153px;
               bottom: -153px;
               animation-delay: 2s;
           }
           .background li:nth-child(8) {
               left: 40%;
               width: 103px;
               height: 103px;
               bottom: -103px;
               animation-delay: 23s;
           }
           .background li:nth-child(9) {
               left: 3%;
               width: 69px;
               height: 69px;
               bottom: -69px;
               animation-delay: 2s;
           }
           .background li:nth-child(10) {
               left: 46%;
               width: 56px;
               height: 56px;
               bottom: -56px;
               animation-delay: 49s;
           }
           .background li:nth-child(11) {
               left: 76%;
               width: 173px;
               height: 173px;
               bottom: -173px;
               animation-delay: 21s;
           }
           .background li:nth-child(12) {
               left: 75%;
               width: 72px;
               height: 72px;
               bottom: -72px;
               animation-delay: 59s;
           }
           .background li:nth-child(13) {
               left: 2%;
               width: 47px;
               height: 47px;
               bottom: -47px;
               animation-delay: 20s;
           }
           .background li:nth-child(14) {
               left: 49%;
               width: 91px;
               height: 91px;
               bottom: -91px;
               animation-delay: 24s;
           }
           .background li:nth-child(15) {
               left: 62%;
               width: 79px;
               height: 79px;
               bottom: -79px;
               animation-delay: 29s;
           }
           .background li:nth-child(16) {
               left: 53%;
               width: 88px;
               height: 88px;
               bottom: -88px;
               animation-delay: 71s;
           }
           .background li:nth-child(17) {
               left: 68%;
               width: 177px;
               height: 177px;
               bottom: -177px;
               animation-delay: 47s;
           }
           .background li:nth-child(18) {
               left: 24%;
               width: 72px;
               height: 72px;
               bottom: -72px;
               animation-delay: 4s;
           }
           .background li:nth-child(19) {
               left: 2%;
               width: 191px;
               height: 191px;
               bottom: -191px;
               animation-delay: 39s;
           }
           .background li:nth-child(20) {
               left: 64%;
               width: 174px;
               height: 174px;
               bottom: -174px;
               animation-delay: 92s;
           }
           .background li:nth-child(21) {
               left: 33%;
               width: 186px;
               height: 186px;
               bottom: -186px;
               animation-delay: 26s;
           }
           .background li:nth-child(22) {
               left: 46%;
               width: 82px;
               height: 82px;
               bottom: -82px;
               animation-delay: 82s;
           }
           .background li:nth-child(23) {
               left: 9%;
               width: 168px;
               height: 168px;
               bottom: -168px;
               animation-delay: 18s;
           }
           .background li:nth-child(24) {
               left: 75%;
               width: 62px;
               height: 62px;
               bottom: -62px;
               animation-delay: 72s;
           }
         `}</style>
      </div>
   );
}