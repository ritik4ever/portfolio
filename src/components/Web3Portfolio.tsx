import React, { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink, Coins, Code, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Web3Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Create refs for each section
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const expertiseRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Check which section is in view
            const scrollPosition = window.scrollY + 100;

            if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
                setActiveSection('contact');
            } else if (expertiseRef.current && scrollPosition >= expertiseRef.current.offsetTop) {
                setActiveSection('expertise');
            } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
                setActiveSection('projects');
            } else {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section function
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const projects = [
        {
            title: "DeFi Yield Aggregator",
            description: "Built a smart contract system that automatically moves funds between different DeFi protocols to maximize yield. Implemented flash loan functionality and automated arbitrage opportunities.",
            tech: ["Solidity", "Web3.js", "React", "TheGraph"],
            metrics: "TVL: $2.5M | Users: 1.2k",
            link: "#"
        },
        {
            title: "Cross-Chain Bridge Protocol",
            description: "Developed a bridge protocol enabling asset transfers between multiple EVM-compatible chains. Implemented secure locking and minting mechanisms with multi-sig validation.",
            tech: ["Solidity", "Hardhat", "ChainLink", "Next.js"],
            metrics: "Volume: $5M | Chains: 5",
            link: "#"
        },
        {
            title: "NFT Marketplace with Fractionalization",
            description: "Created a marketplace supporting ERC-721/1155 tokens with fractionalization capabilities. Implemented Dutch auctions and automated royalty distribution.",
            tech: ["Solidity", "IPFS", "ethers.js", "React"],
            metrics: "Collections: 50+ | Sales: 2.8k ETH",
            link: "#"
        }
    ];

    const expertise = [
        {
            icon: <Code className="w-8 h-8 mb-4 text-blue-400" />,
            title: "Smart Contract Development",
            items: [
                "Solidity & Vyper",
                "ERC Standards",
                "Gas Optimization",
                "Contract Security",
                "Token Economics"
            ]
        },
        {
            icon: <Coins className="w-8 h-8 mb-4 text-green-400" />,
            title: "DeFi Protocols",
            items: [
                "AMM Design",
                "Lending Protocols",
                "Yield Farming",
                "Staking Mechanisms",
                "Flash Loans"
            ]
        },
        {
            icon: <Shield className="w-8 h-8 mb-4 text-purple-400" />,
            title: "Security & Auditing",
            items: [
                "Audit Experience",
                "Testing Frameworks",
                "Security Patterns",
                "Attack Vectors",
                "Best Practices"
            ]
        },
        {
            icon: <Database className="w-8 h-8 mb-4 text-red-400" />,
            title: "Infrastructure",
            items: [
                "TheGraph",
                "IPFS/Filecoin",
                "Node Management",
                "Chain Integration",
                "Oracles"
            ]
        }
    ];

    const stats = [
        { label: "Smart Contracts Deployed", value: "50+" },
        { label: "Total Value Locked", value: "$8M+" },
        { label: "Security Audits", value: "15+" },
        { label: "Chains Supported", value: "8" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Web3 Developer
                        </div>
                        <div className="flex gap-6">
                            <button
                                onClick={() => scrollToSection(homeRef)}
                                className={`hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''
                                    }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection(projectsRef)}
                                className={`hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : ''
                                    }`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection(expertiseRef)}
                                className={`hover:text-blue-400 transition-colors ${activeSection === 'expertise' ? 'text-blue-400' : ''
                                    }`}
                            >
                                Expertise
                            </button>
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className={`hover:text-blue-400 transition-colors ${activeSection === 'contact' ? 'text-blue-400' : ''
                                    }`}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section ref={homeRef} className="pt-32 pb-20 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Blockchain Developer
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Specialized in building secure, scalable DeFi protocols and Web3 applications.
                        Creating the future of decentralized finance through innovative smart contract development.
                    </p>
                    <div className="flex justify-center gap-4 mb-12">
                        <a href="https://github.com/ritik4ever" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="gap-2">
                                <Github size={20} /> GitHub
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="gap-2">
                                <Linkedin size={20} /> LinkedIn
                            </Button>
                        </a>
                        <a href="https://x.com/ritik4ever?t=XcxUPP3ZXF6rdd6r_ZgJ_w&s=09" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="gap-2">
                                <Twitter size={20} /> Twitter
                            </Button>
                        </a>
                    </div>
                    s
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="py-20 px-6 bg-gray-800/20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Building secure and innovative blockchain solutions across DeFi, NFTs, and cross-chain protocols.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="bg-gray-800/40 border-gray-700 hover:border-blue-500/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="text-sm text-blue-400 mb-4">{project.metrics}</div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-blue-900/40 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="gap-2 w-full">
                                        View Project <ExternalLink size={16} />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section ref={expertiseRef} className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-center">Technical Expertise</h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Comprehensive blockchain development skills across the entire Web3 stack.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertise.map((area, index) => (
                            <div key={index} className="bg-gray-800/40 rounded-lg p-6 backdrop-blur-sm">
                                {area.icon}
                                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                                <ul className="space-y-2">
                                    {area.items.map((item, i) => (
                                        <li key={i} className="text-gray-300">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="py-20 px-6 bg-gray-800/20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Let's Build Together</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Looking to build innovative blockchain solutions? Let's connect and discuss your project.
                    </p>
                    <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
                        <Mail size={20} /> Get in Touch
                    </Button>
                </div>
            </section>
            <footer className="py-10 px-6 bg-gray-900 text-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                    <div className="w-16 h-1 bg-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 mb-4">
                        If you have any inquiries, feel free to reach out.
                        You can contact me via email at
                        <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
                            ritikzoom4ever@gmail.com
                        </a>
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Follow me</h3>
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                            <Github className="w-8 h-8 hover:text-blue-400" />
                        </a>
                        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-8 h-8 hover:text-blue-400" />
                        </a>
                        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-8 h-8 hover:text-blue-400" />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Web3Portfolio;