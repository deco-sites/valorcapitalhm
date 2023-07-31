import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export type Footer = {
    logo: LiveImage,
    followUs: {
        label: string,
        image: LiveImage,
        link: string,
    }[],
    contatacUs: string,
    contatacUsTitle: string,
    contatacUsLink: string,
    contactUsLinkText: string,
    outLinks1: {
        title: string,
        link: string,
    }[],
    outLinks2: {
        title: string,
        link: string,
    }[],
    rights: string,
};

export default function Footer({  contatacUs, contatacUsLink, contatacUsTitle, contactUsLinkText, outLinks1, outLinks2, followUs, logo, rights }: Footer) {
    return (
        <footer className="">
            <div className="pt-[36px] lg:px-[80px] px-[20px] flex flex-col lg:flex-row border-t border-t-[#e6e6e6]">
                <div className="lg:flex-[0_0_25%] mb-[30px]">
                    <Image src={logo} width={160}/>
                </div>
                <div className="flex flex-row lg:flex-[0_0_32%]">
                    <div className="flex flex-col w-[167px] lg:w-[239px]">
                        {outLinks1.map((item, index) => (
                            <a key={index} href={item.link} className="text-[16px] text-[#2d4168] font-bold mb-[20px]">{item.title}</a>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {outLinks2.map((item, index) => (
                            <a key={index} href={item.link} className="text-[16px] text-[#2d4168] font-bold mb-[20px]">{item.title}</a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-t-[#e6e6e6] lg:border-t-0 lg:max-w-[238px] lg:mr-[57px]">
                    <p className="text-[16px] text-[#000] font-bold my-[8px] lg:my-0 lg:mb-[16px]">{contatacUsTitle}</p>
                    <p className="text-[14px] lg:mb-[16px]">{contatacUs}</p>
                    <a href={contatacUsLink} className="text-[16px] text-[#2d4168] font-bold">{contactUsLinkText}</a>
                </div>
                <div className="mt-[16px] border-t border-t-[#e6e6e6] lg:border-t-0 lg:mt-0">
                    <p className="text-[16px] text-[#000] font-bold my-[8px] lg:my-0">Follow Us</p>
                    {followUs.map((item, index) => (
                        <div key={index}>
                            <Image src={item.image} width={28}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-[20px] py-[23px] lg:px-[80px] lg:border-t lg:border-t-[#e6e6e6]">
                <p className="text-[12px]">{rights}</p>
            </div>
        </footer>
    );
}