import React from 'react'
import FaqQuestion from './FaqQuestion'

export default function FaqSection() {

    const faqData = [
        {
            question: 'What is InterviewPro?',
            answer: "Pour louer une voiture chez Cariago, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
        },
        {
            question: 'How do I book a mock interview?',
            answer: "Pour louer une voiture chez Cariago, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
        },
        {
            question: 'Who will be my interviewer?',
            answer: "Pour louer une voiture chez Cariago, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
        },
        {
            question: 'What kind of feedback will I receive?',
            answer: "Pour louer une voiture chez Cariago, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
        },
        {
            question: 'Can I choose the topics or areas to focus on?',
            answer: "Pour louer une voiture chez Cariago, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
        },
    ]

    return (
        <div className='4xl:container mx-auto'>
            <div id='faq' className='flex flex-col gap-10 my-20 max-h-[450px]'>
                <h3 className='text-base md:text-xl lg:text-3xl font-medium font-roboto text-center'>Frequently Asked Questions</h3>
                <div className='space-y-6 mx-8 md:mx-16 lg:mx-36'>
                    {faqData.map((data, index) => <FaqQuestion question={data.question} answer={data.answer} key={index} />)}
                </div>
            </div>
        </div>
    )
}
