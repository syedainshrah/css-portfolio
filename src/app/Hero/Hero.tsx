import Link from 'next/link';
import Image from 'next/image';  // Importing Next.js Image component
import './Hero.css'; // Importing the CSS file

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-card">

                {/* Image Container */}
                <div className="image-container">
                    <Image 
                        src="/me.jpg" // Replace this with your image URL
                        alt="Hero Image"
                        width={150}  // Image width in pixels
                        height={150} // Image height in pixels
                        className="hero-image"
                    ></Image>

                    
                </div>

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
