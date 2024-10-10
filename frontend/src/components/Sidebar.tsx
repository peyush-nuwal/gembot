import { IoChatbubbleOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
const Sidebar = () => {

    const history = {
        thisMonth: [
            { id: 1, prompt: "What type of jewelry makes the best anniversary gift?" },
            { id: 2, prompt: "What jewelry can I gift my sister for her birthday that she'll love?" },
            { id: 3, prompt: "What unique pieces of jewelry can I give as an anniversary gift?" },
            { id: 4, prompt: "What personalized jewelry options are great for a meaningful gift?" },
            { id: 5, prompt: "What trendy jewelry pieces should I consider gifting a bride?" },
            { id: 6, prompt: "What elegant jewelry pieces should I consider for a groom's gift?" },
            { id: 7, prompt: "What cultural jewelry options are perfect for a boy's special occasion?" },
          
        ],
        yesterday: [
            { id: 1, prompt: "What unique pieces of jewelry can I give as an anniversary gift?" },
            { id: 2, prompt: "What personalized jewelry options are great for a meaningful gift?" },
            { id: 3, prompt: "What trendy jewelry pieces should I consider gifting a bride?" },
            { id: 4, prompt: "What elegant jewelry pieces should I consider for a groom's gift?" },
        ],
    };

  return (
    <div className='bg-white w-[20%] h-[95vh] rounded-xl'>
          <div className="flexCenter  gap-2 px-3 py-4 ">
        <svg viewBox="100 -100 350 163.599654961642" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(0.24866564024442467,0,0,0.24866564024442467,101.04030080714212,-7.484833494755252)" fill="#5662F6">
    <g transform="translate(0.000000,600.000000) scale(0.237000,-0.237000)" fill="#5662F6" stroke="none">
      <path d="M3823 5689 c-157 -20 -367 -116 -546 -249 -133 -99 -333 -292 -440 -425 -141 -175 -270 -385 -348 -564 l-36 -84 34 -96 c72 -201 117 -414 132 -623 4 -69 11 -131 15 -137 5 -7 41 -11 95 -11 101 0 206 24 319 72 l76 33 2 70 c6 192 135 340 391 450 74 32 185 65 265 79 42 8 81 52 183 211 400 620 402 1210 4 1275 -35 5 -68 9 -74 9 -5 -1 -38 -5 -72 -10z"></path>
      <path d="M1325 5338 c-118 -44 -207 -165 -257 -349 -21 -76 -23 -106 -23 -299 0 -182 4 -232 23 -326 65 -325 166 -591 321 -852 105 -176 168 -255 211 -263 279 -56 495 -124 675 -214 l127 -62 39 59 c61 96 96 208 114 364 l7 62 -47 23 c-57 29 -125 100 -159 168 -46 89 -59 169 -52 321 5 134 13 177 56 322 l22 76 -45 101 c-100 222 -235 431 -382 588 -105 113 -192 180 -313 241 -90 45 -98 46 -190 49 -54 1 -110 -2 -127 -9z"></path>
      <path d="M3953 4166 l-92 -11 -64 -75 c-144 -168 -335 -338 -499 -444 -56 -36 -88 -64 -88 -75 0 -25 66 -130 122 -195 26 -30 84 -82 128 -115 l81 -61 37 25 c58 38 121 57 197 57 179 2 351 -86 543 -278 l102 -103 111 -12 c144 -15 485 -6 602 15 143 27 256 63 367 118 132 64 234 160 269 252 105 282 -205 604 -758 786 -334 110 -741 155 -1058 116z"></path>
      <path d="M995 3210 c-409 -35 -713 -176 -806 -374 -145 -307 253 -682 907 -852 254 -66 564 -95 809 -76 85 7 161 15 169 18 8 3 58 54 110 114 145 165 330 323 496 426 33 20 60 42 60 49 0 6 -14 40 -31 74 -36 72 -164 208 -247 263 l-53 36 -71 -37 c-69 -35 -74 -36 -182 -36 -105 0 -115 2 -192 36 -119 52 -217 122 -332 237 l-104 103 -71 8 c-116 15 -354 20 -462 11z"></path>
      <path d="M3519 3068 c-63 -85 -110 -229 -124 -376 l-7 -67 46 -24 c57 -30 126 -103 160 -169 75 -149 75 -369 -1 -625 l-26 -87 29 -72 c16 -39 59 -128 96 -196 192 -351 431 -600 670 -694 78 -32 225 -32 289 0 103 51 187 173 230 337 30 113 37 357 15 520 -39 298 -147 617 -302 897 -55 98 -105 175 -198 301 -9 11 -41 22 -92 32 -238 42 -449 111 -644 210 l-110 55 -31 -42z"></path>
      <path d="M3135 2580 c-68 -10 -156 -36 -241 -72 l-72 -30 -4 -86 c-3 -68 -10 -98 -30 -138 -94 -181 -310 -314 -609 -374 -55 -11 -57 -13 -111 -88 -428 -600 -513 -1211 -191 -1369 46 -22 74 -28 147 -31 265 -12 586 157 901 472 176 176 305 343 425 551 58 100 140 276 140 301 0 9 -14 55 -31 102 -71 200 -118 433 -134 663 l-7 97 -45 6 c-52 7 -68 6 -138 -4z"></path>
    </g>
  </g>
</svg>
            <h1 className="font-bold text-xl">Gembot</h1>
           </div>

           <History history={history}/>

           <div className="justifyBetween px-3 pb-2">
             <div className="flex items-center gap-2">
             <div className="w-8 h-8 overflow-hidden object-cover object-center rounded-full">
                <img src="profile.jpeg" alt=""  className="w-full h-full "/>
             </div>
             <h1 className="text-base font-medium text-gray-500 cursor-pointer">angelo</h1> 
             </div>
            
            <abbr title="Menu" className=""> 
                <CiMenuKebab className="cursor-pointer"/>
            </abbr>
           </div>
    </div>
  )
}

export default Sidebar

interface historyProps{
    history:{
         thisMonth:{id: number,prompt: string}[],
         yesterday: { id: number; prompt: string }[];
    }
}
const History=({history}:historyProps)=>{

  

    return(
         <div className="px-2 py-4 overflow-y-auto flex flex-col gap-2 h-[80%]" >
           <div>
           
           <h2 className="text-md font-semibold ">This Month</h2>
             <div className="mt-1">
             {
                history.thisMonth.map((item,index)=>(
                   <div className="flex items-center gap-2 hover:bg-offwhite hover:rounded-lg px-[2px]" key={item.id||index}> 
                   <IoChatbubbleOutline className="text-3xl" />  
                   <h4 className=" text-sm overflow-hidden whitespace-nowrap max-w-full mb-[2px] cursor-pointer text-gray-400  ">{item.prompt}</h4>
                   </div>
                ))
             }
             
             </div>
           </div>
           
           <div>
           
           <h2 className="text-base font-semibold ">yesterday</h2>
             <div className="mt-1">
             {
                history.yesterday.map((item,index)=>(
                   <div className="flex items-center gap-2 hover:bg-offwhite hover:rounded-lg px-[2px]" key={item.id||index}> 
                   <IoChatbubbleOutline className="text-3xl" />  
                   <h4 className=" text-sm overflow-hidden whitespace-nowrap max-w-full mb-[2px] cursor-pointer text-gray-400  ">{item.prompt}</h4>
                   </div>
                ))
             }
             
             </div>
           </div>
            
         </div>
    )
}