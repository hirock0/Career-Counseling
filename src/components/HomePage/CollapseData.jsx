import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const CollapseData = ({ item }) => {
  const [collapseFlag, setCollapseFlag] = useState(false);
  return (
    <li className=" " data-aos="fade-left">
      <div className="bg-base-200 collapse">
        <input
          type="checkbox"
          className="peer"
          onClick={() => setCollapseFlag(!collapseFlag)}
        />

        <div className="collapse-title flex items-center justify-between bg-slate-100 text-cyan-800 font-semibold peer-checked:bg-base-100 peer-checked:text-cyan-800  ">
          <h1>{item.title}</h1>
          {!collapseFlag ? <FaPlus /> : <FaMinus />}
        </div>
        {/* --- */}
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-cyan-800">
          <p>{item.descriptions}</p>
        </div>
      </div>
    </li>
  );
};

export default CollapseData;
