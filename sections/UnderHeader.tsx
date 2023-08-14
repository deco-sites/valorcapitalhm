export interface props {
  title: string;
  text: string;
}

export default function UnderHeader(
  {
    title,
    text,
  }: props,
) {
  return (
    <section className={"bg-[#F3F3F3] pt-[90px]"}>
      <div
        className={"flex flex-col justify-center max-w-[90%] lg:max-w-[80rem] mx-auto pb-[100px]"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={`font-["gteesti"] font-[700] lg:text-[4.875rem] text-[48px] mb-[30px] text-black lg:max-w-[900px] lg:leading-[90px]`}
        >
        </div>
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            className={`font-["freight"] text-lg text-left lg:text-[1.75rem] lg:max-w-[700px] lg:leading-normal`}
          >
          </p>
        </div>
      </div>
    </section>
  );
}
