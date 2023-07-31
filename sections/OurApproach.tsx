export interface OurApproach{
    subTitle?: string;
    title?: string;
    readModeHref?: string;
}

export default function OurApproach(props: OurApproach){
    const {subTitle, title, readModeHref} = props;

    return(
        <section className={`bg-gradient-to-bl from-[#2d4168] to-[#1d283e] w-full py-20 px-5 flex flex-col justify-center items-center xl:py-28`}>
            <p className={`text-base text-white text-center mb-3`}>{subTitle}</p>
            <p className={`text-4xl font-bold text-white text-center mb-8 xl:text-6xl xl:max-w-[66rem]`}>{title}</p>
            <div className={`ml-5 bg-gradient-to-bl from-[#48d0ff] to-[#e4ff49] w-[fit-content] px-[4px] py-[21px] rounded-full`}>
                <a className={`bg-[#23324f] px-[36px] py-[20px]  text-xl  text-white font-bold rounded-full xl:hover:text-[#1d283e] xl:hover:bg-[rgb(255,255,255,0)] xl:transition-all xl:duration-300`} href={readModeHref}>
                    Read More
                </a>
          </div>
        </section>
    )
}