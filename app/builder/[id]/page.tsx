import { cookies } from "next/headers";

import getStream from "@/app/actions/getStream";
import parseJSON from "@/app/utils/parseJSON";

import Builder from "./components/Builder";

const getBuilderLayout = (): [number, number] => {
  const builderLayout = cookies().get("builderLayout")?.value;
  const parsedLayout = parseJSON<[number, number]>(builderLayout || "");
  if (Array.isArray(parsedLayout) && parsedLayout.length === 2) {
    return parsedLayout;
  }
  return [75, 25];
};

const getShowSidebar = () => cookies().get("showSidebar")?.value === "1";

const BuilderPage = async ({ params: { id } }: { params: { id: string } }) => {
  const defaultLayout = getBuilderLayout();
  const defaultShowSidebar = getShowSidebar();
  const stream = await getStream(id);
  return (
    <Builder
      stream={stream}
      defaultLayout={defaultLayout}
      defaultShowSidebar={defaultShowSidebar}
    />
  );
};

export default BuilderPage;
