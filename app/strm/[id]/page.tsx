import getStream from "@/app/actions/getStream";

const StreamPage = async ({ params: { id } }: { params: { id: string } }) => {
  const stream = await getStream(id);
  return <div>{JSON.stringify(stream)}</div>;
};

export default StreamPage;
