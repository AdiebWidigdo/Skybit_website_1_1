import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenuSlide from "../components/drawer-menu-slide";
import PortalDrawer from "../components/portal-drawer";

const SkybitComCloudAdoptionLoco: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenuSlideOpen, setDrawerMenuSlideOpen] = useState(false);

  const onDivlogoClick = useCallback(() => {
    navigate("/skybitcomlocofy");
  }, [navigate]);

  const onContactButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='formsAWS']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openDrawerMenuSlide = useCallback(() => {
    setDrawerMenuSlideOpen(true);
  }, []);

  const closeDrawerMenuSlide = useCallback(() => {
    setDrawerMenuSlideOpen(false);
  }, []);

  const onContactButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='teamJournalImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='formsAWS']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="relative bg-white w-full flex flex-col items-center justify-start pt-6 px-0 pb-0 box-border text-left text-base text-steelblue-100 font-inter lg:gap-[0px]">
        <section className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <header className="w-[1200px] flex flex-row items-start justify-between py-0 px-4 box-border text-left text-[16.45px] text-black font-inter lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:hidden">
            <div className="w-[473.6px] flex flex-row items-end justify-start gap-[30px]">
              <img
                className="relative w-[188px] h-[38.9px] cursor-pointer"
                alt=""
                src="/divlogo.svg"
                onClick={onDivlogoClick}
              />
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <a className="[text-decoration:none] relative text-[16.17px] leading-[18px] font-medium text-[inherit] flex items-center w-[72px] h-[23px] shrink-0">
                  Solutions
                </a>
                <div className="relative leading-[18px] text-silver flex items-center w-[4.7px] h-[18px] shrink-0">
                  |
                </div>
                <a className="[text-decoration:none] relative text-[15.89px] leading-[18px] font-medium text-[inherit] flex items-center w-[60px] h-[23px] shrink-0">
                  Insights
                </a>
                <div className="relative leading-[18px] text-silver flex items-center w-[4.7px] h-[18px] shrink-0">
                  |
                </div>
                <a className="[text-decoration:none] relative text-[15.75px] leading-[18px] font-medium text-[inherit] flex items-center w-[72.3px] h-[23px] shrink-0">
                  Company
                </a>
              </div>
            </div>
            <button
              className="cursor-pointer py-3 px-[27px] bg-cornflowerblue-200 rounded-81xl flex flex-row items-start justify-start border-[1px] border-solid border-cornflowerblue-200"
              onClick={onContactButtonClick}
            >
              <b className="relative text-[14.63px] leading-[17.6px] flex font-inter text-white text-center items-center justify-center w-[57.9px] h-4 shrink-0">
                Contact
              </b>
            </button>
          </header>
          <header className="self-stretch hidden flex-row items-start justify-between py-0 px-4 lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:flex">
            <img
              className="relative w-[168px] h-[38.9px]"
              alt=""
              src="/divlogo.svg"
            />
            <img
              className="relative w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/iconamoonmenuburgerhorizontalbold.svg"
              onClick={openDrawerMenuSlide}
            />
          </header>
          <div className="self-stretch [background:linear-gradient(90deg,_rgba(14,_161,_202,_0.1),_rgba(187,_107,_217,_0.1))] flex flex-row items-start justify-center lg:items-center lg:justify-center">
            <section className="self-stretch w-[1200px] flex flex-row items-start justify-center py-12 px-24 box-border gap-[24px] text-left text-base text-darkslategray-200 font-inter lg:items-start lg:justify-center lg:pl-16 lg:box-border md:flex-1 md:flex-col md:gap-[24px] md:items-center md:justify-center sm:w-80 sm:h-auto sm:gap-[24px] sm:items-start sm:justify-center sm:pt-6 sm:px-0 sm:pb-2 sm:box-border">
              <div className="w-[640px] flex flex-col items-start justify-start gap-[24px] md:self-stretch md:w-auto md:items-start md:justify-start md:pl-16 md:box-border sm:w-80 sm:h-auto sm:items-start sm:justify-start sm:pl-6 sm:pr-6 sm:box-border">
                <b className="self-stretch relative leading-[120%] uppercase text-darkslategray-100 opacity-[0.5]">
                  Solutions
                </b>
                <b className="self-stretch relative text-[56px] leading-[150%] text-steelblue-100 md:text-xl md:self-stretch md:w-auto sm:text-xl sm:self-stretch sm:w-auto sm:flex-1">
                  Enterprise Cloud Adoption
                </b>
                <div className="self-stretch relative leading-[23.97px] font-light md:text-xs md:self-stretch md:w-auto sm:text-xs sm:self-stretch sm:w-auto sm:flex-1">{`Rising above the competition means delivering products and services faster, and at lower cost, all while meeting customers' organizational goals. Modern cloud technology makes it all possible. `}</div>
                <div className="self-stretch relative leading-[23.97px] font-light md:text-xs md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:flex-1">
                  By partnering with Skybit, you can implement a cloud solution
                  adoption plan that not only accelerates your ability to deploy
                  new technologies but also increases your competitive advantage
                  and unlocks cost savings along the way.
                </div>
                <button
                  className="cursor-pointer py-3 px-[27px] bg-cornflowerblue-200 rounded-81xl flex flex-row items-start justify-start border-[1px] border-solid border-cornflowerblue-200"
                  onClick={onContactButton1Click}
                >
                  <b className="relative text-[14.63px] leading-[17.6px] font-inter text-white text-center">
                    Scroll to Solutions
                  </b>
                </button>
                <div className="self-stretch relative text-[22px] leading-[140%] font-medium text-steelblue-100 md:text-base md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:flex-1">
                  Scale, increase efficiencies, and keep your systems secure
                  with the cloud.
                </div>
                <div className="self-stretch relative leading-[23.4px] font-light md:text-xs md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:flex-1">
                  Whether your enterprise cloud adoption means migrating to the
                  cloud fully or in a hybrid or multi-cloud capacity, we’ll help
                  you assess, engineer, and implement your solution. This type
                  of strategic plan goes a long way in keeping your costs
                  managed and your cloud adoption projects on track. Take a look
                  at how our solutions can help you work smarter not harder.
                </div>
              </div>
              <div className="relative w-[480px] h-[480px] lg:w-[400px] md:w-[640px] sm:hidden sm:h-[120px]">
                <img
                  className="absolute top-[calc(50%_-_240px)] left-[calc(50%_-_235px)] w-[470px] h-[480px] object-cover sm:w-60 sm:h-60"
                  alt=""
                  src="/awsillustration-landingpage-1@2x.png"
                />
              </div>
            </section>
          </div>
        </section>
        <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start py-14 px-2">
          <div className="rounded-2xl bg-white w-[1000px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[24px] lg:w-[1000px] md:w-[720px] sm:w-80">
            <img
              className="relative rounded-lg w-[1000px] h-[250px] overflow-hidden shrink-0 object-cover md:w-[720px] sm:w-80"
              alt=""
              src="/team-journal-image@2x.png"
              data-scroll-to="teamJournalImage"
            />
            <div className="flex flex-col items-start justify-start p-8 gap-[24px] md:w-[720px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] md:flex-1 sm:h-auto">
                <b className="self-stretch relative leading-[150%] uppercase flex items-center h-[19.8px] shrink-0 md:text-sm">
                  Solution
                </b>
                <b className="self-stretch relative text-13xl leading-[150%] flex text-darkslateblue items-center h-9 shrink-0 md:text-9xl">
                  Cloud Strategy
                </b>
                <div className="self-stretch relative leading-[150%] font-light text-darkslategray-200 flex items-center h-[46px] shrink-0 md:text-xs md:w-[640px] md:flex-1 sm:w-[280px] sm:flex-1">
                  Effectively utilizing cloud promises business agility, speed,
                  and reduced costs. Meticulously planning and executing a
                  strategy can ensure your organization realizes the expected
                  results of your efforts.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[24px] text-darkslategray-200 md:self-stretch md:w-auto md:flex-1 md:gap-[16px] sm:flex-col">
                <div className="flex flex-col items-start justify-start py-2 pr-2 pl-0 gap-[8px] md:flex-1 md:self-stretch md:h-auto">
                  <img
                    className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/redapt-icon-solutionbenefit-cloudstrategysvg.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-2 pr-2 pl-0 border-b-[4px] border-solid border-cornflowerblue-200">
                    <div className="self-stretch relative leading-[120%] font-medium md:text-sm sm:w-60">
                      Adopt the cloud with confidence
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-light md:text-xs sm:w-60">
                    Begin your adoption process with your end goals in mind.
                    Work with our team to develop a strategy and roadmap to
                    guide your cloud transformation.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-2 pr-2 pl-0 gap-[8px] md:flex-1 md:self-stretch md:h-auto">
                  <img
                    className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/redapt-icon-solutionbenefit-choosebusinessindustrypartnerselectionsvg.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-2 pr-2 pl-0 border-b-[4px] border-solid border-cornflowerblue-200">
                    <div className="self-stretch relative leading-[120%] font-medium lg:w-[200px] md:text-sm md:w-40 sm:w-60">
                      Select the right tech partner
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-light md:text-xs sm:w-60">
                    A well defined strategy influences your selection of
                    technology partners. We provide unbiased partner
                    recommendations based on your goals and priorities.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-2 pr-2 pl-0 gap-[8px] md:flex-1">
                  <img
                    className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/redapt-icon-solutionbenefit-choosebusinessindustrypartnerselectionsvg.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-2 pr-2 pl-0 border-b-[4px] border-solid border-cornflowerblue-200 sm:w-60">
                    <div className="self-stretch relative leading-[120%] font-medium md:text-sm md:w-[120px] sm:w-60">
                      The right architecture
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-light md:text-xs sm:w-60">
                    Ensure your cloud strategy launches with well-architected
                    solutions backed by industry best practices.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-2 pr-2 pl-0 gap-[8px] md:flex-1 md:self-stretch md:h-auto">
                  <img
                    className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/redapt-icon-solutionbenefit-clouddataapplicationmigrationsvg.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-2 pr-2 pl-0 border-b-[4px] border-solid border-cornflowerblue-200 sm:w-60">
                    <div className="self-stretch relative leading-[120%] font-medium lg:w-[140px] md:text-sm md:w-20 sm:w-60">
                      Seamless migration
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] font-light md:text-xs md:w-[100px] md:flex-1 sm:w-60">
                    Work with our cloud adoption experts to execute your
                    migration plan with our proven methodology.
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer py-3 px-[27px] bg-[transparent] rounded-81xl flex flex-row items-start justify-start border-[2px] border-solid border-cornflowerblue-200"
                onClick={onContactButton2Click}
              >
                <b className="relative text-[14.63px] leading-[150%] font-inter text-cornflowerblue-200 text-center md:text-sm sm:text-xs">
                  Contact Us About Cloud Strategy
                </b>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <section
            className="self-stretch [background:linear-gradient(180deg,_#3f226e,_#2d609e)] flex flex-row items-center justify-center p-16 text-left text-13xl text-white font-inter sm:flex-row"
            data-scroll-to="formsAWS"
          >
            <div className="w-[1120px] flex flex-row items-center justify-center gap-[64px] md:flex-col sm:flex-col sm:items-center sm:justify-start">
              <div className="flex-1 flex flex-col items-start justify-start py-0 px-10 md:flex-[unset] md:self-stretch sm:w-60 sm:gap-[64px] sm:items-center sm:justify-start sm:flex-[unset] sm:self-stretch">
                <div className="flex flex-col items-start justify-start gap-[15px] sm:self-stretch sm:w-auto sm:items-center sm:justify-start">
                  <b className="self-stretch relative leading-[40.5px] sm:text-9xl sm:text-center sm:w-[300px] sm:self-center">
                    Make a strategic and smooth transition to the cloud today.
                  </b>
                  <div className="relative text-base leading-[23.4px] font-light flex items-center w-[415.9px] h-[23px] shrink-0 sm:text-xs sm:text-center sm:w-60 sm:flex-1">
                    Fill out the form to speak with a cloud adoption expert.
                  </div>
                  <img
                    className="relative w-[487.1px] h-[381.6px]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2 gap-[16px] text-sm">
                <div className="flex flex-row items-start justify-start gap-[8px] sm:self-stretch sm:w-auto sm:flex-col">
                  <div className="flex flex-col items-start justify-start gap-[3px] sm:self-stretch sm:w-auto">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      First name
                    </div>
                    <input
                      className="[border:none] bg-white relative rounded-md w-60 h-8 sm:self-stretch sm:w-auto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[3px] text-[13.88px] sm:self-stretch sm:w-auto">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      Last name
                    </div>
                    <input
                      className="[border:none] bg-white relative rounded-md w-60 h-8 sm:self-stretch sm:w-auto"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] sm:self-stretch sm:w-auto sm:flex-col">
                  <div className="flex flex-col items-start justify-start gap-[3px] sm:self-stretch sm:w-auto">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      Business email
                    </div>
                    <input
                      className="[border:none] bg-white relative rounded-md w-60 h-8 sm:self-stretch sm:w-auto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[3px] text-[13.88px] sm:self-stretch sm:w-auto">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      Phone number
                    </div>
                    <input
                      className="[border:none] bg-white relative rounded-md w-60 h-8 sm:self-stretch sm:w-auto"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      How can we help you today?
                    </div>
                    <input
                      className="[border:none] bg-white self-stretch relative rounded-md h-8"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                    <div className="self-stretch relative leading-[19.04px] flex items-center h-5 shrink-0 md:text-xs">
                      Message
                    </div>
                    <input
                      className="[border:none] bg-white self-stretch relative rounded-md h-12"
                      type="text"
                    />
                  </div>
                </div>
                <div className="relative text-[10.24px] leading-[15.87px] flex items-center w-[105.6px] h-[15px] shrink-0">
                  All fields are required.
                </div>
                <a className="[text-decoration:none] self-stretch relative text-xs leading-[120%] text-[inherit] md:text-3xs">
                  <span>{`By submitting this form, you agree to receive communications about Redapt’s products and services. To learn more about our commitment to protecting your privacy, please review our `}</span>
                  <b className="[text-decoration:underline] text-cornflowerblue-200">
                    Privacy Policy
                  </b>
                </a>
                <button className="cursor-pointer [border:none] py-3.5 px-[54px] bg-cornflowerblue-200 rounded-31xl flex flex-row items-center justify-center md:py-3 md:px-8 md:box-border sm:self-stretch sm:w-auto">
                  <div className="relative text-[17.44px] tracking-[-0.36px] leading-[18px] capitalize font-semibold font-inter text-white text-center md:text-sm">{`Contact Us `}</div>
                </button>
              </div>
            </div>
          </section>
          <section className="self-stretch bg-steelblue-200 flex flex-row items-center justify-center py-20 px-16 gap-[64px] text-left text-xs text-white font-inter sm:flex-col sm:gap-[32px] sm:items-start sm:justify-start">
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <img
                className="relative w-[105px] h-[24.3px]"
                alt=""
                src="/divlogo1.svg"
              />
              <div className="relative leading-[180%] flex items-center w-[190px] md:text-xs">
                SkyBit is an end-to-end technology solutions provider that
                brings clarity to a dynamic technical environment. We help
                clients accelerate growth.
              </div>
              <div className="w-36 flex flex-row items-start justify-between">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-[99.38%] w-full top-[0%] right-[0%] bottom-[0.62%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector4.svg"
                  />
                </button>
              </div>
            </div>
            <div className="w-[814.3px] flex flex-row items-start justify-between text-[12.47px] text-cornflowerblue-100 sm:w-auto sm:[align-self:unset] sm:flex-col sm:gap-[24px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <b className="relative leading-[15.4px] flex items-center w-[57.9px] h-[15px] shrink-0">
                  Solutions
                </b>
                <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-white">
                  <a className="[text-decoration:none] relative leading-[120%] text-[inherit] md:text-xs">
                    Cloud Adoption
                  </a>
                  <a className="[text-decoration:none] relative leading-[120%] text-[inherit] md:text-xs">
                    DevOps
                  </a>
                  <a className="[text-decoration:none] relative leading-[120%] text-[inherit] md:text-xs">
                    Enterprise Infrastructure
                  </a>
                  <a className="[text-decoration:none] relative leading-[120%] text-[inherit] md:text-xs">
                    Workplace Modernization
                  </a>
                  <a className="[text-decoration:none] relative leading-[120%] text-[inherit] md:text-xs">
                    Privacy Statement
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <b className="relative leading-[15.4px] flex items-center w-[49.2px] h-[15px] shrink-0">
                  Insights
                </b>
                <a className="[text-decoration:none] relative text-sm leading-[120%] text-white md:text-xs">
                  Blog
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[24px] text-[12.91px]">
                <b className="relative leading-[15.4px] flex items-center w-[60.8px] h-[15px] shrink-0">
                  Company
                </b>
                <a className="[text-decoration:none] relative text-sm leading-[120%] text-white md:text-xs">
                  About Us
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[24px] text-sm">
                <b className="relative text-smi-8 leading-[15.4px] flex items-center w-[69.8px] h-[15px] shrink-0">
                  Contact Us
                </b>
                <div className="flex flex-row items-end justify-start gap-[8px] text-white">
                  <div className="relative leading-[120%] md:text-xs">{`Email: `}</div>
                  <a className="[text-decoration:none] relative leading-[18px] text-cornflowerblue-100 flex items-center w-[166px] h-[19px] shrink-0 md:text-xs">
                    contact@skybit.cloud
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[120%] text-white md:text-xs">{`Corporate Office: `}</div>
                  <a className="[text-decoration:none] relative text-[13.48px] leading-[120%] text-[inherit] md:text-xs">
                    14051 NE 200th Street, Woodinville,
                  </a>
                  <div className="relative text-[13.59px] leading-[120%] flex items-center w-[66.7px] h-[19px] shrink-0 md:text-xs">
                    WA 98072
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch bg-steelblue-200 flex flex-col items-center justify-start py-20 px-16 gap-[8px] text-center text-[13.36px] text-white font-inter">
            <div className="relative w-[1140px] h-[3px] overflow-hidden shrink-0" />
            <div className="self-stretch flex flex-row items-start justify-center gap-[4px]">
              <div className="relative leading-[18px] flex items-center justify-center w-[106.8px] h-[18px] shrink-0 md:text-xs">{`© 2023 SkyBit | `}</div>
              <div className="relative text-[13.13px] leading-[18px] flex items-center justify-center w-[114.3px] h-[19px] shrink-0 md:text-xs">
                Privacy Statement
              </div>
            </div>
          </section>
        </div>
      </div>
      {isDrawerMenuSlideOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrawerMenuSlide}
        >
          <DrawerMenuSlide onClose={closeDrawerMenuSlide} />
        </PortalDrawer>
      )}
    </>
  );
};

export default SkybitComCloudAdoptionLoco;
