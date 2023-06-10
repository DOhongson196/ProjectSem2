function Skeleton() {
  return (
    <div class="animate-pulse">
      <div class="flex-1 space-y-6 py-1">
        <div class="h-[305px] bg-slate-300 dark:bg-slate-500 rounded-xl "></div>
        <div class="space-y-3">
          <div class="h-4 bg-slate-300 dark:bg-slate-500 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-1"></div>
            <div class="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
