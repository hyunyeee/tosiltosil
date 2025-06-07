import InputWrapper from "@/components/auth/input/InputWrapper";

interface CodeInputProps {
  errorMessage: string;
  value: string;
  handleInputChange: (value: string) => void;
}

const CodeInput = ({
  errorMessage,
  value,
  handleInputChange,
}: CodeInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  const handleClearClick = () => {
    handleInputChange("");
  };

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={errorMessage || "* 인증번호 6글자를 입력해주세요"}
    >
      <input
        className="subhead1 h-[24px] flex-grow-1"
        placeholder="인증번호 입력"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p className="caption2">5:00</p>
      <button
        type="button"
        className="cursor-pointer"
        onClick={handleClearClick}
      >
        <img
          src="/icons/re-send-icon.svg"
          alt="이메일 인증번호 재전송 아이콘"
        />
      </button>
    </InputWrapper>
  );
};

export default CodeInput;
