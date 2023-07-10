"use client";

import React, { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { FiAlertTriangle } from 'react-icons/fi'
import { ImTree } from 'react-icons/im'
import { ImContrast } from 'react-icons/im'
import { useIssueStateSelectStore } from '../../store/IssueStateSelectStore'
import { usePageReportStore, SubtypeState } from '../../store/PageReportStore'
import IssueSubtype from './IssueReport/IssueSubtype'
import { useWebsiteReportStore } from '../../store/WebsiteReportStore'
import { CircularProgress } from '@mui/material'
import { PageSearch } from '../PageSearch';
import { Page } from 'puppeteer';

export const PageReport = () => {
    const PageStoreState = usePageReportStore();
    const SelectedIssueState = useIssueStateSelectStore();
    const WebsiteReport = useWebsiteReportStore();

    const handleSelectedIssueState = (selecting: string) => {
        if (SelectedIssueState.selected == selecting) {
            SelectedIssueState.setSelected(''); // deselect
        }
        SelectedIssueState.setSelected(selecting);
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            <PageSearch />
            <div className="flex text-center justify-center w-full min-w-[24rem] h-[28rem] overflow-clip">
                <div className='flex flex-row divide-x rounded border-2 h-full w-full'>

                    {/** Issue Buttons sidebar*/}
                    <div className='flex w-[10rem] bg-[#F0F9FF] items-center justify-center shrink-0'>
                        <div className='flex flex-col items-center justify-top w-full h-full'>
                            <button onClick={() => { handleSelectedIssueState("error") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#FEEBEB] px-1'
                                style={{
                                    backgroundColor: SelectedIssueState.selected == "error" ? 'white' : '',
                                    borderRight: SelectedIssueState.selected == "error" ? '2px solid blue' : '',
                                }}
                            >
                                <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                                        <FiAlertCircle style={{ color: '#EA0404' }} />
                                    </div>
                                    <div className='flex h-full justify-start items-center'>
                                        <h2 className='text-sm font-semibold '>Errors</h2>
                                    </div>
                                </div>
                                <div className='flex shrink-0 w-1/3 h-full p-2 justify-center items-center'>
                                    <div className='flex w-full h-full border-2 border-[#FDB0B0] bg-[#FED7D7] rounded items-center justify-center '>
                                        {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#EA0404]'> <CircularProgress sx={{ color: '#EA0404' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#EA0404]'> {PageStoreState.error.count} </span>}
                                    </div>
                                </div>
                            </button>

                            <button onClick={() => { handleSelectedIssueState("contrast") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#C2E8FF] px-1'
                                style={{
                                    backgroundColor: SelectedIssueState.selected == "contrast" ? 'white' : '',
                                    borderRight: SelectedIssueState.selected == "contrast" ? '2px solid blue' : '',
                                }}
                            >
                                <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                                        <ImContrast style={{ color: '#008AE0' }} />
                                    </div>
                                    <div className='flex h-full justify-start items-center'>
                                        <h2 className='text-sm font-semibold '>Contrast</h2>
                                    </div>
                                </div>
                                <div className='flex shrink-0 w-1/3 h-full p-2 justify-center items-center'>
                                    <div className='flex w-full h-full border-2 border-[#70C8FF] bg-[#C2E8FF] rounded items-center justify-center '>
                                        {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#008AE0]'> <CircularProgress sx={{ color: '#008AE0' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#008AE0]'> {PageStoreState.contrast.count} </span>}
                                    </div>
                                </div>
                            </button>

                            <button onClick={() => { handleSelectedIssueState("structure") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#CEF3E0] px-1'
                                style={{
                                    backgroundColor: SelectedIssueState.selected == "structure" ? 'white' : '',
                                    borderRight: SelectedIssueState.selected == "structure" ? '2px solid blue' : '',
                                }}
                            >
                                <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                                        <ImTree style={{ color: '#2CB56E' }} />
                                    </div>
                                    <div className='flex h-full justify-start items-center'>
                                        <h2 className='text-sm font-semibold '>Structure</h2>
                                    </div>
                                </div>
                                <div className='flex w-1/3 shrink-0 h-full p-2 justify-center items-center'>
                                    <div className='flex w-full h-full border-2 border-[#5BD797] bg-[#CEF3E0] rounded items-center justify-center '>
                                        {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#2CB56E]'> <CircularProgress sx={{ color: '#2CB56E' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#2CB56E]'> {PageStoreState.structure.count} </span>}
                                    </div>
                                </div>
                            </button>

                            <button onClick={() => { handleSelectedIssueState("alert") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#FFEFD6] px-1'
                                style={{
                                    backgroundColor: SelectedIssueState.selected == "alert" ? 'white' : '',
                                    borderRight: SelectedIssueState.selected == "alert" ? '2px solid blue' : '',
                                }}
                            >
                                <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                                        <FiAlertTriangle style={{ color: '#FF9505' }} />
                                    </div>
                                    <div className='flex h-full justify-start items-center'>
                                        <h2 className='text-sm font-semibold'>Alerts</h2>
                                    </div>
                                </div>
                                <div className='flex w-1/3 shrink-0 h-full p-2 justify-center items-center'>
                                    <div className='flex w-full h-full border-2 border-[#FFCC85] bg-[#FFE6C2] rounded items-center justify-center '>{WebsiteReport.isLoading ?
                                        <span className='items-center  justify-center text-l text-center font-semibold text-[#FF9505] h-full'> <CircularProgress sx={{ color: '#FF9505' }} style={{ width: 16, height: 16 }} /> </span> : <span className='items-center  justify-center text-l text-center font-semibold text-[#FF9505] '> {PageStoreState.alert.count} </span>}
                                    </div>
                                </div>
                            </button>


                        </div>
                    </div>

                    {/** Issue Report */}

                    <div className='flex grow h-full items-center justify-center p-2 min-w-[12rem]'>
                        { // Sets a loading animation wihile website is being scanned
                            WebsiteReport.isLoading ? <CircularProgress style={{ width: 96, height: 96 }} /> :
                                <>
                                    { // We do this to prevent errors when the user has not selected any issue and before it auto selectors Error
                                        SelectedIssueState.selected == '' ? '' :
                                            <div
                                                className="flex flex-col w-full h-full justify-center items-center">
                                                <div className='flex flex-col w-full h-16 items-center justify-start'>
                                                    <div className='flex flex-row w-full h-8 items-center justify-start'>
                                                        <h2 className='font-semibold text-xl'> {(PageStoreState as any)[SelectedIssueState.selected].description} Report </h2>
                                                    </div>
                                                    <div className='flex flex-row w-full h-4 items-center justify-start text-sm'>
                                                        <p className='text-xs font-extralight text-gray-400 justify-start items-center'> {(PageStoreState as any)[SelectedIssueState.selected].description} </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col items-center overflow-y-auto overflow-clip justify-start h-full w-full scrollbar-hide overscroll-auto pb-2'>
                                                    {(PageStoreState as any)[SelectedIssueState.selected].items ?
                                                        <div className='flex flex-col items-top justify-center gap-1 w-full'>
                                                            {Object.values((PageStoreState as any)[SelectedIssueState.selected].items as SubtypeState[]).map(
                                                                (item: SubtypeState, index: number) =>
                                                                    <IssueSubtype key={index} description={item.description} count={item.count} id={item.id} selectors={item.selectors} />)}
                                                        </div>
                                                        : []}
                                                </div>
                                            </div>
                                    }
                                </>}
                    </div>
                </div>
            </div>
        </div >
    );
}