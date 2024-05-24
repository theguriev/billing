/* eslint-disable tailwindcss/no-arbitrary-value */
import { Skeleton } from "@/components/ui/skeleton";

const TransactioSkeleton = () => {
  return (
    <div className="flex items-center justify-between border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md">
      <div className="flex items-center space-x-2">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-4 w-[100px] md:w-[250px]" />
          <Skeleton className="h-4 w-[50px] md:w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col items-end space-y-1">
        <Skeleton className="h-4 w-[40px] md:w-[100px]" />
        <Skeleton className="h-4 w-[20px] md:w-[60px]" />
      </div>
    </div>
  );
};
export default TransactioSkeleton;
