import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="lg:px-8 pt-52 lg:pt-10">
  <h1
    className={`text-2xl font-normal leading-[30px] font-sans mb-5`}
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
  >
    Hey, I'm Oluwaferanmi.
  </h1>
  <h2
    className={`font-medium text-5xl md:text-[55px] lg:text-[89px] leading-snug lg:leading-[111px] mb-5`}
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    I help startups, agencies, and businesses build fast, scalable web apps and websites that convert.
  </h2>
  <p className="text-lg mb-6 max-w-xl">
    From clean, responsive UIs to secure backend systems, I work with small and large businesses alike to design, build, and ship custom digital experiences that solve real problems.
  </p>
  <Link
    href={"mailto:oyelowo580@gmail.com"}
    target="_blank"
    className="flex justify-between items-center text-sm border-2 border-[#7e7e97] rounded-3xl px-5 py-3 hover:bg-[#7e7e97] hover:text-[#09090B] transition-all duration-300 mb-10 ease-in max-w-[150px]"
  >
    Let’s Work <AiOutlineArrowRight />
  </Link>
</section>
  );
}
