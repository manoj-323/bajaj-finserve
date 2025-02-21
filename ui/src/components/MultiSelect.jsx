import Select from "react-select";

const options = [
  { value: "numbers", label: "Numbers" },
  { value: "alphabets", label: "Alphabets" },
  { value: "highest_alphabet", label: "Highest Alphabet" },
];

const MultiSelect = ({ setSelectedFilters }) => {
  return (
    <div className="mb-4 w-full max-w-md">
      <Select
        isMulti
        options={options}
        onChange={(selectedOptions) => setSelectedFilters(selectedOptions.map((opt) => opt.value))}
      />
    </div>
  );
};

export default MultiSelect;
