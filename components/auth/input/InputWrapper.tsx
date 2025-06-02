interface InputWrapperProps {
  error: boolean;
  helperText?: string;
  children: React.ReactNode;
}

const InputWrapper = ({
  error = false,
  helperText = "helper text",
  children,
}: InputWrapperProps) => {
  return (
    <div>
      <div
        className={`${error ? "border-primary-red" : "border-primary-darkGray"} flex w-full items-center gap-[3px] rounded-[6px] border-1 py-[12px] pr-[12px] pl-[20px]`}
      >
        {children}
      </div>
      <p
        className={`${
          error ? "text-primary-red" : "text-primary-darkGray"
        } footnote ml-[20px]`}
      >
        {helperText}
      </p>
    </div>
  );
};

export default InputWrapper;
