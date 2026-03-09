import { FloatingNav } from '@/components/ui/floating-navbar';
import { BackToTop } from '@/components/ui/BackToTop';
import Hero from '../components/Hero';
import Grid from '@/components/Grid';
import { navItems } from '@/data';
import RecentProjects from '@/components/RecentProjects';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav
                    navItems={navItems}
                />
                <Hero />
                <BackToTop />
                <Grid />
                <Experience />
                <RecentProjects />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
