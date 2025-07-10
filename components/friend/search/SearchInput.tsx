interface SearchInputProps {
  value: string;
  onInputChange: (value: string) => void;
}

const SearchInput = ({ value, onInputChange }: SearchInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const handleClearClick = () => {
    onInputChange("");
  };

  return (
    <form className="bg-gray-card border-primary-gray flex items-center gap-2 rounded-[6px] border-1 p-[12px]">
      <img src="/icons/search-icon.svg" />
      <input
        className="w-full focus:ring-0 focus:outline-none"
        placeholder="닉네임이나 코드를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      {value && (
        <button
          type="button"
          className="flex-shrink-0 cursor-pointer"
          onClick={handleClearClick}
        >
          <img src="/icons/delete-icon.svg" alt="입력값 초기화 아이콘" />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
