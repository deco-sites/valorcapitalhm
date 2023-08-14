import Slider from "../islands/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  sectionTitle: string;
  sectionExplorerLink: string;
  cards: {
    label?: string;
    title: string;
    image: LiveImage;
    titleLink?: string;
    text: string;
    localName?: string;
    logo?: LiveImage;
    name?: string;
    date?: string;
  }[];
}

export default function ValorComunity({
  cards,
  sectionTitle,
  sectionExplorerLink,
}: Props) {
  return (
    <section className={"bg-[#F3F3F3]"}>
      <div className="flex flex-col justify-center max-w-[90%] lg:max-w-[80rem] mx-auto lg:py-[5rem] pb-[100px]">
        <div className="flex flex-row items-end	 gap-5 mb-[48px] mt-[77px]">
          <h1 className={`text-[50px] font-bold text-black font-["gteesti"]`}>{sectionTitle}</h1>
          <a
            href={sectionExplorerLink}
            className="mb-[9px] font-bold text-[20px] underline text-[#1b5569]"
          >
            Explore
          </a>
        </div>
        <Slider cards={cards} />
      </div>
    </section>
  );
}
