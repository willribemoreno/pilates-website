'use client';

import SideNav from '@/app/ui/manage/sidenav';
import Form from 'next/form';

export default function Patients() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-full flex min-h-screen items-center justify-center p-6 mt-3">
        <div className="w-full min-h-screen flex flex-1 pb-6">
          <Form action="/search">
            {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
            <input name="query" />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
