
import './index.scss';
import React from "react";
const Index= () => {
 



const stars=document.querySelectorAll('#star');

stars.forEach(star=>{
    let duration1=Math.random()*(1.2-0.6)+0.6;
    star.style.animation=`stars ${duration1}s  infinite linear`;
});




function loadHandler(){
   window.querySelector(".preloader").classList.add("n");
}

return (
    
     
<div id="react-container" onLoad={loadHandler}>


<div className="preloader"> 

 <svg className="outer-space" width="769" height="780" viewBox="0 0 769 780" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g id="outer-space">
     <mask id="mask0_2_126"   maskUnits="userSpaceOnUse" x="0" y="0" width="770" height="780">
     <path id="background" d="M769 391.892C769.085 485.876 735.998 576.756 675.78 647.934C615.563 719.111 532.234 765.835 441.012 779.574H336.871C336.708 779.719 330.935 780 330.935 780C329.966 779.865 328.987 779.719 328.018 779.574C320.604 778.462 313.257 777.134 305.978 775.593C277.477 769.579 249.748 760.249 223.336 747.786C223.061 747.661 222.796 747.526 222.52 747.401C207.802 740.439 193.538 732.519 179.818 723.69C179.471 723.472 179.134 723.254 178.798 723.035C178.216 722.661 177.645 722.297 177.074 721.913C176.89 721.798 176.707 721.684 176.523 721.559C164.257 713.506 152.451 704.746 141.164 695.322C140.613 694.875 140.062 694.408 139.511 693.95C137.298 692.079 135.105 690.187 132.933 688.274C132.913 688.264 132.902 688.243 132.882 688.233C121.781 678.428 111.236 667.988 101.296 656.965C101.265 656.923 101.224 656.892 101.194 656.85C57.5298 608.442 26.5457 549.594 11.1067 485.748C10.9843 485.291 10.8823 484.844 10.7701 484.387C3.59604 454.099 -0.0193641 423.05 1.64684e-05 391.892C1.64684e-05 175.457 172.148 0 384.5 0C596.852 0 769 175.457 769 391.892Z" fill="#202125"/>
     </mask>
     <g mask="url(#mask0_2_126)">
     <rect id="Rectangle" width="769" height="779" fill="#202125"/>
     <path id="shooting-star" opacity="0.8" d="M420.047 449.705L453.673 409.582L487.3 369.459L506.282 346.808C507.333 345.555 505.712 343.6 504.662 344.853L471.035 384.976L437.409 425.1L418.426 447.75C417.376 449.003 418.997 450.958 420.047 449.705Z" fill="url(#paint0_linear_2_126)"/>
     <path id="shooting-star" opacity="0.8" d="M364.973 227.252L398.599 187.129L432.225 147.005L451.208 124.355C452.258 123.102 450.638 121.147 449.587 122.4L415.961 162.523L382.334 202.646L363.352 225.297C362.301 226.55 363.922 228.505 364.973 227.252Z" fill="url(#paint1_linear_2_126)"/>
     <path id="moon" d="M149.856 323.326C187.141 323.326 217.366 292.52 217.366 254.518C217.366 216.517 187.141 185.711 149.856 185.711C112.572 185.711 82.3469 216.517 82.3469 254.518C82.3469 292.52 112.572 323.326 149.856 323.326Z" fill="#E6E6E6"/>
     <path id="circle" d="M143.216 215.039C147.495 215.039 150.963 211.504 150.963 207.143C150.963 202.782 147.495 199.247 143.216 199.247C138.938 199.247 135.469 202.782 135.469 207.143C135.469 211.504 138.938 215.039 143.216 215.039Z" fill="#CBCBCB"/>
     <path id="circle" d="M156.497 293.998C160.775 293.998 164.244 290.463 164.244 286.102C164.244 281.741 160.775 278.206 156.497 278.206C152.218 278.206 148.75 281.741 148.75 286.102C148.75 290.463 152.218 293.998 156.497 293.998Z" fill="#CBCBCB"/>
     <path id="circle" d="M186.378 247.75C189.434 247.75 191.911 245.225 191.911 242.111C191.911 238.996 189.434 236.471 186.378 236.471C183.322 236.471 180.844 238.996 180.844 242.111C180.844 245.225 183.322 247.75 186.378 247.75Z" fill="#CBCBCB"/>
     <path id="circle" d="M123.295 278.206C133.075 278.206 141.003 270.126 141.003 260.158C141.003 250.191 133.075 242.111 123.295 242.111C113.516 242.111 105.588 250.191 105.588 260.158C105.588 270.126 113.516 278.206 123.295 278.206Z" fill="#CBCBCB"/>
     <path id="star" d="M257.028 366.725C259.043 366.725 260.676 365.06 260.676 363.007C260.676 360.954 259.043 359.289 257.028 359.289C255.014 359.289 253.381 360.954 253.381 363.007C253.381 365.06 255.014 366.725 257.028 366.725Z" fill="#6C63FF"/>
     <path id="star" d="M464.398 199.717C466.413 199.717 468.046 198.052 468.046 195.999C468.046 193.946 466.413 192.281 464.398 192.281C462.384 192.281 460.751 193.946 460.751 195.999C460.751 198.052 462.384 199.717 464.398 199.717Z" fill="#6C63FF"/>
     <path id="star" d="M349.088 104.528C345.149 107.203 341.118 100.836 345.133 98.2803C349.071 95.6056 353.103 101.972 349.088 104.528Z" fill="#E6E6E6"/>
     <path id="star" d="M288.642 416.937L286.822 418.78L285.013 416.924L283.8 418.153L285.608 420.008L283.788 421.851L284.993 423.088L286.814 421.245L288.622 423.101L289.835 421.872L288.027 420.017L289.848 418.174L288.642 416.937Z" fill="#E6E6E6"/>
     <path id="star" d="M309.803 307.705L307.982 309.548L306.174 307.692L304.96 308.921L306.769 310.777L304.948 312.62L306.154 313.857L307.974 312.014L309.783 313.869L310.996 312.64L309.188 310.785L311.008 308.942L309.803 307.705Z" fill="#E6E6E6"/>
     <path id="star" d="M120.916 381.214L118.41 380.654L118.958 378.099L117.288 377.726L116.738 380.281L114.232 379.721L113.866 381.424L116.372 381.984L115.823 384.538L117.494 384.912L118.044 382.357L120.549 382.917L120.916 381.214Z" fill="#E6E6E6"/>
     <path id="star" d="M504.396 74.5613L501.89 74.0011L502.438 71.446L500.768 71.0728L500.218 73.6279L497.712 73.0686L497.346 74.7713L499.852 75.3316L499.303 77.8857L500.974 78.2589L501.524 75.7038L504.03 76.264L504.396 74.5613Z" fill="#E6E6E6"/>
     <path id="star" d="M700.215 239.842L697.709 239.282L698.258 236.727L696.587 236.353L696.038 238.909L693.532 238.349L693.166 240.052L695.672 240.612L695.123 243.166L696.794 243.54L697.343 240.984L699.849 241.545L700.215 239.842Z" fill="#E6E6E6"/>
     <path id="star" d="M226.886 114.871L224.38 114.311L224.928 111.757L223.258 111.384L222.708 113.938L220.201 113.378L219.835 115.081L222.342 115.641L221.793 118.196L223.464 118.569L224.014 116.015L226.519 116.574L226.886 114.871Z" fill="#E6E6E6"/>
     <path id="star" d="M437.083 252.316L434.577 251.756L435.125 249.201L433.455 248.827L432.905 251.383L430.399 250.823L430.033 252.526L432.539 253.086L431.99 255.64L433.661 256.014L434.211 253.458L436.717 254.019L437.083 252.316Z" fill="#E6E6E6"/>
     <path id="star" d="M533.874 206.347L531.368 205.787L531.916 203.233L530.246 202.86L529.696 205.414L527.189 204.854L526.823 206.557L529.33 207.117L528.781 209.673L530.452 210.045L531.002 207.491L533.508 208.05L533.874 206.347Z" fill="#E6E6E6"/>
     <path id="launching-pad" d="M530.212 737.006V756.601C503.12 767.452 474.9 775.111 446.102 779.428H320.655C317.442 778.836 314.239 778.202 311.068 777.526V737.006H530.212Z" fill="#2F2E41"/>
     </g>
     </g>
     <defs>
     <linearGradient id="paint0_linear_2_126" x1="418.086" y1="397.279" x2="506.623" y2="397.279" gradientUnits="userSpaceOnUse">
     <stop stop-color="white"/>
     <stop offset="1" stop-color="white" stop-opacity="0.3"/>
     </linearGradient>
     <linearGradient id="paint1_linear_2_126" x1="363.012" y1="174.826" x2="451.548" y2="174.826" gradientUnits="userSpaceOnUse">
     <stop stop-color="white"/>
     <stop offset="1" stop-color="white" stop-opacity="0.3"/>
     </linearGradient>
     </defs>
     </svg>  
     
     <div className="rocket-container">
         <svg className="rocket" width="192" height="478" viewBox="0 0 192 478" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g id="rocket">
             <path id="Vector" d="M113.91 64.41H79.81V477.95H113.91V64.41Z" fill="#2F2E41"/>
             <path id="Vector" d="M120.031 69.9098H73.8268C73.1562 62.6716 74.8245 55.3818 79.121 48.0342L80.4274 39.1072H112.33L113.835 47.9212C118.305 53.8767 120.037 61.3968 120.031 69.9098Z" fill="#2F2E41"/>
             <path id="Vector" d="M113.318 40.2073H80.3962C80.0636 40.2073 79.7353 40.1318 79.4361 39.9867C79.1368 39.8415 78.8744 39.6305 78.6684 39.3693C78.4625 39.1081 78.3185 38.8036 78.2472 38.4787C78.1759 38.1538 78.1792 37.817 78.2568 37.4936L83.8013 14.3916C83.9166 13.911 84.1904 13.4833 84.5785 13.1773C84.9667 12.8713 85.4465 12.7049 85.9407 12.7049H107.774C108.268 12.7049 108.748 12.8713 109.136 13.1773C109.524 13.4833 109.798 13.911 109.913 14.3916L115.458 37.4936C115.535 37.817 115.538 38.1538 115.467 38.4787C115.396 38.8036 115.252 39.1081 115.046 39.3693C114.84 39.6305 114.578 39.8415 114.278 39.9867C113.979 40.1318 113.651 40.2073 113.318 40.2073Z" fill="#2F2E41"/>
             <path id="Vector" d="M96.86 1.14999C93.7961 1.15357 90.8589 2.37297 88.6934 4.54041C86.5278 6.70784 85.3109 9.64611 85.31 12.71V24.26H108.41V12.71C108.409 9.64611 107.192 6.70784 105.027 4.54041C102.861 2.37297 99.9239 1.15357 96.86 1.14999Z" fill="#2F2E41"/>
             <path id="Vector" d="M98.54 0.600006C96.089 1.26323 93.9243 2.71406 92.3792 4.72894C90.8342 6.74383 89.9946 9.21092 89.99 11.75V11.85C89.623 11.96 89.2908 12.1634 89.0261 12.4404C88.7614 12.7174 88.5732 13.0584 88.48 13.43L82.94 36.54C82.8655 36.8516 82.8604 37.1759 82.9252 37.4897C82.9899 37.8035 83.123 38.0992 83.3148 38.3559C83.5066 38.6126 83.7524 38.824 84.035 38.975C84.3176 39.1261 84.63 39.2131 84.95 39.23L84.91 39.5L84.76 40.5L82.5 47.5C78.21 54.84 77.84 61.71 78.51 68.95H84.49V349.46L6.45001 450.76L12.19 452.08L11.28 453.26L0.450012 450.76L78.49 349.46V68.95L73.5 68.5C72.83 61.26 74.21 54.84 78.5 47.5L78.76 40.5L78.91 39.5L78.95 39.23C78.63 39.2131 78.3176 39.1261 78.035 38.975C77.7524 38.824 77.5066 38.6126 77.3148 38.3559C77.123 38.0992 76.9899 37.8035 76.9252 37.4897C76.8604 37.1759 76.8655 36.8516 76.94 36.54L82.48 13.43C82.5732 13.0584 82.7614 12.7174 83.0261 12.4404C83.2908 12.1634 83.623 11.96 83.99 11.85V11.75C83.9909 8.68611 85.2078 5.74782 87.3734 3.58038C89.5389 1.41295 92.4761 0.193582 95.54 0.190002C96.5537 0.193056 97.5626 0.330935 98.54 0.600006Z" fill="#E6E6E6"/>
             <path id="Vector" d="M112.831 350.109L191.117 451.714L180.29 454.213L119.494 375.927H112.831V350.109Z" fill="#2F2E41"/>
             <path id="Vector" d="M84.49 131.5H78.49V204.5H84.49V131.5Z" fill="#6C63FF"/>
             <path id="Vector" d="M102.95 216.23L102.88 228.61L102.05 378.87L101.95 396.78L101.73 437.14L101.51 477.95H99.31L99.53 437.14L99.74 399.44L99.85 378.5L100.68 228.64L100.75 216.22L102.95 216.23Z" fill="#6C63FF"/>
             <path id="Vector" d="M124.177 374.969H118.594V375.506L178.974 453.255L184.062 452.081L124.177 374.969Z" fill="#E6E6E6"/>
             <path id="Vector" d="M84.051 350.109L5.76501 451.714L16.592 454.213L77.388 375.927H84.051V350.109Z" fill="#2F2E41"/>
             <path id="Vector" d="M84.4937 374.969H78.4937V476.992H84.4937V374.969Z" fill="#E6E6E6"/>
             <path id="Vector" d="M78.49 68.95H72.51C71.84 61.71 73.51 54.42 77.8 47.0799L78.76 40.5L78.91 39.5H84.91L84.76 40.5L83.8 47.08C79.51 54.42 77.84 61.71 78.51 68.95H84.49" fill="#6C63FF"/>
             </g>
         </svg>
     </div>
     <h3 className="title">Your destination is reaching soon...</h3>
</div> 

</div>

);
}

export default Index;