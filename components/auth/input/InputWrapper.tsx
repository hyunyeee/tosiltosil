interface InputWrapperProps {
  error: boolean;
  helperText?: string;
  children: React.ReactNode;
  isVerified?: boolean;
}

const InputWrapper = ({
  error = false,
  helperText = "helper text",
  children,
  isVerified,
}: InputWrapperProps) => {
  return (
    <div>
      <div
        className={`${error ? "border-primary-red" : "border-primary-darkGray"} ${isVerified && !error && "bg-primary-gray"} flex w-full items-center gap-[3px] rounded-[6px] border-1 py-[12px] pr-[12px] pl-[20px]`}
      >
        {children}
      </div>
      <p
        role={error ? "alert" : "note"}
        aria-live={error ? "polite" : undefined}
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
