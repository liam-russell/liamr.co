import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='mx-auto mt-24 max-w-fit animate-fade-in rounded-2xl p-8'>
            <h1 className='gradient-text mb-4 text-center font-serif text-6xl font-bold'>404</h1>
            <p className='mb-8 text-center text-lg text-muted'>The page you are looking for does not exist.</p>
            <nav className='flex justify-center gap-4'>
                <Link href='/' className='glass hover-lift rounded-xl px-4 py-2 font-medium text-muted transition-colors hover:text-foreground'>
                    Back to Home
                </Link>
                <Link href='/skills' className='glass hover-lift rounded-xl px-4 py-2 font-medium text-muted transition-colors hover:text-foreground'>
                    View Skills
                </Link>
            </nav>
        </div>
    );
}