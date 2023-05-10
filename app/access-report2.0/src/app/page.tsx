import Image from 'next/image';
import PageReport from './PageReport';
import SiteOverallReport from './SiteOverallReport';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <SiteOverallReport />
      <PageReport />
    </main>
  )
}
