import React from 'react'

export default function UnlockHIgherSalarieSection() {
    return (
        <div className='4xl:container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-24 lg:gap-10 mx-4 lg:mx-6 xl:mx-10 2xl:mx-20 my-20'>
                <div className='max-w-80 md:max-w-xl lg:max-w-md xl:max-w-[544px] flex flex-col justify-between gap-8 md:gap-16 xl:gap-36'>
                    <div className='flex flex-col gap-4 xl:gap-8'>
                        <h2 className='text-secondaryGreen'>Unlock a <span className='text-primaryGreen'>Higher</span> Salarie</h2>
                        <p className='text-2xs md:text-base mr-11 md:mr-0 font-medium font-roboto text-gray-600'>Students who prepare with InterviewPro succeed in landing their dream tech jobs. Our targeted mock interviews and expert feedback equip candidates with the confidence and skills they need to secure top offers and elevate their career prospects.</p>
                    </div>
                    <div className='flex w-full gap-16 xl:gap-24'>
                        <div>
                            <h3 className='text-lg md:text-4xl font-medium font-roboto text-secondaryGreen'>$200k</h3>
                            <p className='text-2xs md:text-sm font-medium font-roboto text-gray-700'>Average annual salary achieved by a student using InterviewPro.</p>
                        </div>
                        <div>
                            <h3 className='text-lg md:text-4xl font-medium font-roboto text-secondaryGreen'>84%</h3>
                            <p className='text-2xs md:text-sm font-medium font-roboto text-gray-700'>Success rate in landing a job after completing multiple mock interviews.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-8 bg-customGray border rounded-xl md:rounded-3xl px-6 xl:px-10 py-3 xl:py-6 border-gray-200 max-w-md md:max-w-2xl w-full'>
                    <h4 className='text-xs md:text-2xl font-medium font-inter tracking-[-1px] text-secondaryGreen'>Technical interview success rate</h4>
                    <div className='flex flex-col gap-2 md:gap-5'>
                        <div className='flex items-center xl:gap-5'>
                            <h5 className='min-w-[70px] md:min-w-32 text-2xs md:text-base font-medium font-roboto text-primaryGreen'>Interview Pro</h5>
                            <div className='w-full'>
                                <p className='text-2xs md:text-sm font-semibold font-roboto text-white bg-primaryGreen py-2 md:py-5 px-4 md:px-8 text-right rounded-[4px] md:rounded-lg w-[90%]'>32.5%</p>
                            </div>
                        </div>
                        <div className='flex items-center xl:gap-5'>
                            <h5 className='min-w-[70px] max-w-[70px] md:max-w-32 text-2xs md:text-base font-medium font-roboto text-secondaryGreen'>Interview Prep Programs</h5>
                            <div className='w-full'>
                                <p className='text-2xs md:text-sm font-semibold font-roboto text-white bg-gray-700 py-2 md:py-5 px-4 md:px-8 text-right rounded-[4px] md:rounded-lg w-[50%]'>20%</p>
                            </div>
                        </div>
                        <div className='flex items-center xl:gap-5'>
                            <h5 className='min-w-[70px] md:min-w-32 text-2xs md:text-base font-medium font-roboto text-secondaryGreen'>LeetCode</h5>
                            <div className='w-full'>
                                <p className='text-2xs md:text-sm font-semibold font-roboto text-white bg-gray-700 py-2 md:py-5 px-4 md:px-8 text-right rounded-[4px] md:rounded-lg w-[30%]'>12%</p>
                            </div>
                        </div>
                        <div className='flex items-center xl:gap-5'>
                            <h5 className='min-w-[70px] md:min-w-32 text-2xs md:text-base font-medium font-roboto text-secondaryGreen'>Bootcamps</h5>
                            <div className='w-full'>
                                <p className='text-2xs md:text-sm font-semibold font-roboto text-white bg-gray-700 py-2 md:py-5 text-center rounded-[4px] md:rounded-lg w-[20%]'>5.4%</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-2xs md:text-xs font-medium font-roboto text-secondaryGreen'>Comparison metrics are averages and may not reflect all users experiences.</p>
                </div>
            </div>
        </div>
    )
}
