export interface props{
    title: string;
    text: string;
}

export default function UnderHeader(
    {
        title,
        text
    }: props,
) {
    return (
        <section className={"bg-[#F3F3F3]"}>
            <div className={"flex flex-col justify-center max-w-[90%] lg:max-w-[80rem] mx-auto lg:px-[5rem] pb-[100px]"}>
                <div
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={"font-[700] lg:text-[72px] text-[48px] mb-[30px] text-black lg:max-w-[800px]"}
                ></div>
                <div>
                    <p
                        dangerouslySetInnerHTML={{ __html: text }}
                        className={"text-lg text-left lg:text-[1.75rem] lg:max-w-[700px] lg:leading-normal"}
                    ></p>
                </div>
            </div>
        </section>
    )
}