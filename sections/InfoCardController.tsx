import { InfoCardInterface } from "./InfoCard.tsx";
import InfoCard from "./InfoCard.tsx";

export interface InfoCardController {
  title?: string;
  subTitle?: string;
  infoCards?: InfoCardInterface[];
}

export default function InfoCardController(props: InfoCardController) {
  const { title, subTitle, infoCards } = props;
  return (
    <section className={`my-7 xl:my-20`}>
      <div
        className={`px-5 xl:max-w-[80rem] xl:mx-auto xl:mb-16 lg:px-[5rem] xl:flex xl:flex-col xl:items-center`}
      >
        <div
          className={`font-["gteesti"] text-center text-4xl font-normal mb-5 xl:text-[50px] xl:leading-[3.75rem] text-[#1d1f22] xl:max-w-[970px]`}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        >
        </div>
        <p
          className={`font-["freight"] text-center mb-5 xl:max-w-[43rem] xl:mx-auto xl:text-[1.375rem]`}
        >
          {subTitle}
        </p>
      </div>
      <div class={`xl:flex xl:flex-col xl:gap-[5.62rem] lg:px-[5rem]`}>
        {infoCards?.map((infoCard) => {
          return (
            <InfoCard
              textPosition={infoCard?.textPosition}
              image={infoCard?.image}
              secondaryImage={infoCard?.secondaryImage}
              subTitle={infoCard?.subTitle}
              title={infoCard?.title}
              description={infoCard?.description}
              readMoreLink={infoCard?.readMoreLink}
            />
          );
        })}
      </div>
    </section>
  );
}
