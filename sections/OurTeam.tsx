export interface OurTeam{
    subTitle?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function OurTeam(props: OurTeam){
    const {subTitle, title, description, buttonText, buttonHref} = props;
     return(
        <section className={`p-2.5 xl:px-10`}>
            <div className={`bg-gradient-to-bl from-[#2d4168] to-[#1d283e] rounded py-20 px-5 xl:flex xl:py-36 xl:px-20 xl:gap-8`}>
                <div className={`xl:flex-1`}>
                    <p className={`uppercase text-white text-sm font-bold mb-5 xl:text-base`}>{subTitle}</p>
                    <p className={`text-4xl text-white font-extrabold mb-5 xl:text-6xl`}>{title}</p>
                </div>
                <div className={`xl:flex-1 xl:mt-8`}>
                    <p className={`text-sm text-white mb-5 leading-7 xl:text-2xl xl:font-normal`}>{description}</p>
                    <div className={`ml-5 bg-gradient-to-bl from-[#48d0ff] to-[#e4ff49] w-[fit-content] px-[4px] py-[21px] rounded-full`}>
                        <a className={`bg-[#23324f] px-[36px] py-[20px]  text-xl  text-white font-bold rounded-full xl:hover:text-[#1d283e] xl:hover:bg-[rgb(255,255,255,0)] xl:transition-all xl:duration-300`} href={buttonHref}>
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
     )
}