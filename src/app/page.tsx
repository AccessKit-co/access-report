import Image from 'next/image';
import PageReport from './PageReport';
import SiteOverallReport from './SiteOverallReport';
import PageSelector from './PageSelector';
import URLSearch from './URLSearch';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12">
      <URLSearch />
      <SiteOverallReport />
      <PageReport />
    </main>
  )
}
