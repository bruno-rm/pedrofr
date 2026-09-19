import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="md:flex  justify-center items-center gap-4 ">
        <div className=" flex-1  p-6">
          <Image
            className="mx-auto p-5 rounded-4xl"
            src="/pedro.jpg"
            alt="Rosto"
            width={500}
            height={500}
            loading="eager"
          />
        </div>

        <div className="flex-1  p-6 md:order-first">
          {/* <Image
            className="mx-auto"
            src="/axaxaxas-mlo-br.png"
            alt="Black cat at night"
            width={500}
            height={500}
            loading="eager"
          /> */}
          <h2 className=" text-2xl text-[#404682] font-bold p-5">
            Salut, les ami.e.s !
            <br />
            Eu me chamo Pedro Marques, sou professor de francês.
            <br />
            Tenho graduação em Letras — Licenciatura em língua francesa — e
            pós-graduação em ensino de línguas adicionais, ambas pela
            Universidade Federal de Goiás.
            <br />A docência é minha profissão há mais de 10 anos, e atualmente
            dou aulas particulares de francês.
          </h2>
        </div>
      </div>
    </div>
  );
}
