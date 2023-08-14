import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  buttonText: string;
  buttonHref: string;
  smallTitle: string;
  title: string;
  imgs: LiveImage[];
}

export default function Portfolio({
  smallTitle,
  title,
  imgs,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <section className={"bg-[#fff]"}>
      <div className="flex flex-col justify-center max-w-[90%] lg:max-w-[80rem] mx-auto lg:py-[5rem] pb-[100px] items-center">
        <div className="flex flex-col gap-5 mb-[48px] mt-[77px]">
          <h1 className="text-[20px] font-bold text-black text-center">
            {smallTitle}
          </h1>
          <h1
            className={`font-["gteesti"] text-[42px] font-bold text-black text-center lg:text-[60px] lg:leading-[64px]`}
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          {imgs.map((img) => (
            <Image
              className="w-[150px] lg:w-[307px]"
              src={img}
              key={img}
              width={200}
            />
          ))}
        </div>
        <div
          className={`ml-5 bg-gradient-to-bl from-[#48d0ff] to-[#e4ff49] w-[fit-content] px-[4px] py-[21px] rounded-full`}
        >
          <a
            className={`bg-[#fff] px-[36px] py-[20px]  text-xl text-[#2d4168] font-bold rounded-full xl:hover:text-[#1d283e] xl:hover:bg-[rgb(255,255,255,0)] xl:transition-all xl:duration-300`}
            href={buttonHref}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
