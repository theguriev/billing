const PasswordProgress = ({
  validConditions,
  lengthValid,
  caseValid,
  digitValid,
  symbolValid,
}: {
  validConditions: number;
  lengthValid?: boolean;
  caseValid?: boolean;
  digitValid?: boolean;
  symbolValid?: boolean;
}) => (
  <>
    <div>
      <div className="mb-2 flex flex-row gap-1">
        <div
          className={`h-1 w-3/12 ${
            validConditions > 0 ? "bg-green-500" : "bg-zinc-300"
          }`}
        />
        <div
          className={`h-1 w-3/12 ${
            validConditions > 1 ? "bg-green-500" : "bg-zinc-300"
          }`}
        />
        <div
          className={`h-1 w-3/12 ${
            validConditions > 2 ? "bg-green-500" : "bg-zinc-300"
          }`}
        />
        <div
          className={`h-1 w-3/12 ${
            validConditions > 3 ? "bg-green-500" : "bg-zinc-300"
          }`}
        />
      </div>
      <div className="flex flex-col gap-1 text-xs text-zinc-400">
        <span className={`${lengthValid && "text-green-500"}`}>
          more than 8 but less than 20 characters
        </span>
        <span className={`${caseValid && "text-green-500"}`}>
          lower case and upper case
        </span>
        <span className={`${digitValid && "text-green-500"}`}>
          at least one number
        </span>
        <span className={`${symbolValid && "text-green-500"}`}>
          at least one special symbol
        </span>
      </div>
    </div>
  </>
);

export default PasswordProgress;
