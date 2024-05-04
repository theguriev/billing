import type { SubmitAction } from "../actions/submit";

const ServerErrorMessage = ({ response }: { response?: SubmitAction }) => {
  if (
    response &&
    "statusCode" in response &&
    (response.statusCode === 409 || response.statusCode === 403)
  ) {
    return (
      <p className="text-xs font-medium text-destructive">{response.message}</p>
    );
  }
  return null;
};

export default ServerErrorMessage;
