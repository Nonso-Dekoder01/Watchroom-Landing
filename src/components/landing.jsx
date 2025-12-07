import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import AccordionItem from './AccordionItem'
import blurbghero from '../assets/background-layerblur-hero.png'
import blurbgreason from '../assets/background-layerblur-reasons.png'
import { BiChevronRight } from 'react-icons/bi'
import { TbChevronRight } from 'react-icons/tb'
import img1effect from '../assets/bottom-heroImage-effect.png'
import heroImg1 from '../assets/heroImg1.png'
import heroImg2 from '../assets/heroImg2.png'
import heroImg3 from '../assets/heroImg3.png'
import heroImg4 from '../assets/heroImg4.jpeg'
import heroImg5 from '../assets/heroImg5.jpeg'
import heroImg6 from '../assets/heroImg6.jpeg'
import heroImg7 from '../assets/heroImg7.jpeg'
import heroImg8 from '../assets/heroImg8.jpeg'
import heroImg9 from '../assets/heroImg9.jpeg'
import logo from "../assets/watchroom-first.png";
import SignIn from './SignIn';

const Landing = () => {


  const bgImage1 = {
    backgroundImage: `url(${blurbghero})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
  }

  const bgImage2 = {
    backgroundImage: `url(${blurbgreason})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'left center !important',
  }


const posters = [
  { 
    id: 1,
    img: heroImg4,
    title: "YOUNG SHELDON",
    desc: "Sheldon Cooper, a brilliant but socially awkward prodigy, tries to fit into a world that doesn’t understand him. Between skipping grades, navigating high school, and dealing with his loving but complicated family, he learns that intelligence alone doesn’t prepare you for the challenges of growing up."
  },
  { 
    id: 2,
    img: heroImg5,
    title: "FAST & FURIOUS",
    desc: "What begins as underground street racing evolves into world-saving missions as Dominic Toretto and his family face ruthless enemies, impossible heists, and high-speed battles across the globe. Loyalty, adrenaline, and the meaning of family fuel every moment."
  },
  { 
    id: 3,
    img: heroImg6,
    title: "THE DARK KNIGHT",
    desc: "As Gotham spirals into chaos, Batman confronts the Joker—a criminal mastermind who seeks to prove that anyone can fall into madness. With the city’s soul at stake, Bruce Wayne must push his limits, face moral dilemmas, and sacrifice more than he ever imagined."
  },
  { 
    id: 4,
    img: heroImg7,
    title: "TERMINATOR",
    desc: "In a desperate fight for humanity’s future, a relentless cyborg assassin travels from a post-apocalyptic world to eliminate the one person destined to save mankind. With time running out, survival depends on courage, sacrifice, and the will to change fate."
  },
  { 
    id: 5,
    img: heroImg8,
    title: "THE UMBRELLA ACADEMY",
    desc: "Reunited after years apart, a dysfunctional family of gifted siblings must confront their traumatic past while racing to stop an impending apocalypse. As secrets unravel and powers evolve, the fate of the world rests on their ability to work together—if they can."
  },
  { 
    id: 6,
    img: heroImg9,
    title: "WEDNESDAY",
    desc: "Sent to Nevermore Academy after a series of unusual incidents, Wednesday Addams battles supernatural threats, uncovers hidden conspiracies, and discovers the truth about her emerging abilities. With her sharp wit and darker instincts, she becomes the school’s most unlikely detective."
  },
]






      const [open, setOpen] = useState(false);

      const [activePoster, setActivePoster] = useState(null);

      const [activeMovie, setActiveMovie] = useState(null);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

const accordionData = [
    {
        title: "What is Watchroom?",
        desc: "Watchroom is an online streaming platform that gives you unlimited access to movies, series, documentaries, and exclusive originals. You can watch on any device, anywhere, with no ads and no interruptions. Whether you're into action, comedy, drama, or family-friendly shows, Watchroom brings entertainment right to you."
    },
    {
        title: "How much does Watchroom cost?",
        desc: "Watchroom offers flexible subscription plans to suit every viewer. You can choose a monthly or yearly plan, and all plans include unlimited streaming on mobile, tablet, smart TV, and laptop. There are no hidden fees—just pick the plan that works best for you and start watching instantly."
    },
    {
        title: "Where can I watch?",
        desc: "You can watch Watchroom anywhere and anytime. Stream on your phone, tablet, laptop, desktop, or smart TV. You can also download your favorite titles to watch offline when you're on the go. All you need is an internet connection—or your downloaded content—and you're good to go."
    },
    {
        title: "How do I cancel?",
        desc: "Canceling your Watchroom subscription is easy. Simply go to your account settings, click on 'Manage Subscription,' and choose 'Cancel Membership.' There are no cancellation fees or commitments—you can leave anytime, and your access remains active until the end of your billing period."
    },
    {
        title: "What can I watch on Watchroom?",
        desc: "Watchroom offers a massive library of entertainment, including blockbuster movies, trending series, kids' shows, documentaries, stand-up comedy, and exclusive originals you won’t find anywhere else. New titles are added every week, so there's always something fresh to discover."
    },
    {
        title: "Is Watchroom good for kids?",
        desc: "Yes! Watchroom has a dedicated Kids Mode with family-friendly content suitable for all ages. Parents can create supervised profiles with controls that limit access to mature content. Your children can enjoy safe and fun entertainment while you stay in control of what they watch."
    },
]

  


  return (
    <div>

        {/* NAVBAR */}
        <nav className='w-full h-auto flex justify-between items-center py-5 px-5 md:px-10 lg:px-20'>
            <div>
              <img src={logo} alt="" className='w-20'/>
            </div>
            <Link to="signin" className='bg-blue-800! text-white! py-3 px-6 rounded-md font-semibold text-sm cursor-pointer'>Sign In</Link>
        </nav>


        {/* HERO */}
        <section className='w-full h-screen px-5 md:px-10 lg:px-20'>
          <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center'>

            <div className='w-[50%] h-full flex items-center justify-center lg:justify-start'>
              <div className='flex flex-col gap-15 items-center lg:items-start'>
                <div className='flex flex-col gap-5'>
                  <h2 className='text-4xl md:text-6xl lg:text-5xl font-bold w-98 md:w-180 lg:w-140 text-center lg:text-start'>Unparalleled streaming time, with movies, with concessions.</h2>
                  <p className='text-xl font-medium text-center lg:text-start'>Starts at $1.99. Enjoy lots of benefits.</p>
                </div>
                <div className='flex flex-col lg:items-start items-center'>
                  <form action="POST" className='flex gap-2'>
                    <input type="text" placeholder='Email Address...' className='border-2 border-gray-700 dark:border-gray-400 py-3 pl-4 pr-3 md:pr-20 rounded-md'/>
                    <button className='py-3 px-3 lg:px-6 bg-blue-800! text-white! rounded-md flex gap-2 items-center cursor-pointer' >Get Started  <TbChevronRight /></button>
                  </form>
                  <p className='mt-5 w-70 text-center md:text-start md:w-100'>Ready to join? Enter your email to create an account.</p>
                </div>
              </div>
            </div>


            <div style={bgImage1} className='w-[50%] h-auto lg:h-full hidden md:flex justify-center items-center '>
              <div className='relative w-auto h-auto lg:h-100 mb-0 lg:mb-30'>
                <div className="relative w-80 lg:w-90 h-full">
                  <img src={heroImg3} alt="" className="absolute top-0 left-0 w-full z-30 shadow-xl" />
                  <img src={heroImg1} alt="" className="absolute top-0 lg:top-2 left-40 lg:left-10 w-full z-20  lg:rotate-6" />
                  <img src={heroImg2} alt="" className="absolute top-0 lg:top-4 -left-40 lg:left-20 w-full z-10 lg:rotate-12" />
                </div>

                <img src={img1effect} alt="" className='hidden lg:flex absolute top-96 right-90 mt-30'/>
              </div>
            </div>

          </div>
        </section>


        {/* REASONS */}
        <section className='w-full h-auto px-5 md:px-10 lg:px-20 mt-20'>
          <h1 className='text-4xl md:text-6xl lg:text-4xl font-bold text-start'>Trending Now</h1>
          <p className='text-start'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full place-items-center">
            {posters.map((poster) => (
              <img
                key={poster.id}
                src={poster.img}
                alt={poster.title}
                className="w-60 sm:w-72 lg:w-70 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
                onClick={() => setActivePoster(poster)}
              />
            ))}

          </div>


          {activePoster && (

            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
              <div className="relative bg-white dark:bg-gray-900 p-6 rounded-3xl w-full max-w-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">

                <button
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
                  onClick={() => setActivePoster(null)}
                >
                  ✕
                </button>

                <img 
                  src={activePoster.img} 
                  alt="" 
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">
                    {activePoster.title}
                  </h2>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {activePoster.desc}
                  </p>

                  {activePoster.cast && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">Cast:</h3>
                      <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300">
                        {activePoster.cast.map((actor, index) => (
                          <li key={index}>{actor}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button 
                    className="mt-auto px-4 py-2 bg-red-600! text-white rounded-md hover:bg-red-700!"
                    onClick={() => setActivePoster(null)}
                  >
                    Coming Soon...
                  </button>
                </div>
              </div>
            </div>

          )}



        </section>



        {/* FAQ */}
        <section>
          <div className='h-auto py-12 md:py-20 lg:py-32 flex justify-center items-center'>
            <div className='flex flex-col gap-y-9 justify-center w-full max-w-[1200px] px-4'>
              
              <h1 className='font-black text-3xl md:text-4xl lg:text-5xl flex justify-center text-center'>
                Frequently Asked Questions
              </h1>

              <div className='flex flex-col gap-3'>
                {accordionData.map((data, index) => {
                  return <AccordionItem 
                    key={index}
                    open={index === open} 
                    title={data.title} 
                    desc={data.desc} 
                    toggle={()=>toggle(index)}/>
                })}
              </div>

              <div className='flex flex-col items-center gap-3'>
                <p className='text-center px-3'>
                  Ready to watch? Enter your email to create or restart your membership.
                </p>

                <form action="POST" className='flex flex-col md:flex-row gap-x-2 gap-y-3 w-full max-w-xl'>
                  <input 
                    type="text" 
                    placeholder='Email Address...' 
                    className='w-full border-2 border-gray-700 dark:border-gray-400 py-3 pl-4 pr-3 md:pr-20 rounded-md'
                  />
                  
                  <button className='py-3 px-3 lg:px-6 bg-blue-800 hover:bg-blue-900 text-white rounded-md flex gap-2 items-center cursor-pointer w-full md:w-auto'>
                    Get Started <TbChevronRight />
                  </button>
                </form>

              </div>

            </div>
          </div>
        </section>



        {/* FOOTER */}
            <section>
              <div className='py-10 md:py-16 flex flex-col justify-center items-center px-4'>
                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20 lg:gap-[300px] text-center md:text-left'>
                  
                  <ul className='flex flex-col gap-3'>
                    <li>Questions? Contact us</li>
                    <li>Ways to Watch</li>
                    <li>Account</li>
                  </ul>

                  <ul className='flex flex-col gap-3'>
                    <li>Cookie Preferences</li>
                    <li>Help Center</li>
                    <li>Privacy</li>
                  </ul>

                

                </div>
              </div>
            </section>

    </div>
  )
}

export default Landing