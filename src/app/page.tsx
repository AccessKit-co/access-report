"use client";

import Image from 'next/image';
import PageReport from '../../components/PageReport/PageReport';
import SiteOverallReport from './SiteOverallReport';
import PageSelector from './PageSelector';
import IssueSubtype from '../../components/PageReport/IssueReport/IssueSubtype';
import IssueTypes from '../../components/PageReport/TypeOfIssue/IssueTypes';
import { useRef, useState, KeyboardEvent } from "react";
import { AiOutlineSearch, AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { ImContrast, ImCross } from 'react-icons/im';
import { FaExclamationTriangle } from 'react-icons/fa';
import { IoConstructSharp } from 'react-icons/io5';
import { FiAlertTriangle } from 'react-icons/fi';
import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';
import IssueReport from '../../components/PageReport/IssueReport/IssueReport';
import OverallSiteReview from '../../components/SiteOverallReport/SiteOverallReport';
import { URLSearch } from '../../components/URLSearch';


export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center gap-4 p-12">

      <URLSearch />
      <OverallSiteReview />
      <PageReport />

    </main >
  )
}
