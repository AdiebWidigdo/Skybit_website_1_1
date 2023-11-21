import { FunctionComponent, useEffect } from "react";

type DrawerMenuSlideType = {
  onClose?: () => void;
};

const DrawerMenuSlide: FunctionComponent<DrawerMenuSlideType> = ({
  onClose,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="w-full overflow-hidden flex flex-row items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%]"
      data-animate-on-scroll
    >
      <section className="flex-1 bg-white shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] flex flex-col items-center justify-start pt-6 px-0 pb-10 gap-[24px]">
        <header className="self-stretch flex flex-row items-start justify-between py-0 px-4 lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:flex">
          <img
            className="relative w-[184px] h-[38.9px]"
            alt=""
            src="/divlogo.svg"
          />
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/iconamoonmenuburgerhorizontalbold.svg"
          />
        </header>
        <section className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/vector-101.svg"
          />
          <section className="self-stretch flex flex-col items-start justify-start text-left text-base text-dimgray font-dm-sans">
            <div className="w-60 hidden flex-row items-center justify-start py-4 px-6 box-border gap-[8px] mix-blend-normal">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/mditreasurechest.svg"
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Logout
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px] mt-[-8px] text-center text-[16.17px] text-black font-inter">
              <a className="[text-decoration:none] self-stretch relative leading-[18px] font-medium text-[inherit] flex items-center justify-center h-[23px] shrink-0">
                Solutions
              </a>
              <a className="[text-decoration:none] self-stretch relative text-[15.89px] leading-[18px] font-medium text-[inherit] flex items-center justify-center h-[23px] shrink-0">
                Insights
              </a>
              <a className="[text-decoration:none] self-stretch relative text-[15.75px] leading-[18px] font-medium text-[inherit] flex items-center justify-center h-[23px] shrink-0">
                Company
              </a>
            </div>
          </section>
          <button className="cursor-pointer py-3 px-[27px] bg-cornflowerblue-200 self-stretch rounded-81xl flex flex-row items-start justify-center border-[1px] border-solid border-cornflowerblue-200">
            <b className="relative text-[14.63px] leading-[17.6px] flex font-inter text-white text-center items-center justify-center w-[57.9px] h-4 shrink-0">
              Contact
            </b>
          </button>
        </section>
      </section>
    </div>
  );
};

export default DrawerMenuSlide;
