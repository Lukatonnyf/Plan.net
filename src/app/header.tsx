'use client';
import { useRef, useLayoutEffect } from "react";
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IoIosPlanet } from "react-icons/io";



// interface Menu {
//   id: number,
//   text: string,
//   url?: string,
// }

// const MenuItems: Menu[] = [
//   {
//     id: 1,
//     text: "Página Principal",
//   },
//   {
//     id: 2,
//     text: "Criar Tarefa",
//   },
//   {
//     id: 3,
//     text: "Desenvolvedores",
//   }

// ]




// gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'linear',
          delay: 1,
        }
      );
    }
  }, []);


  return (
    <div ref={headerRef}
      className="fixed z-10 flex justify-start items-center transition-all duration-300
        w-full h-[10dvh] p-10 rounded-b-full opacity-0 backdrop-blur-sm ">
      <section className="flex w-full justify-start  ">

        <div className="w-full flex flex-row  items-center gap-1">
          <IoIosPlanet className='text-textopaco text-5xl' />
          <h1 className="text-white">Plan.net</h1>
        </div>
      </section>
    </div>
  )
}
