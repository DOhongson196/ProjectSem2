function Skeleton() {
  return (
    <div className="rounded-md p-3 max-w-7xl w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="space-y-2">
            <div className="grid grid-cols-6 gap-4">
              <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-1 mt-2"></div>
              <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-1 mt-2"></div>
              <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-2 mt-2 mr-3"></div>
              <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-2 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
