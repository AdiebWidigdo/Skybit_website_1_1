import { FunctionComponent, useState, useCallback } from "react";
import DrawerMenuSlide from "../components/drawer-menu-slide";
import PortalDrawer from "../components/portal-drawer";
import { useNavigate } from "react-router-dom";

const SkybitComLocofy: FunctionComponent = () => {
  const [isDrawerMenuSlideOpen, setDrawerMenuSlideOpen] = useState(false);
  const navigate = useNavigate();

  const onDivlogoClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divthemeBlock']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  const onListItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-white w-full flex flex-col items-center justify-start pt-6 px-0 pb-0 box-border gap-[40px] lg:gap-[64px]">
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
          <section
            className="self-stretch h-80 flex flex-col items-center justify-center py-0 px-16 box-border bg-[url('/public/divthemeblock@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-13xl text-white font-inter"
            data-scroll-to="divthemeBlock"
          >
            <div className="w-[1181.2px] overflow-hidden flex flex-row items-center justify-between md:self-stretch md:w-auto sm:flex-col sm:items-center sm:justify-center">
              <div className="w-[374px] h-[204px] flex flex-col items-center justify-between py-[52px] px-[102px] box-border md:flex-1 sm:self-stretch sm:w-auto sm:flex-1">
                <img
                  className="relative w-[170px] h-[101px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/aws-whitepng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:self-stretch sm:w-auto sm:items-center sm:justify-start sm:flex-[unset]">
                <b className="self-stretch relative leading-[120%] flex items-center h-[72px] shrink-0 md:self-stretch md:w-auto sm:text-5xl sm:text-center sm:w-[200px] sm:flex-1 sm:self-center">
                  AWS and SkyBit
                </b>
                <div className="self-stretch relative text-sm leading-[120%] font-light md:self-stretch md:w-auto sm:text-xs sm:text-center sm:flex-1">
                  Maximize your cloud efficiency with SkyBit.cloud – expert AWS
                  solutions tailored for significant cost savings.
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="self-stretch bg-white flex flex-row items-center justify-center py-8 px-16 gap-[24px] text-left text-5xl text-steelblue-100 font-inter lg:pl-16 lg:box-border md:flex-col">
          <div className="flex flex-col items-start justify-start gap-[26px] sm:self-stretch sm:w-auto sm:flex-1">
            <b className="relative leading-[41.92px] flex items-center w-[571px] h-[109px] shrink-0 md:text-xl sm:self-stretch sm:w-auto">
              Unlock the full potential of AWS with tailored solutions for
              optimal performance.
            </b>
            <div className="relative text-sm leading-[23.97px] font-semibold text-darkslategray-100 flex items-center w-[601px] md:text-xs sm:self-stretch sm:w-auto sm:flex-1">
              By transitioning to AWS, you'll gain the advantages of the cloud:
              reduced costs, operational dexterity, and efficient oversight that
              will free your team to focus on strategy and innovation. We equip
              enterprises to stay at the front of emerging technology. That's
              why we're proud to offer a team of AWS-certified
              professionals—whether we’re consulting on innovation efforts or
              helping migrate workloads clearly and intuitively.
            </div>
          </div>
          <img
            className="relative w-[540px] h-[256.3px] lg:w-[400px] md:w-[640px] sm:h-40"
            alt=""
            src="/logo-aws-partner.svg"
          />
        </section>
        <section className="self-stretch flex flex-col items-center justify-start py-2 px-0 gap-[24px] text-center text-13xl text-darkslateblue font-inter">
          <b className="self-stretch relative flex items-center justify-center h-[55px] shrink-0 md:text-5xl">
            Our AWS Capabilities
          </b>
          <div className="self-stretch bg-whitesmoke-100 flex flex-col items-center justify-start gap-[8px] text-5xl text-steelblue-100">
            <div className="w-[1200px] flex flex-row items-start justify-center lg:self-stretch lg:w-auto md:self-stretch md:w-auto md:flex-row sm:hidden sm:flex-col">
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gainsboro h-[331.6px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-1@2x.png"
                    />
                  </div>
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-center py-2 px-6">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Modern data center
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      Leverage the speed and security of AWS cloud computing to
                      efficiently run enterprise and cloud-native workloads at
                      any scale.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch h-[298px] flex flex-col items-center justify-center py-2 px-6 box-border">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Hybrid cloud
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      With AWS, choose the best of both worlds. Integrated
                      services across on-premises and cloud-based workloads
                      offer the flexibility and consistency your business needs.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo1.svg"
                  />
                  <div className="self-stretch bg-gainsboro h-[352px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-11@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gainsboro h-[331.6px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-12@2x.png"
                    />
                  </div>
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-center py-2 px-6">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Trusted management Tool
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      Leverage the speed and security of AWS cloud computing to
                      efficiently run enterprise and cloud-native workloads at
                      any scale.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1200px] hidden flex-row items-start justify-center lg:self-stretch lg:w-auto md:self-stretch md:w-auto md:flex-row sm:flex sm:flex-col">
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gainsboro h-[331.6px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-1@2x.png"
                    />
                  </div>
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-center py-2 px-6">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Modern data center
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      Leverage the speed and security of AWS cloud computing to
                      efficiently run enterprise and cloud-native workloads at
                      any scale.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gainsboro h-[331.6px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-13@2x.png"
                    />
                  </div>
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo2.svg"
                  />
                </div>
                <div className="self-stretch h-[298px] flex flex-col items-center justify-center py-2 px-6 box-border">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Hybrid cloud
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      With AWS, choose the best of both worlds. Integrated
                      services across on-premises and cloud-based workloads
                      offer the flexibility and consistency your business needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 h-[684px] flex flex-col items-start justify-start gap-[8px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gainsboro h-[331.6px] flex flex-row items-start justify-start p-2 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/illustration1-databae-12@2x.png"
                    />
                  </div>
                  <img
                    className="relative w-[50px] h-[25px]"
                    alt=""
                    src="/pseudo.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-center py-2 px-6">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
                    <b className="self-stretch relative leading-[120%] md:text-xl">
                      Trusted management Tool
                    </b>
                    <div className="self-stretch relative text-sm leading-[23.97px] text-darkslategray-100 flex items-center justify-center h-[116px] shrink-0 md:text-xs">
                      Leverage the speed and security of AWS cloud computing to
                      efficiently run enterprise and cloud-native workloads at
                      any scale.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-center justify-start py-2 px-16 gap-[24px] text-center text-13xl text-darkslateblue font-inter">
          <b className="self-stretch relative flex items-center justify-center h-12 shrink-0">
            Additional Resources
          </b>
          <section className="w-[1100px] flex flex-row items-start justify-center gap-[16px] lg:self-stretch lg:w-auto sm:flex-col sm:gap-[24px]">
            <article className="self-stretch flex-1 rounded-t-none rounded-b-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.11)] flex flex-col items-start justify-start gap-[20px] text-left text-sm text-black font-inter sm:flex-[unset] sm:self-stretch">
              <img
                className="self-stretch relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[238px] shrink-0 object-cover"
                alt=""
                src="/image-preview@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start py-4 px-6 gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-end gap-[16px]">
                  <div className="relative leading-[23.4px] md:text-xs">
                    SUCCESS STORIES
                  </div>
                  <div className="self-stretch relative text-lg leading-[120%] font-semibold text-steelblue-100 md:text-base">
                    Making the Move to the Cloud
                  </div>
                  <div className="self-stretch relative leading-[160%] font-medium text-darkslategray-100 md:text-xs">
                    When MiraSMART Conferencing wanted to improve developer
                    productivity without the worry of hardware and network
                    management, it partnered with Redapt to move to the cloud.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-[15.75px] text-cornflowerblue-200">
                  <a className="[text-decoration:none] relative leading-[23.4px] font-bold text-[inherit] flex items-center w-[153.9px] h-[23px] shrink-0 md:text-xs">{`View Success Story `}</a>
                  <img
                    className="relative w-[17.3px] h-[14.5px] overflow-hidden shrink-0"
                    alt=""
                    src="/link--svgbuttonarrowsvg.svg"
                  />
                </div>
              </div>
            </article>
            <article className="self-stretch flex-1 rounded-t-none rounded-b-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.11)] flex flex-col items-start justify-start gap-[20px] text-left text-sm text-black font-inter sm:flex-[unset] sm:self-stretch">
              <img
                className="self-stretch relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[238px] shrink-0 object-cover"
                alt=""
                src="/image-preview1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start py-4 px-6 gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-end gap-[16px]">
                  <div className="self-stretch relative leading-[23.4px] md:text-xs">
                    SUCCESS STORIES
                  </div>
                  <div className="self-stretch relative text-lg leading-[120%] font-semibold text-steelblue-100 md:text-base">
                    Maintaining High Security While Increasing Mobility and
                    Flexibility
                  </div>
                  <div className="self-stretch relative leading-[160%] font-medium text-darkslategray-100 md:text-xs">
                    When a Colorado-based space technology company needed help
                    to expand and maintain its air-gapped environment to run
                    downstream Kubernetes clusters in the cloud, this space
                    innovator reached out to Redapt for support.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-[15.75px] text-cornflowerblue-200">
                  <a className="[text-decoration:none] relative leading-[23.4px] font-bold text-[inherit] flex items-center w-[153.9px] h-[23px] shrink-0 md:text-xs">{`View Success Story `}</a>
                  <img
                    className="relative w-[17.3px] h-[14.5px] overflow-hidden shrink-0"
                    alt=""
                    src="/link--svgbuttonarrowsvg.svg"
                  />
                </div>
              </div>
            </article>
            <article className="self-stretch flex-1 rounded-t-none rounded-b-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.11)] flex flex-col items-start justify-start gap-[20px] text-left text-sm text-black font-inter sm:flex-[unset] sm:self-stretch">
              <img
                className="self-stretch relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[238px] shrink-0 object-cover"
                alt=""
                src="/image-preview2@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start py-4 px-6 gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-end gap-[16px]">
                  <div className="self-stretch relative leading-[23.4px] md:text-xs">
                    SUCCESS STORIES
                  </div>
                  <div className="self-stretch relative text-lg leading-[120%] font-semibold text-steelblue-100 md:text-base">
                    Scaling Cloud Infrastructure to Expand Within Larger Markets
                  </div>
                  <div className="self-stretch relative leading-[160%] font-medium text-darkslategray-100 md:text-xs">
                    When Care Coordination Systems decided to increase its
                    market to include the West Coast, CCS partnered with Redapt
                    to scale its cloudbased infrastructure.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-[15.75px] text-cornflowerblue-200">
                  <a className="[text-decoration:none] relative leading-[23.4px] font-bold text-[inherit] flex items-center w-[153.9px] h-[23px] shrink-0 md:text-xs">{`View Success Story `}</a>
                  <img
                    className="relative w-[17.3px] h-[14.5px] overflow-hidden shrink-0"
                    alt=""
                    src="/link--svgbuttonarrowsvg.svg"
                  />
                </div>
              </div>
            </article>
          </section>
        </section>
        <div className="self-stretch flex flex-col items-center justify-start">
          <section
            className="self-stretch [background:linear-gradient(180deg,_#3f226e,_#2d609e)] flex flex-row items-center justify-center p-16 text-left text-9xl text-white font-inter sm:flex-row"
            data-scroll-to="formsAWS"
          >
            <div className="w-[1120px] flex flex-row items-center justify-center gap-[64px] sm:flex-col sm:items-center sm:justify-start">
              <div className="flex-1 flex flex-col items-start justify-start py-0 px-10 gap-[32px] sm:w-60 sm:gap-[64px] sm:items-center sm:justify-start sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative tracking-[0.96px] leading-[120%] lg:text-5xl md:text-xl sm:text-5xl sm:leading-[40px] sm:self-stretch sm:w-auto">{`Contact us to save up to 72% off your AWS billing `}</b>
                <img
                  className="relative w-[250px] h-[150.8px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/aws-logo-whtpng@2x.png"
                />
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
                  <a
                    className="[text-decoration:none] relative leading-[120%] text-[inherit] cursor-pointer md:text-xs"
                    onClick={onListItemClick}
                  >
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

export default SkybitComLocofy;
