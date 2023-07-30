import Slider from "../islands/Slider.tsx"
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";


export interface Props {
    cards: {
        image: LiveImage;
        title: string;
        text: string;
    }[];
}

export default function ValorComunity({
    cards
}: Props) {
    return (
        <Slider cards={cards} />
    );
}
    
