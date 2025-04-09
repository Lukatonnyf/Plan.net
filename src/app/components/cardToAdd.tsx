"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActivityFormFields from "./activityFormFields";
import { CiCircleCheck } from "react-icons/ci";

interface ActivityProps {
  id: number;
  nameActivity: string;
  date: Date;
  hour: string; // Formato: "HH:mm"
}
gsap.registerPlugin(ScrollTrigger);
export default function ActivityForm() {

  const [activities, setActivities] = useState<ActivityProps[]>([]);
  // ✅ Cria o array
  /** 💡 Como funciona?
   *  @Resumo :
      * O formulário começa vazio.
      * O usuário digita no campo de nome (nameActivity).
      * O setFormData atualiza o estado com o que o usuário digitou.
      * Quando ele adiciona a atividade, o formData vira um novo item da lista.
      * Depois que a atividade é adicionada, o formData volta ao estado inicial ("" e new Date()).
   */
  const [formData, setFormData] = useState<Omit<ActivityProps, "id">>({
    nameActivity: "",
    date: new Date(),
    hour: "",
  });
  // ✅ Atualiza o estado do formuláriof
  /** 🎯 Como Funciona?
   * @Resumo :
   * O que acontece aqui?
   * prev → Representa o estado atual (formData) antes da atualização.
   * ...prev → Mantém todos os valores antigos do formulário.
   * [name] → Atualiza somente o campo modificado (exemplo: "nameActivity").
   * name === "date" ? new Date(value + "T00:00:00") : value
   * Se o campo for "date", transforma o valor em um objeto Date.
   *Senão, apenas atribui value normalmente.
   */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({


      ...prev,
      [name]: name === "date" ? new Date(value + "T00:00:00") : value,
    }));
  }
  // ✅  Checa se o valor no formulário existe.
  function handleAddActivity() {
    // fecha o formulário logo após o button ser clicado.
    setShowForm(!showForm)
    if (!formData.nameActivity || !formData.hour) {
      alert("Preencha todos os campos!");
      return;
    }

    /** 📌 Como funciona?
     * @Resumo
     * Se activities.length > 0 (ou seja, se já existem atividades na lista):
     * Pegamos o id da última atividade adicionada → activities[activities.length - 1].id
     * Somamos +1 para criar um novo ID.
     * Se activities.length === 0 (ou seja, se não tem nenhuma atividade ainda):
     * Definimos o id como 1.
     */
    const newActivity: ActivityProps = {
      id: activities.length > 0 ? activities[activities.length - 1].id + 1 : 1, // Gera ID único
      ...formData,
    };

    setActivities(prev => [...prev, newActivity]);
    setFormData({ nameActivity: "", date: new Date(), hour: "" });
  }
  const [showForm, setShowForm] = useState(false)

  // ANIMAÇÕES
  const card = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (card.current) {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          x: -200,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const cardComoFunciona = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {

    if (cardComoFunciona.current) {
      gsap.fromTo(
        cardComoFunciona.current,
        {
          opacity: 0,
          x: 20,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardComoFunciona.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  // FORM ANIMATION
  const formRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {

    if (showForm && formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: -200,
        },
        {
          y: -17,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }
  }, [showForm]);




  return (
    <div className="flex flex-col w-full h-full relative lg:flex-row lg:p-0 overflow-x-hidden">
      {/* CARD EXPLICAÇÃO */}
      <main className="flex flex-col w-full min-h-[60dvh] h-full gap-5 ">
        {/* section Como funciona? */}
        <div className="flex flex-col w-full pl-2 ">
          <section ref={cardComoFunciona} className="w-full bg-card border-r-textopaco border-r-4
          rounded-l-2xl py-2 px-5 gap-2 lg:p-5 ">
            <div className="-space-y-1">
              <h2 className="text-lg font-bold text-gray-200">Como funciona?</h2>
              <ul className="list-disc px-5 text-sm text-gray-300 text-start">
                <li>Registre suas tarefas diárias com facilidade e clareza.</li>
                <li>Organize por data e horário para nunca mais perder prazos.</li>
                <li>Visualize suas atividades e acompanhe sua produtividade em tempo real.</li>
                <li>Marque o que já foi feito e veja seu progresso dia após dia.</li>
                <li>Construa uma rotina eficiente e personalizada — feita por você, para você.</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="flex flex-col w-full pr-2 ">
          <section ref={card} className="flex flex-col bg-card  border-l-textopaco border-l-4 rounded-r-2xl
          py-2 px-5 gap-5 lg:p- z-10 ">
            <div className="-space-y-1">
              <h2 className="text-lg font-bold text-gray-200">Adicionar Atividade</h2>
              <p className="max-w-[55dvh] text-sm text-gray-300 text-start">Crie sua rotina e torne-se uma pessoa organizada
                a partir de hoje, abandonando a Procrastinação para
                alcançar o topo o mais rápido possível.
              </p>
            </div>

            <button onClick={() => setShowForm(!showForm)}
              className="bg-btncolor text-white p-2 rounded text-sm max-w-[20dvh] hover:bg-textopaco
             hover:text-background transition lg:w-[20dvh]"
            >Criar atividade</button>
          </section>
        </div>

        <div className="flex flex-col w-full pr-2">
          {
            showForm && (
              <ActivityFormFields
                ref={formRef}
                formData={formData}
                handleChange={handleChange}
                handleAddActivity={handleAddActivity}
              />
            )
          }

        </div>



      </main>
      {/* Lista de atividades */}
      <aside className="w-full px-2 border">
        {activities.length > 0 ? (
          <>
            <h3 className="text-lg font-bold mt-4 mb-2 text-gray-300">Atividades Cadastradas</h3>
            <ul className=" flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5 ">
              {activities.map(activity => (
                <li key={activity.id}
                  className="flex justify-between text-gray-200 w-full  rounded-xl
                   px-2 py-3 bg-background-activitys border-1 border-bd-activitys ">
                  <strong className="flex justify-center items-center gap-2
                  text-sm lg:text-lg"><CiCircleCheck />
                    {activity.nameActivity}</strong>
                  {activity.hour}{" "}
                  {new Date(activity.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit"
                  })}
                </li>
              ))}
            </ul>
          </>
        ) : <ul className=" text-gray-50 flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5 ">
          <span>cadastre uma atividade</span>
        </ul>}
      </aside>
    </div>
  );
}
