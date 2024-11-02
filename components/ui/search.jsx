import { RiSearchLine } from "react-icons/ri";

const Search = ({ onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="flex md:w-[700px] h-full px-10 py-4 rounded-md bg-white gap-4">
      <RiSearchLine size={25} color="blue" />
      <input
        type="text"
              placeholder="search your FAQs here"
              onChange={handleChange}
        className="font-[400px] text-[16px] leading-[27px] text-[#12305B] border-none bg-none outline-none w-full"
      />
    </div>
  );
};

export default Search;
