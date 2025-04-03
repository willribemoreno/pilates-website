'use client';

import SideNav from '@/app/ui/manage/sidenav';
import Table from '@/app/ui/manage/table';

export default function Patients() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-full flex min-h-screen items-center justify-center p-6 mt-3">
        <div className="w-full min-h-screen flex flex-1 pb-6">
          <Table />
        </div>
      </div>
    </div>
  );
}
