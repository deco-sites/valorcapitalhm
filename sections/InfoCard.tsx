import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface InfoCardInterface {
  /** @description Posição do texto referente a image. */
  textPosition: "left" | "right";
  /** @description Imagem principal do card. */
  image?: LiveImage;
  /** @description Imagem secundária que se encontra na esquerda inferior */
  secondaryImage?: LiveImage;
  /** @description Texto acima do título. */
  subTitle?: string;
  /** @description Título do card. */
  title?: string;
  /** @description Texto logo abaixo do título. */
  description?: string;
  /** @description Link para o redirecionamento do Read More*/
  readMoreLink?: string;
}

export default function InfoCard(props: InfoCardInterface) {
  const {
    textPosition,
    image,
    secondaryImage,
    subTitle,
    title,
    description,
    readMoreLink,
  } = props;

  return (
    <section
      className={`px-5 flex flex-col lg:px-[5rem] ${
        textPosition == "left" ? `xl:flex-row` : `xl:flex-row-reverse`
      } xl:max-w-[80rem] m-auto`}
    >
      <div className={`xl:flex-1`}>
        <div
          className={`pb-[8px] relative right-[8px] rounded-lg bg-gradient-to-bl  from-[#48d0ff] to-[#e4ff49]`}
        >
          <Image
            className={`relative top-[8px] left-[8px] rounded-lg`}
            src={image || ``}
            height={540}
            width={1022}
          />
          <Image
            className={`rounded-lg bg-gradient-to-l from-[#addf6e] to-[#d0ef51] absolute h-[auto] w-[33%] bottom-0 py-[15px] px-[10px]`}
            src={secondaryImage || ``}
            alt=""
            width={116}
            height={26}
          />
        </div>
      </div>
      <div className={`xl:flex-1 xl:p-5`}>
        <article className={`xl:h-full xl:flex xl:flex-col xl:justify-between`}>
          <p
            className={`font-["bureau"] text-[#1d1f22] text-sm leading-5 my-1 xl:text-base`}
          >
            {subTitle}
          </p>
          <div
            className={`font-["gteesti"] text-3xl leading-[2rem] font-bold tracking-tighter my-1 xl:text-5xl xl:leading-[1.3]`}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          >
          </div>
          <p
            className={`text-lg leading-[1.5rem] my-3 font-["freight"] lg:font-[1.375rem]`}
          >
            {description}
          </p>
          <a
            className={`font-bold underline text-[#1b5569] text-sm my-1 xl:text-xl`}
            href={readMoreLink}
          >
            Read more
          </a>
        </article>
      </div>
    </section>
  );
}
