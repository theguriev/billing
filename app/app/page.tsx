import getStreams from "./actions/getStreams";
import Empty from "./components/Empty";
import Stream from "./components/Stream";

const Streams = async () => {
  const streams = await getStreams();

  return (
    <div className="flex flex-col justify-center gap-6">
      {streams.length === 0 ? (
        <Empty />
      ) : (
        streams.map((stream) => <Stream key={stream._id} {...stream} />)
      )}
    </div>
  );
};

export default Streams;
