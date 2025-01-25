import { IoSearch } from "react-icons/io5";
import { useAppContext } from "../../ContextApi/ContextApi";
import Loading from "../../components/Loading/Loading";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
const Services = () => {
  const { servicesCardData, loading } = useAppContext();
  const [cards, setCards] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchData, setSearchData] = useState("");
  const searchCards = servicesCardData.filter((item) =>
    item.service_name.toLowerCase().includes(searchData.toLocaleLowerCase())
  );

  const onSearch = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSearchFlag(true);
    }, 1000);
    setCards(searchCards);
  };

  useEffect(() => {
    if (searchData === "") {
      setTimeout(() => {
        setSearchFlag(false);
      }, 1000);
    }
  }, [searchFlag, searchData]);

  return (
    <main>
      <div className=" pb-20">
        <section>
          <div className=" ">
            {/* search_section_start */}
            <div className=" sticky  z-40 top-20 pb-5 bg-base-100 flex items-center   justify-center mt-5">
              <form
                onSubmit={onSearch}
                className="relative h-12 w-1/2 max-md:w-5/6 max-sm:w-full flex items-center rounded-full overflow-hidden border shadow-md"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setSearchData(e.target.value)}
                  value={searchData}
                  placeholder="Search"
                  className=" pl-5 w-full h-full outline-none "
                />
                <button
                  type="submit"
                  className=" bg-green-400 text-white h-full w-12 flex items-center justify-center absolute right-0"
                >
                  <IoSearch size={25} />
                </button>
              </form>
            </div>
            {/* search_section_end */}
            {/* ------------------------------------- */}
            {/* card_section_start */}
            <div className=" ">
              {loading ? (
                <Loading />
              ) : cards.length == 0 && searchFlag ? (
                <div className=" min-h-screen">
                  <h1 className=" text-center mt-10 max-sm:mt-5 max-sm:text-base text-red-600 text-xl font-semibold">
                    Data not available
                  </h1>
                  <div className=" flex items-center justify-center">
                    <img
                      src="https://i.ibb.co.com/QHzmN5N/not-found.png"
                      alt="not found"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={` ${
                    cards.length == 0 && "min-h-screen"
                  } grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 w-full justify-items-center`}
                >
                  {!searchFlag
                    ? servicesCardData?.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                      ))
                    : cards?.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                      ))}
                </div>
              )}
            </div>
            {/* cart_section_end */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;
