'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosPlanet } from "react-icons/io";



interface Menu {
  id: number,
  text: string,
  url?: string,
}

const MenuItems: Menu[] = [
  {
    id: 1,
    text: "Página Principal",
  },
  {
    id: 2,
    text: "Criar Tarefa",
  },
  {
    id: 3,
    text: "Desenvolvedores",
  }

]



// gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  // const headerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!headerRef.current) return;

  //   gsap.fromTo(
  //     headerRef.current,
  //     {
  //       backgroundColor: 'transparent',
  //     },
  //     {
  //       backgroundColor: '#0f0f0f',
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: headerRef.current,
  //         start: 'top top+=40', // quando o topo da tela passa 10px do header
  //         toggleActions: 'play none none reverse',
  //         scrub: true, // opcional, deixa mais fluido
  //         // markers: true, // pra debug
  //       },
  //     }
  //   );
  // }, []);


  return (
    <header
      className="fixed z-10 flex justify-between items-center transition-all duration-300
        w-full h-[10dvh] p-10 rounded-b-full ">
      <section className="flex w-full justify-between">

        <div className="w-full flex flex-row  items-center gap-1">
          <IoIosPlanet className='text-purple-400 text-5xl' />
          <h1 className="text-white">Plan.net</h1>
        </div>

        <div className="flex justify-center w-full">
          <ul className="flex justify-center items-center gap-10
                      font-sans  text-gray-400 text-xl">
            {MenuItems.map((items) => (
              <li key={items.id}>
                {items.text}
              </li>
            ))
            }
          </ul>
        </div>

      </section>
    </header>
  )
}
