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
      <div className={`px-5 xl:max-w-[66rem] xl:mx-auto xl:mb-16`}>
        <div
          className={`text-center text-4xl font-bold mb-5 xl:text-6xl xl:leading-[3.75rem] xl:text-black`}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        >
        </div>
        <p
          className={`text-center mb-5 xl:max-w-[43rem] xl:mx-auto xl:text-xl`}
        >
          {subTitle}
        </p>
      </div>
      <div class={`xl:flex xl:flex-col xl:gap-[5.62rem]`}>
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
