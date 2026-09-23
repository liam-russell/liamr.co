import MapButton from './map-button';
import ThemeToggle from './theme-toggle';

export default function SiteFooter() {
    return (
        <footer className="mt-[72px] flex flex-wrap items-center justify-between gap-3.5 border-t border-border pt-5">
            <MapButton variant="footer" />
            <ThemeToggle />
        </footer>
    );
}
