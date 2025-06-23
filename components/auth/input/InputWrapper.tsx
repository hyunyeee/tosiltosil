interface InputWrapperProps {
  error: boolean;
  helperText?: string;
  children: React.ReactNode;
  isVerified?: boolean;
  sort: "login" | "signup";
}

const InputWrapper = ({
  error = false,
  helperText = "",
  children,
  isVerified,
  sort,
}: InputWrapperProps) => {
  const containerClass = `
    flex w-full items-center gap-[6px] rounded-[6px] border-1 py-[12px] pr-[12px] pl-[20px]
    ${error ? "border-primary-red" : "border-primary-darkGray"}
    ${isVerified && !error ? "bg-primary-gray" : ""}
  `;

  return (
    <div>
      <div className={containerClass}>{children}</div>
      {((sort === "login" && error) || sort === "signup") && (
        <p
          role={error ? "alert" : "note"}
          aria-live={error ? "polite" : undefined}
          className={`${
            error ? "text-primary-red" : "text-primary-darkGray"
          } footnote ml-[20px]`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputWrapper;
