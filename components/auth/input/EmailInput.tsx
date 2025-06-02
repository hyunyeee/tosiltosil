import InputWrapper from "@/components/auth/input/InputWrapper";

interface EmailInputProps {
  errorMessage: string;
  value: string;
  onChange: (value: string) => void;
}

const EmailInput = ({ errorMessage, value, onChange }: EmailInputProps) => {
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
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => onChange("")}
        >
          <img src="/icons/delete-icon.svg" alt="value 초기화 아이콘" />
        </button>
      )}
    </InputWrapper>
  );
};

export default EmailInput;
