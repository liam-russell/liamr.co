import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='mx-auto mt-24 max-w-fit p-8 text-center'>
            <h1 className='text-gradient mb-4 font-serif text-6xl font-bold'>404</h1>
            <p className='mb-8 text-lg text-muted'>The page you are looking for does not exist.</p>
            <Link href='/' className='btn-gradient inline-flex items-center rounded-[10px] px-4 py-2.5 text-sm font-bold'>
                Browse skills
            </Link>
        </div>
    );
}
