import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import MenuButton from "../islands/MenuButton.tsx";

export interface LinkList {
  label?: string;
  href?: string;
}

export interface HeaderType {
  /** @description Imagem da Logo*/
  logoImage?: LiveImage;
  linkList?: Array<LinkList>;
}

export default function Header(props: HeaderType) {
  return <MenuButton logoImage={props?.logoImage} linkList={props?.linkList} />;
}
