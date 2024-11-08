import Link from 'next/link';
import './Hero.css'; // Importing the CSS file

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-card">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I am a Front-End Developer skilled in creating beautiful and responsive web applications.
                </p>
                <Link href="https://e-commerce-jqrt.vercel.app/" className="view-projects-button">
                    View My Projects
                </Link>
            </div>
        </section>
    );
};

export default Hero;
