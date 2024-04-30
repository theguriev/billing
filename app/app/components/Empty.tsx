import NewStream from "./NewStream";

const Empty = () => (
  <div className="flex flex-col items-center justify-center gap-3">
    <span className="text-7xl">☹️</span>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold tracking-tight">No streams</h1>
      <p className="text-sm text-muted-foreground">
        Create a new stream to get started.
      </p>
    </div>
    <NewStream />
  </div>
);

export default Empty;
