import InputWrapper from "@/components/auth/input/InputWrapper";

interface EmailInputProps {
  name: string; //name: keyof typeof formData;
  errorMessage: string;
  value: string;
  onInputChange: (name: EmailInputProps["name"], value: string) => void;
}

const EmailInput = ({
  name,
  errorMessage,
  value,
  onInputChange,
}: EmailInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

  const handleClearClick = () => {
    onInputChange(name, "");
  };

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={errorMessage || "이메일 양식에 맞춰서 입력해주세요"}
    >
      <input
        className="subhead1 h-[24px] flex-grow"
        placeholder="Email"
        type="email"
        value={value}
        onChange={handleInputChange}
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
