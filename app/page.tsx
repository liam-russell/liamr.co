import { ArrowRightIcon, GithubIcon, LinkedinIcon, LocateIcon, QuoteIcon } from 'lucide-react';
import logo from './logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='mx-auto mt-5 max-w-fit rounded-lg bg-white/60 p-5 shadow-2xl lg:mt-24'>
            <Image src={logo} width={600} alt="logo" className='mx-auto max-w-[calc(100vw-104px)]' fetchPriority='high' />
            <div className='relative mx-auto mb-10 mt-4 w-[600px] max-w-[calc(100vw-104px)] pr-20'>
                <QuoteIcon size={48} className='absolute right-0 top-0 text-blue-900 opacity-10' />
                I am a senior full-stack software engineer with a passion for web development. I have experience with a variety of technologies and programming languages, and I am always looking to learn more.
            </div>
            <div className='mt-3 grid gap-3 md:grid-cols-3'>
                <a
                    href="https://github.com/liam-russell"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-row items-center justify-center gap-3 rounded-lg bg-gray-500/25 p-2 text-center backdrop-blur transition-colors hover:bg-gray-500 hover:text-white'
                >
                    <GithubIcon size={16} />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/liam-russell/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-row items-center justify-center gap-3 rounded-lg bg-blue-500/25 p-2 text-center backdrop-blur transition-colors hover:bg-blue-500 hover:text-white'
                >
                    <LinkedinIcon size={16} />
                    LinkedIn
                </a>
                <a
                    href="https://www.google.com.au/maps/place/Canberra+ACT"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-row items-center justify-center gap-3 rounded-lg bg-red-500/25 p-2 text-center backdrop-blur transition-colors hover:bg-red-500 hover:text-white'
                >
                    <LocateIcon size={16} />
                    Canberra (Remote)
                </a>
            </div>
            <Link href='/skills' className='mt-5 block rounded-lg bg-blue-900 p-3 text-center font-serif text-lg font-medium text-white transition-colors hover:bg-blue-800'>
                Browse my skills and expertise
                <ArrowRightIcon size={24} className='ml-2 inline-block' />
            </Link>
        </div>
    );
}
