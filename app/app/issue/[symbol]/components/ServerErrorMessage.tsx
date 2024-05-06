import type { SubmitAction } from "../actions/submit";

const ServerErrorMessage = ({ response }: { response?: SubmitAction }) => {
  if (response && "statusCode" in response) {
    return (
      <p className="text-xs font-medium text-destructive">{response.message}</p>
    );
  }
  return null;
};

export default ServerErrorMessage;
