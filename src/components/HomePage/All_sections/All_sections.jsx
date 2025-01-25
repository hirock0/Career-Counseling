import CollapseData from "../CollapseData";
import { RiExchangeDollarFill } from "react-icons/ri";
import LearnMoreBtn from "../LearnMoreBtn";
import { IndividualsServices } from "./Static_Api";
import { ourOrganiZation } from "./Static_Api";
import { OurSchoolService } from "./Static_Api";
import BriefCard from "../BriefCard";
import Marquee from "react-fast-marquee";
import { SlidingNewsData } from "./Static_Api";
import { WhyChooseMe_Collapse } from "./Static_Api";
import { useAppContext } from "../../../ContextApi/ContextApi";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const All_sections = () => {
  const { servicesCardData } = useAppContext();
  const SliceData = servicesCardData.slice(0, 6);
  return (
    <div className="">
      {/* -------some_data_section_start---------- */}
      <section className=" my-5">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          We can help you
        </h1>
        <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 justify-items-center">
          {SliceData.map((item, index) => (
            <ServiceCard key={index} item={item} flag={"HomePage"} />
          ))}
        </div>
        <div className=" mt-5" data-aos="fade-up">
          <Link to={"/services"} className=" btn btn-primary">
            See More...
          </Link>
        </div>
      </section>
      {/* --------some_data_section_end--------- */}
      {/* section_1_start */}
      <section className=" mt-10 ">
        <div className="">
          {/* ------------------------ */}
          <div
            data-aos="fade-up"
            className=" flex max-md:flex-col items-center gap-5 justify-between"
          >
            {/* ------- */}
            <div className=" w-4/6 max-md:w-full">
              <p className=" text-3xl max-sm:text-2xl">
                Make career and life decisions you can feel confident about with
                the help of Bangladesh’s leading Career Psychologists and
                Counsellors.
              </p>
              <p className="m-4 opacity-80">
                Using our unique and individualized Career Counselling process,
                we can work with you at our Calgary and Toronto offices, or
                online from most locations across Bangladesh.
              </p>
              <LearnMoreBtn />
            </div>
            {/* --- */}
            <div className="  w-2/6 max-md:w-full h-80 ">
              <iframe
                className=" w-full p-4 h-full rounded-md shadow-lg"
                src="https://www.youtube.com/embed/4e6KSaCxcHs?si=cbNKNG4k1xofWCIO"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen={true}
              ></iframe>
            </div>
            {/* -- */}
          </div>
          {/* ------------------------------------ */}

          <div
            data-aos="fade-up"
            className=" flex mt-10 flex-row-reverse max-md:flex-col items-center gap-5 justify-between"
          >
            {/* ------- */}
            <div data-aos="fade-left" className=" w-4/6 max-md:w-full">
              <p className=" text-3xl max-sm:text-2xl">
                Confused, unhappy, or uncertain about your career? Struggling to
                navigate work-related challenges and need some expert support?
              </p>
              <p className="mt-4 opacity-80">
                From entry-level to executives, Bangladesh Career Counselling
                has helped thousands of Canadians make career decisions and grow
                in their careers and lives.
              </p>
            </div>
            {/* --- */}
            <div className=" w-2/6 max-md:w-full">
              <img
                data-aos="fade-right"
                className=" w-full  object-cover"
                src="https://i.ibb.co.com/n0jdLFK/consultant.png"
                alt="consultant"
              />
            </div>
            {/* -- */}
          </div>
          {/* ------------------------------------ */}
        </div>
      </section>
      {/* section_1_end */}
      {/* section_2_start */}

      <section className=" bg-cyan-500 py-20 ">
        <div
          data-aos="fade-up"
          className=" flex gap-5 justify-between  max-md:flex-col-reverse"
        >
          <div className=" w-2/6 max-md:w-full h-80 ">
            <iframe
              data-aos="fade-left"
              className=" w-full p-4 h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/4e6KSaCxcHs?si=cbNKNG4k1xofWCIO"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen={true}
            ></iframe>
          </div>
          <div className=" w-4/6 max-md:w-full">
            <h1 className=" text-base-100 font-semibold text-xl my-5">
              Why Choose Bangladesh Career Counselling?
            </h1>
            <ul className=" space-y-5">
              {WhyChooseMe_Collapse.map((item, index) => (
                <CollapseData key={index} item={item} />
              ))}
            </ul>
            <LearnMoreBtn />
          </div>
        </div>
      </section>

      {/* section_2_end */}
      {/* ---------- */}
      {/* section_3_start */}
      <section className=" py-10 items-center">
        {/* ---------------------------------- */}
        <div className=" flex items-center" data-aos="fade-up">
          {/* ----- */}
          <div className="">
            <h1 className=" text-2xl font-semibold mb-5">
              Extended Health Coverage
            </h1>
            <p>
              Did you know that many benefit/extended health plans provide
              coverage towards sessions and assessments with our Registered
              Psychologists, Registered Psychotherapists, and Registered
              Counselling Therapists and Canadian Certified Counsellors?
            </p>
            <LearnMoreBtn />
          </div>
          {/* ----- */}
          <div className=" max-md:hidden">
            <RiExchangeDollarFill
              className=" text-7xl text-lime-400"
              size={150}
            />
          </div>
          {/* ----- */}
        </div>
        {/* --------------------------------------- */}
      </section>
      {/* section_3_end */}
      {/* -------------------- */}
      {/* section_4_start */}
      <section className=" bg-gradient-to-tl from-lime-800 via-lime-600/80 to-lime-100 ">
        <div data-aos="fade-up" className="py-20 max-md:py-10 ">
          <h1 className=" text-center mb-5 text-4xl max-lg:text-3xl font-semibold">
            Our Services for Individuals:
          </h1>

          <div className=" grid gap-5 grid-cols-2 max-md:grid-cols-1">
            {IndividualsServices?.map((item, index) => (
              <BriefCard key={index} item={item} flag={"individual"} />
            ))}
          </div>
        </div>
      </section>
      {/* section_4_end */}
      {/* --------------------------- */}
      {/* section_5_start */}
      <section className=" bg-gradient-to-tl from-lime-800 via-lime-600/80 to-yellow-100 ">
        <div data-aos="fade-up" className="py-20 max-md:py-10 ">
          <h1 className=" text-center mb-5 text-4xl max-lg:text-3xl  max-sm:text-xl font-semibold">
            Our Services for Organizations:
          </h1>

          <div className=" grid gap-5 grid-cols-2 max-md:grid-cols-1">
            {ourOrganiZation?.map((item, index) => (
              <BriefCard key={index} item={item} flag={"organization"} />
            ))}
          </div>
        </div>
      </section>
      {/* section_5_end */}
      {/* --------------------------- */}
      {/* section_6_start */}
      <section className=" bg-gradient-to-tl from-teal-800 via-teal-600/80 to-yellow-100 ">
        <div data-aos="fade-up" className="py-20 max-md:py-10 ">
          <h1 className=" text-center mb-5 text-4xl max-lg:text-3xl  font-semibold">
            Our Services for Schools:
          </h1>

          <div className=" flex justify-center items-center">
            <div className=" w-1/2 max-md:w-full">
              {OurSchoolService?.map((item, index) => (
                <BriefCard key={index} item={item} flag={"organization"} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* section_6_end */}
      {/* ------------ */}
      {/* section_7_start */}

      <div data-aos="fade-up" className=" bg-base-300 py-10">
        <Marquee speed={20} pauseOnClick play={true}>
          <div className=" flex gap-20 max-sm:gap-10">
            {SlidingNewsData.map((item, index) => (
              <div
                key={index}
                className={`${
                  index == 0 && "ml-20 max-sm:ml-10"
                } h-96 w-72 bg-base-100 rounded-lg shadow-lg p-5 flex flex-col items-center`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" h-32 w-32 "
                />

                <div className="">
                  <h1 className=" text-xl font-semibold">{item.title}</h1>
                  <p className=" text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      {/* section_7_end */}
    </div>
  );
};

export default All_sections;
