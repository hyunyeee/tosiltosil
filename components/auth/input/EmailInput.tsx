import InputWrapper from "@/components/auth/input/InputWrapper";

interface EmailInputProps {
  errorMessage: string;
  value: string;
  handleInputChange: (value: string) => void;
}

const EmailInput = ({
  errorMessage,
  value,
  handleInputChange,
}: EmailInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  const handleClearClick = () => {
    handleInputChange("");
  };

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={errorMessage || "이메일 양식에 맞춰서 입력해주세요"}
    >
      <input
        className="subhead1 h-[24px] flex-grow-1"
        placeholder="Email"
        type="email"
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button
          type="button"
          className="cursor-pointer"
          onClick={handleClearClick}
        >
          <img src="/icons/delete-icon.svg" alt="value 초기화 아이콘" />
        </button>
      )}
    </InputWrapper>
  );
};

export default EmailInput;
