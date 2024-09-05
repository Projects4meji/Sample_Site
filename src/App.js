import React,{useState} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Price from "./components/Price";
import Team from "./components/Team";
import Feedback from "./components/Feedback";
import { cards, pricing, team, location} from "./assets/cards";
import SettingsIcon from '@mui/icons-material/Settings';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';


const date = new Date();
const currentTime = date.getFullYear();


const Tmap = (props) => {
  return(
    <Team
      key={props.id}
      img={props.img}
      name={props.name}
      title={props.title}
    />
  )
};


const Map = (props) =>{
  return(
    <Cards
      key={props.id}
      img={props.img}
      title={props.title}
      text={props.text}
    />
  )
};

const Pmap = (props) =>{
  return(
    <Price
      key={props.id}
      title={props.title}
      price={props.price}
      context={props.context}
      bandWidth={props.bandWidth}
      oSpace={props.oSpace}
      support={props.support}
      domi={props.domi}
      hidden={props.hidden}
    />
  )
};

const Lmap = (props) => {
  return(
    <Feedback
      key={props.id}
      office={props.office}
      street={props.street}
    />
  )
};


function App() {
  
  const [isColor, setColor] = useState(false);
  const handleSettingsClick = () => {
    setColor(!isColor);
  };

  return (
    <div style={{fontFamily:"'Poppins', sans-serif"}}>
      <Navbar />
      <div className="relative text-lg h-screen" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../images/Art.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div id="homeSection" className=" absolute inset-0 bg-gradient-to-br from-indigo-800 from-10% via-transparent to-purple-800 to-90%"/>
          <div className=" py-16">
            <div className="fixed z-50 flex items-center justify-center top-96 p-4 bg-slate-800">
              <button onClick={handleSettingsClick} className="transition-bg duration-800">
                <SettingsIcon fontSize="large"  style={{ color: "#ffffff", animation: "rotate 2s infinite linear", marginLeft: isColor ? '160px' : '0', }}/>
              </button>
              <style>
                {`
                  @keyframes rotate {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}
              </style>
              
            </div>
            <div className="relative z-50 top-28">
            {isColor && (
              <div className="z-60 fixed left-0 bg-white shadow border">
                <div className="p-4">
                  <p className="text-black p-4 font-bold">Select your color</p>
                  <div className="grid grid-flow-col grid-col-3 grid-rows-3 gap-2">
                    <button className="rounded-full py-7 px-2 bg-red-500"/>
                    <button className="rounded-full py-7 px-2 bg-teal-500"/>
                    <button className="rounded-full py-7 px-2 bg-pink-500"/>
                    <button className="rounded-full py-7 px-2 bg-blue-500"/>
                    <button className="rounded-full py-7 px-2 bg-purple-500"/>
                    <button className="rounded-full py-7 px-2 bg-blue-800"/>
                    <button className="rounded-full py-7 px-2 bg-orange-500"/>
                    <button className="rounded-full py-7 px-2 bg-yellow-500"/>
                  </div>
                </div>
              </div>
              )}
              </div>
            
            <div className="z-50 fixed flex items-center justify-center mt-24 top-96 p-4 bg-slate-800">
              <button>
                <BrightnessHighIcon fontSize="large" style={{color:"#ffffff"}}/>
              </button>
            </div>

            <div className="z-50 xl:px-96">
              <div className="flex flex-col text-center items-center justify-center gap-6 px-4 xl:px-52 pt-16">
                <h1 className="text-2xl xl:text-5xl font-extrabold tracking-wider leading-normal py-5 text-white">We help startups launch their products</h1>
                <p className="text-base text-white tracking-wide opacity-45 px-20">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                <div class="flex flex-col items-center justify-center w-full h-full mt-4">
                  <button className="" type="button" style={{ cursor: 'pointer' }}>
                    <img className="w-16 h-16" src="../../images/play-button.png" alt=""/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-40 relative bottom-8">
          <svg width="100%" height="50" viewBox="0 0 2002 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.49999V42L1998.5 40V23H1962L1879 33L1758.5 36L1703 29.5L1304.5 21.5C1285.3 15.5 1183.83 24 1135.5 29L636 35.5C455.2 1.89999 136.667 4.16665 0 9.49999Z" fill="white" fill-opacity="0.1"></path>
            <path opacity="0.1" d="M0 33.5V41.5L1997.5 42V27H1972.5C1585.3 -21.8 1403.17 6.66666 1360.5 27C1299.7 13.4 1035.17 6 910.5 4C856.1 -6.8 597.5 8.5 475 17.5L0 33.5Z" fill="white"></path>
            <path d="M0 31.6689V42.1689L2001.5 41.6689V11.6689L1942.25 18.3143C1910.49 21.8758 1879.21 29.7147 1847.38 32.5593C1799.52 36.8366 1750.41 29.3968 1727 23.6689C1577.8 -8.33114 1367.17 10.3355 1280.5 23.6689C1199.3 40.8689 1126.17 30.8355 1106 23.6689C1023.13 -2.89279 818.252 7.7814 689.669 19.2529C659.224 21.9691 629.271 29.2178 598.77 31.21C559.856 33.7516 520.953 28.0794 502 23.6689C395.2 -8.73115 122.833 15.1689 0 31.6689Z" fill="white"></path>
          </svg>
        </div>
        

      {/*---------------------------------------------- Services ----------------------------------------------*/}
      <section id="servicesSection" className="pt-12 pb-20">
        <div className="text-center xl:px-52 px-20">
          <h2 className="uppercase text-3xl tracking-wider">Our Services</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-3 w-16"></div>
          <p className="text-center text-gray-400 xl:px-72 px-4 mt-8">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 justify-center gap-8 py-10 mx-24">
          {cards.map(Map)}
        </div>
      </section>

      {/*--------------------------------------------- Bullet List ---------------------------------------------*/}
      <section id="featureSection" className="py-20" style={{backgroundColor:"#f8f9fa"}}>
        <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 justify-center items-center px-20" >
          <div className="flex flex-col space-y-8 xl:px-36 px-2 justify-center">
            <h3 className="text-black text-2xl tracking-wide">A digital web design studio creating modern & engaging online experiences</h3>
            <p className="text-gray-400 text-justify text-md xl:stracking-wide">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul className="text-gray-400 leading-10 list-none pl-6">
              <li className="relative before:content-['\2022'] before:block before:w-10 before:h-10 before:absolute before:-left-6 before:text-teal-500">We put a lot of effort in design.</li>
              <li className="relative before:content-['\2022'] before:block before:w-10 before:h-10 before:absolute before:-left-6 before:text-teal-500">The most important ingredient of successful website.</li>
              <li className="relative before:content-['\2022'] before:block before:w-10 before:h-10 before:absolute before:-left-6 before:text-teal-500">Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li className="relative before:content-['\2022'] before:block before:w-10 before:h-10 before:absolute before:-left-6 before:text-teal-500">Submit Your Organization.</li>
            </ul>
            <div>
              <button className="flex items-center gap-2 text-white text-md bg-teal-500 rounded-md p-2 hover:border hover:border-black hover:-translate-y-3 transition-bg duration-300">Learn More 
                <img className="w-4 h-4" src="../../images/arrow.png" alt="arrow"/>
              </button>
            </div> 
          </div>
          <div className="flex justify-center items-center">
            <img className="" src="../../images/stone.png" alt=""/>
          </div>
        </div>
      </section>

      {/*------------------------------------------- Small Gradient -------------------------------------------*/}
      <section className="bg-gradient-to-br from-purple-800 from-45% to-indigo-800">
        <div className="flex flex-col justify-center items-center py-36">
          <h3 className="text-3xl text-white font-bold text-center">Build your dream website today</h3>
          <p className="text-xl text-gray-400 text-center xl:mx-64 px-20 pt-4">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
          <div>
            <button className="bg-white text-black rounded-md p-3 mt-6 mb-12 hover:-translate-y-3 transition-bg duration-300">View Plan & Pricing</button>
          </div>
        </div>
      </section>
      <div className="z-40 relative bottom-10">
        <svg width="100%" height="43" viewBox="0 0 2002 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9.49999V42L1998.5 40V23H1962L1879 33L1758.5 36L1703 29.5L1304.5 21.5C1285.3 15.5 1183.83 24 1135.5 29L636 35.5C455.2 1.89999 136.667 4.16665 0 9.49999Z" fill="white" fill-opacity="0.1"></path>
          <path opacity="0.1" d="M0 33.5V41.5L1997.5 42V27H1972.5C1585.3 -21.8 1403.17 6.66666 1360.5 27C1299.7 13.4 1035.17 6 910.5 4C856.1 -6.8 597.5 8.5 475 17.5L0 33.5Z" fill="white"></path>
          <path d="M0 31.6689V42.1689L2001.5 41.6689V11.6689L1942.25 18.3143C1910.49 21.8758 1879.21 29.7147 1847.38 32.5593C1799.52 36.8366 1750.41 29.3968 1727 23.6689C1577.8 -8.33114 1367.17 10.3355 1280.5 23.6689C1199.3 40.8689 1126.17 30.8355 1106 23.6689C1023.13 -2.89279 818.252 7.7814 689.669 19.2529C659.224 21.9691 629.271 29.2178 598.77 31.21C559.856 33.7516 520.953 28.0794 502 23.6689C395.2 -8.73115 122.833 15.1689 0 31.6689Z" fill="white"></path>
        </svg>
      </div>

      {/*---------------------------------------------- Pricing ----------------------------------------------*/}
      <section id="pricesSection" className="pt-12 pb-20">
        <div className="text-center xl:px-52 px-4">
          <h2 className="uppercase text-3xl tracking-wider">Our Pricing</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-3 w-16"></div>
          <p className="text-center text-gray-400 xl:px-72 px-20 mt-8">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 justify-center xl:mx-96 mx-10 pt-12 pb-20 gap-8">
          {pricing.map(Pmap)}
        </div>
      </section>

      {/*------------------------------------------------ Team ------------------------------------------------*/}
      <section id="teamSection" className="pt-6 md:mx-44 pb-20">
        <div className="text-center xl:px-52 px-4">
          <h2 className="uppercase text-3xl tracking-wider">Behind the People</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-center text-gray-400 xl:px-28 px-16 my-8">It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2  justify-center lg:grid-cols-4 lg:grid-rows-1 xl:mx-36 px-20 lg:px-4 py-8 gap-10">
          {team.map(Tmap)}
        </div>
      </section>

      {/*-------------------------------------------- Work Process --------------------------------------------*/}
      <section className="py-20 xl:px-44 px-4" style={{backgroundColor:"#f8f9fa"}}>
        <div className="text-center xl:px-52 mb-20 pt-12">
          <h2 className="uppercase text-3xl tracking-wider">Work Process</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-center text-gray-400 px-20 my-8">In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the Proin vitae ipsum vel ex finibus semper design starts.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2 text-center items-center mx-20 gap-6 ">
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="pb-4">
              <img className="w-12 h-12" src="../../images/pen.png" alt=""/>
            </div>
            <h4 className="text-xl">Get free quotes</h4>
            <p className="text-sm text-gray-400">Little Blind Text didn’t listen.</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="pb-4">
              <img className="w-12 h-12" src="../../images/pass.png" alt=""/>
            </div>
            <h4 className="text-xl">Get free quotes</h4>
            <p className="text-sm text-gray-400">Little Blind Text didn’t listen.</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="pb-4">
              <img className="w-12 h-12" src="../../images/archery.png" alt=""/>
            </div>
            <h4 className="text-xl">Deliver high quality product</h4>
            <p className="text-sm text-gray-400">When she reached the first hills.</p>
          </div>

          <div className="flex md:col-span-3 justify-center items-center">
            <div className="">
              <button type="button" className="flex items-center gap-2 text-white bg-teal-500 rounded-md py-2 px-5 hover:border hover:border-black hover:-translate-y-3 transition-bg duration-300">Get Started
                <img className="w-4 h-4" src="../../images/arrow.png" alt="arrow"/>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/*----------------------------------------------- Reviews -----------------------------------------------*/}
      <section className="py-20 md:px-44">
        <div className="text-center md:px-52 mb-20 pt-12">
          <h2 className="uppercase text-3xl tracking-wider">What They've Said</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-center text-gray-400 px-20 my-8">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 items-center justify-center xl:grid-cols-3 xl:grid-rows-1 mx-36 py-8 gap-8">
          <div className="text-slate-400 italic text-center hover:-translate-y-5 transition-bg duration-300 py-8">
            <div className="flex flex-col border shadow">
              <div className="flex justify-center overflow-visible relative bottom-8">
                <img className="border p-1 rounded-full w-20 h-20 " src="https://abjahid.com/wp-content/uploads/2023/12/download-12.png" alt=""/>
              </div>
              <p className="px-6 pb-8 ">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”</p>
            </div>
            <p className="text-black not-italic pt-4">RUBEN REED - <span className="text-slate-400">Charleston</span></p>
          </div>

          <div className="text-slate-400 italic text-center hover:-translate-y-5 transition-bg duration-300">
            <div className="flex flex-col border shadow">
              <div className="flex justify-center overflow-visible relative bottom-8">
                <img className="border p-1 rounded-full w-20 h-20 " src="https://abjahid.com/wp-content/uploads/2023/12/download-11.png" alt=""/>
              </div>
              <p className="px-6 pb-8">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.”</p>
            </div>
            <p className="text-black not-italic pt-4">RUBEN REED - <span className="text-slate-400">Charleston</span></p>
          </div>

          <div className="text-slate-400 italic text-center hover:-translate-y-5 transition-bg duration-300">
            <div className="flex flex-col border shadow">
              <div className="flex justify-center overflow-visible relative bottom-8">
                <img className="border p-1 rounded-full w-20 h-20 " src="https://abjahid.com/wp-content/uploads/2023/12/download-12.png" alt=""/>
              </div>
              <p className="px-6 pb-8">“I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.”</p>
            </div>
            <p className="text-black not-italic pt-4">RUBEN REED - <span className="text-slate-400">Charleston</span></p>
          </div>
        </div>

      </section>

      {/*----------------------------------------------- Third Gradient -----------------------------------------------*/}
      <section className="bg-gradient-to-br from-purple-800 from-45% to-indigo-800">
        <div className="flex flex-col justify-center items-center py-36">
          <h3 className="text-4xl text-white font-bold">Let's Get Started</h3>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-lg text-gray-400 text-center px-16 xl:mx-96 xl:px-36 pt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div>
            <button type="button" className="flex items-center gap-2 bg-white text-black rounded-md p-3 mt-6 mb-12 hover:-translate-y-3 transition-bg duration-300">Get Started
              <img className="w-4 h-4 invert" src="../../images/arrow.png" alt="arrow"/>
            </button>
          </div>
        </div>
      </section>
      <div className="z-40 relative bottom-10">
        <svg width="100%" height="43" viewBox="0 0 2002 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9.49999V42L1998.5 40V23H1962L1879 33L1758.5 36L1703 29.5L1304.5 21.5C1285.3 15.5 1183.83 24 1135.5 29L636 35.5C455.2 1.89999 136.667 4.16665 0 9.49999Z" fill="white" fill-opacity="0.1"></path>
          <path opacity="0.1" d="M0 33.5V41.5L1997.5 42V27H1972.5C1585.3 -21.8 1403.17 6.66666 1360.5 27C1299.7 13.4 1035.17 6 910.5 4C856.1 -6.8 597.5 8.5 475 17.5L0 33.5Z" fill="white"></path>
          <path d="M0 31.6689V42.1689L2001.5 41.6689V11.6689L1942.25 18.3143C1910.49 21.8758 1879.21 29.7147 1847.38 32.5593C1799.52 36.8366 1750.41 29.3968 1727 23.6689C1577.8 -8.33114 1367.17 10.3355 1280.5 23.6689C1199.3 40.8689 1126.17 30.8355 1106 23.6689C1023.13 -2.89279 818.252 7.7814 689.669 19.2529C659.224 21.9691 629.271 29.2178 598.77 31.21C559.856 33.7516 520.953 28.0794 502 23.6689C395.2 -8.73115 122.833 15.1689 0 31.6689Z" fill="white"></path>
        </svg>
      </div>

      {/*---------------------------------------------------- Blog ----------------------------------------------------*/}
      <section id="blogSection" className="pt-12 xl:px-44 px-4 pb-20">
        <div className="text-center xl:px-52 pt-12">
          <h2 className="uppercase text-3xl tracking-wider">Blog</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-center text-gray-400 px-16 my-8">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 justify-center xl:grid-cols-3 xl:grid-rows-1 xl:mx-36 py-8 px-16 gap-8">
          
          <div className="flex flex-col justify-center items-center hover:-translate-y-3 transition-bg duration-300">
            <div className="flex flex-col justify-center">
              <img className="" src="https://media.istockphoto.com/id/537706522/photo/overhead-image-of-a-female-blogger-writing-on-the-laptop.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=DLQWu1ss06K9oEeW6R1tIpGMn58ZlgFyj_wrOWKRFn0=" alt=""/>
              <p className="text-gray-400 text-lg font-bold">Digital Marketing</p>
              <button className="text-start text-black text-lg hover:text-teal-500">New exhibition at our Museum</button>
              <p className="text-gray-400 text-lg">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
              <button type="button" className="flex items-center gap-2 text-lg text-teal-500 mt-6 mb-12 hover:text-black">Read More
                <img className="w-4 h-4 hover:brightness-0" src="../../images/teal-arrow.png" alt="arrow"/>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center hover:-translate-y-3 transition-bg duration-300">
            <div className="flex flex-col justify-center">
              <img className="" src="https://media.istockphoto.com/id/1205480417/photo/multicultural-businesswomen-brainstorm-cooperating-at-office-meeting.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=x16iR0Dihibk9YczI5_1kfY0-7XLVuu_p7gSXTScKfY=" alt=""/>
              <p className="text-gray-400 text-lg font-bold">Digital Marketing</p>
              <button className="text-start text-black text-lg hover:text-teal-500">New exhibition at our Museum</button>
              <p className="text-gray-400 text-lg">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
              <button type="button" className="flex items-center text-lg gap-2 text-teal-500 mt-6 mb-12 hover:text-black">Read More
                <img className="w-4 h-4 hover:brightness-0" src="../../images/teal-arrow.png" alt="arrow"/>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center hover:-translate-y-3 transition-bg duration-300">
            <div className="flex flex-col justify-center">
              <img className="" src="https://media.istockphoto.com/id/1322304331/photo/shot-of-two-work-colleagues-using-a-digital-tablet-during-a-business-meeting-at-work.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=I1cpfTaaKI6Q9cKlwlWa57nTPjoMlfRhVOJYj6I6bVI=" alt=""/>
              <p className="text-gray-400 text-lg font-bold">Digital Marketing</p>
              <button className="text-start text-black text-lg hover:text-teal-500">New exhibition at our Museum</button>
              <p className="text-gray-400 text-lg">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
              <button type="button" className="flex items-center text-lg gap-2 text-teal-500 mt-6 mb-12 hover:text-black">Read More
                <img className="w-4 h-4 hover:brightness-0" src="../../images/teal-arrow.png" alt="arrow"/>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/*------------------------------------------------- Feedback -------------------------------------------------*/}
      <section className="xl:px-44 py-20 px-4" style={{backgroundColor:"#f8f9fa"}}>
        <div className="text-center xl:px-52 pt-12 ">
          <h2 className="uppercase text-3xl tracking-wider">GET IN TOUCH</h2>
          <div className="border-b-2 border-teal-500 mx-auto mt-8 w-16"></div>
          <p className="text-center text-gray-400 px-16 my-8">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 justify-center mt-6 pt-6 px-20 xl:mx-60">
          <div className="flex flex-col justify-center md:justify-start gap-16">
            {location.map(Lmap)}
          </div>
          <div className="md:col-span-2">
            <form>
              <div className="grid grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-3 gap-3"> 
                <div className="col-span-1">
                  <input type="text" className="border rounded-lg p-2 w-full" placeholder="Your name*"/>
                </div>

                <div className="">
                  <input type="text" className="border rounded-lg p-2 w-full" placeholder="Your email*"/>
                </div>

                <div className="xl:col-span-2">
                  <input type="text" className="border p-2 rounded-lg w-full" placeholder="Your Subject.."/>
                </div>

                <div className="xl:col-span-2">
                  <div>
                    <textarea type="text" className="border p-2 rounded-lg max-h-full w-full" placeholder="Your message"/>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-white bg-teal-500 rounded-md py-2 px-5  hover:border hover:border-black hover:-translate-y-3 transition-bg duration-300">Send Message</button>
              </div>
            </form>
            
          </div>
        </div>
      </section>

      {/*------------------------------------------------- Contact -------------------------------------------------*/}
      <section className="py-5 xl:px-56 px-20">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-1 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 justify-center xl:mx-44 xl:space-x-10">
          <div className="flex flex-row justify-start mt-6 mb-4 gap-4">
            <a href="/" className="border-2 rounded-full border-gray-400">
              <img className="flex items-center justify-center m-4 w-6 h-6 hover:invert hover:brightness-50 " src="../../images/contact/facebook.png" alt=""/>
            </a>

            <div className="border-2 rounded-full border-gray-400">
              <a className="" href="/">
                <img className="m-4 w-6 h-6 hover:invert hover:brightness-50 " src="../../images/contact/twitter.png" alt=""/>
              </a>
            </div>
            
            <div className="border-2 rounded-full border-gray-400">
              <a className="" href="/">
                <img className="m-4 w-6 h-6 hover:invert hover:brightness-50 " src="../../images/contact/linkedin.png" alt=""/>
              </a>
            </div>
            
            <div className="border-2 rounded-full border-gray-400">
              <a className="" href="/">
                <img className="m-4 w-6 h-6 hover:invert hover:brightness-50 " src="../../images/contact/google-plus.png" alt=""/>
              </a>
            </div>
            
            <div className="border-2 rounded-full border-gray-400">
              <a className="" href="/">
                <img className="m-4 w-6 h-6 hover:invert hover:brightness-50 " src="../../images/contact/xbox-logo.png" alt=""/>
              </a>
            </div>
          </div>

          <div className="flex justify-start xl:justify-end items-center gap-2 mt-6 mb-4">
            <img className="w-6 h-6" src="../../images/contact/phone.png" alt=""/>
            <p className="text-lg">+91 123 4556 789</p>
          </div>

          <div className="flex justify-start xl:justify-end items-center gap-2 mt-6 mb-4">
            <img className="w-6 h-6" src="../../images/contact/mail.png" alt=""/>
            <p className="text-lg">Support@info.com</p>
          </div>
        </div>
      </section>

      {/*------------------------------------------------- Footer -------------------------------------------------*/}
      <section className="py-12 xl:px-56 px-20" style={{backgroundColor:"#272a33"}}>
        <footer className="xl:mx-44">
          <div className="grid grid-cols-1 grid-rows-4 justify-start xl:grid-cols-4 xl:grid-rows-1 gap-9">
            <div className="flex flex-col justify-start gap-4">
              <p className="uppercase text-lg text-white">Dorsin</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="/" className="text-md">Home</a>
                <a href="/" className="text-md">About Us</a>
                <a href="/" className="text-md">Careers</a>
                <a href="/" className="text-md">Contact Us</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg text-white">Information</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="/" className="text-md">Terms & Condition</a>
                <a href="/" className="text-md">About Us</a>
                <a href="/" className="text-md">Jobs</a>
                <a href="/" className="text-md">Bookmarks</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg text-white">Support</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="/" className="text-md">FAQ</a>
                <a href="/" className="text-md">Contact</a>
                <a href="/" className="text-md">Discussion</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg text-white">Subscribe</p>
              <p className="text-md text-gray-400 pb-2">In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
              <div className="flex items-center justify-between relative">
                <input type="text" className="text-sm bg-slate-700 rounded-md px-4 py-2 w-full" placeholder="Email"/>
                <div className="relative">
                  <button className="absolute ">
                    <img className="w-4 h-4" src="../../images/send.png" alt="send"/>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </section>

      {/*--------------------------------------------- Footer/Payment ---------------------------------------------*/}
      <footer className="py-4 xl:px-56 px-4" style={{backgroundColor:"#2e313a"}}>
        <div className="flex items-center justify-between xl:mx-44">
          <p className="text-gray-400 text-sm">"{currentTime} © Dorsin - Themesbrand"</p>
          <div className="flex flex-row items-center gap-2">
            <img className="h-12 w-12" src="../../images/payment/visa.png" alt=""/>
            <img className="h-12 w-12" src="../../images/payment/mastercard.png" alt=""/>
            <img className="h-12 w-12" src="../../images/payment/paypal.png" alt=""/>
            <img className="h-12 w-12" src="../../images/payment/maestro.png" alt=""/>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
