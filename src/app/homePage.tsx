'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

import Image from 'next/image'
import { Goldman } from 'next/font/google';

import test from "../../public/peoplestudy.png"
import Button from './components/button'







const goldman = Goldman({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});



export default function HomePage() {
  const text1 = useRef<HTMLDivElement>(null)
  const text2 = useRef<HTMLDivElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const buttons = useRef<HTMLDivElement>(null)


  //animação do card geral
  useLayoutEffect(() => {
    if (card.current) {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          y: 100, // posição inicial (100px à esquerda)
        }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 1,
      })
    }
  }, [])

  // animação dos textos
  useLayoutEffect(() => {
    gsap.fromTo(
      text1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

    gsap.fromTo(
      text2.current,
      { opacity: 0, x: 50, },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      buttons.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 }
    );
  }, []);



  const handleScroll = () => {
    const targetSection = document.getElementById('cadastrar-atividades')
    if (targetSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: targetSection
      })
    }
  }


  return (
    <div className={`${goldman.className} w-full min-h-[100dvh] p-5 flex justify-center items-center
        shadow-custom-purple-700`}
    >
      <div className='flex flex-col justify-center items-center w-full min-h-[70dvh] h-full p-5
            bg-gradient-to-b from-[#1D1D1D] to-[#0F0F0F] rounded-t-4xl  lg:flex-row
            opacity-0'
        ref={card}>
        <section
          className="w-full  flex flex-col justify-between items-start text-gray-200 p-5 gap-5
                    opacity-00 lg:p-10 lg:gap-15">
          <div className='flex flex-col -space-y-2 p-0 '>
            <h1 ref={text1} className="flex font-medium text-lg w-full sm:text-4xl gap-2">
              Crie seu
              <span className='text-textopaco'> planejamento</span>
            </h1>

            <h2 ref={text2} className="font-light text-sm text-gray-400 sm:text-xl">
              e organize sua
              <span className="text-textopaco"> rotina</span>
            </h2>
          </div>

          <div ref={buttons} className='flex flex-row gap-2 lg:gap-5'>
            <Button onClick={handleScroll} text={'Criar Atividade'} className="bg-gray-100 text-black" />
            <a href="https://lukatonnyferreiraportifolio.vercel.app/">
              <Button text={'Desenvolvedor'} className="bg-btncolor text-white" />
            </a>
          </div>
        </section>

        <div className='flex justify-center items-center flex-col
                     w-full max-h-full'>
          <Image src={test} alt="testando"
            className="object-cover rounded-xl w-[40dvh]"
            width={500}
            height={300}
            layout="intrinsic"
          />

        </div>
      </div>

    </div>
  )
}
