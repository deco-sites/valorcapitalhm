import { useEffect, useState } from "preact/compat";

import type { HeaderType } from "../sections/Header.tsx";

export default function MenuButton(props: HeaderType) {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine =
    `h-1 w-9 my-1 rounded-full bg-black transition ease transform duration-300`;
  const { linkList, logoImage } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.querySelector("body");
    body?.style.setProperty("overflow", isOpen ? "hidden" : "auto");
  }, [isOpen]);

  return (
    <section>
      <nav
        className={`px-[1.5rem] py-[1.25rem] transition ${
          isOpen ? `bg-[#263961] h-[100vh]` : `bg-white`
        } transition-all xl:px-[5rem] xl:py-[2rem] xl:flex xl:flex-row xl:justify-between`}
      >
        <div className={`flex justify-between items-center`}>
          <picture>
            <img
              src={logoImage}
              alt=""
              className={`max-w-[140px] ${
                isOpen ? `brightness-[10]` : ` xl:max-w-[100%]`
              }`}
            />
          </picture>

          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group xl:invisible xl:w-0 xl:h-0]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100 bg-white"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100 bg-white"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div
          class={isOpen ? `` : `h-0 invisible xl:h-[fit-content] xl:visible`}
        >
          <ul
            className={`${
              isOpen ? `flex flex-col gap-[40px] my-[25px]` : `invisible`
            } xl:flex xl:flex-row xl:visible xl:justify-center xl:items-center`}
          >
            {linkList?.map((item) => {
              return (
                <li>
                  <a
                    className={`text-3xl text-white font-bold xl:text-[#2d4168] xl:text-base xl:mx-[1rem]`}
                    href={item?.href}
                  >
                    {item?.label}
                  </a>
                </li>
              );
            })}
            <li
              className={`bg-gradient-to-bl from-[#48d0ff] to-[#e4ff49] w-[fit-content] px-[6px] py-[24px] rounded-full`}
            >
              <a
                className={`bg-[#263961] px-[36px] py-[20px]  text-xl text-white font-bold rounded-full xl:bg-white xl:text-[#263961] xl:hover:bg-[rgb(255,255,255,0)] xl:transition-all xl:duration-300`}
                href=""
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
