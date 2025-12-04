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
  { id: 1, img: heroImg4, title: "YOUNG SHELDON", desc: "Description for Movie A" },
  { id: 2, img: heroImg5, title: "FAST & FURIOUS", desc: "Description for Movie B" },
  { id: 3, img: heroImg6, title: "THE DARK KNIGHT", desc: "Description for Movie C" },
  { id: 4, img: heroImg7, title: "TERMINATOR", desc: "Description for Movie D" },
  { id: 5, img: heroImg8, title: "THE UMBRELLA ACADEMY", desc: "Description for Movie E" },
  { id: 6, img: heroImg9, title: "WEDNESDAY", desc: "Description for Movie F" },
];





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
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "How much does Watchroom cost?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "Where can I watch?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "How do I cancel?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "What can I watch on Watchroom?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "Is Watchroom good for kids?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
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
              <div className=' h-auto py-50 flex justify-center items-center'>
                <div className='flex flex-col gap-y-9 justify-center w-[1200px]'>
                    <h1 className='font-black text-[50px] flex justify-center'>Frequently Asked Questions</h1>
                    <div className='flex flex-col gap-3'>
                        {accordionData.map((data, index) => {
                            return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                        })}
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form action="POST" className='flex gap-x-2'>
                            <input type="text" placeholder='Email Address...' className='border-2 border-gray-700 dark:border-gray-400 py-3 pl-4 pr-3 md:pr-20 rounded-md'/>
                            <button className='py-3 px-3 lg:px-6 bg-blue-800! text-white! rounded-md flex gap-2 items-center cursor-pointer' >Get Started  <TbChevronRight /></button>
                        </form>
                    </div>
                </div>
              </div>
        </section>


        {/* FOOTER */}
        <section>
          <div className='h-[300px] flex flex-col justify-center items-center'>
            <div className='flex justify-between gap-[300px]'>
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
                <ul className='flex flex-col gap-3'>
                    <li> </li>
                    <li>&#169; Copyright - 2023</li>
                    <li>Nonso</li> 
                </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Landing