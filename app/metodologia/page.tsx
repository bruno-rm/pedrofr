import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto my-auto min-h-[calc(100vh-2rem)] max-w-3xl px-6 py-10">
      <div className="bg-[#fbf1cd] text-[#404682] font-bold p-4 rounded-2xl text-xl">
        <h1>Metodologia</h1>
      </div>

      <p className="text-2xl text-[#404682] font-bold p-5">
        Minhas aulas têm como método a abordagem comunicativa a partir de
        materiais personalizados de acordo com os objetivos do(a) aluno(a).
        Também utilizo métodos variados como suporte para aprendizagem da língua
        francesa. Todo o material é oferecido e compartilhado com os(as)
        alunos(as) desde a primeira aula. O curso é 100% online. 
        <br/> Experimente a primeira aula gratuitamente.
      </p>
    </main>
  );
}
