"use client";

import PageReport from '../../components/PageReport/PageReport';
import OverallSiteReview from '../../components/SiteOverallReport/SiteOverallReport';
import { URLSearch } from '../../components/URLSearch';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-4 p-12">

      <URLSearch />
      <OverallSiteReview />
      <PageReport />

    </main >
  )
}
