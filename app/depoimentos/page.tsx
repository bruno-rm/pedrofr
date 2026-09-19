// import Rot13Converter from "@/components/rot13";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto my-auto min-h-[calc(100vh-2rem)] max-w-3xl px-6 py-10">
      <div className="bg-[#fbf1cd] text-[#404682] font-bold p-4 rounded-2xl text-xl">
        <h1>Depoimentos</h1>
      </div>

      <div className=" text-[#404682] font-bold p-4 rounded-2xl text-xl mt-5">
        <h1>Daniel Filho</h1>
      </div>

      <p className="text-2xl mt-2 bg-[#cee4f7] text-[#404682] font-bold p-5 rounded-2xl">
        “Olá, amigos estudantes de francês! Conheci o professor Pedro Marques em
        uma plataforma de curso online. Na época, por falta de tempo, não
        consegui dar continuidade, mas sua didática, conhecimento profundo e
        dedicação me marcaram muito. Nesse período, tive experiências com outros
        professores, o que só reforçou minha certeza de que deveria retornar às
        aulas particulares com o professor Pedro para alcançar o melhor
        resultado no exame DELF B1. Assim fiz, e recebi todo o suporte
        necessário para conquistar uma excelente nota em todas as quatro
        competências — com destaque especial na oralidade: 25/25. Meu nome é
        Daniel Filho e recomendo com entusiasmo o professor Pedro Marques.
        Publicar este elogio é o mínimo que posso fazer como forma de gratidão.”
      </p>

      <div className=" text-[#404682] font-bold p-4 rounded-2xl text-xl mt-12 ">
        <h1>Adrinea</h1>
      </div>

      <p className="text-2xl mt-2 bg-[#cee4f7] text-[#404682] font-bold p-5 rounded-2xl">
        ‘O curso do professor Pedro é apaixonante, o ensino é perfeito. As
        atividades são super interessantes. E é por isso que aprendi a falar
        francês com facilidade.’
      </p>

      <div className=" text-[#404682] font-bold p-4 rounded-2xl text-xl mt-12">
        <h1>Marcia Albuquerque</h1>
      </div>

      <p className="text-2xl mt-2 bg-[#cee4f7] text-[#404682] font-bold p-5 rounded-2xl">
        Vale também dizer da sua preocupação com o sucesso de cada aluno. Isso
        me dá confiança e me ajuda a superar os desafios da aprendizagem da
        língua.
      </p>

      <div className=" text-[#404682] font-bold p-4 rounded-2xl text-xl mt-12">
        <h1>Emanuel Silva </h1>
      </div>

      <Image
                  className="mx-auto p-5 rounded-4xl "
                  src="/depoimento.jpg"
                  alt="Rosto"
                  width={500}
                  height={500}
                  loading="eager"
                />
    </main>
  );
}
