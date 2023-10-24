interface Feature {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
}

const FEATURES: Feature[] = [
    {
        id: 1,
        title: 'Innovative Idea Exploration',
        description: 'Transform raw concepts into actionable opportunities through expert refinement. Align ideas with current market trends for global resonance and create strategic pathways for growth.',
        image: 'assets/images/innovative-idea.gif',
        features: [
            'Refine and reshape concepts for actionable opportunities.',
            'Transform raw ideas into strategic pathways for growth.',
            'Align ideas with current market trends for global resonance.',
        ],
    },
    {
        id: 2,
        title: 'Tailored Technology Recommendations',
        description: ' Stay ahead in the dynamic tech landscape with customized advice that matches your unique business goals. Benefit from expert insights to make precise selections of tools and platforms for optimum results.',
        image: 'assets/images/automation.gif',
        features: [
            'Customized advice on tech solutions that align with your goals.',
            'Expert insights to navigate the evolving tech landscape.',
            'Precision in selecting tools and platforms for optimal results.',
        ],
    },
    {
        id: 3,
        title: 'Project Management Excellence',
        description: ' Seamlessly bridge ideas with precise execution through trusted partners. Oversee projects from inception to realization with meticulous care, ensuring your visionary concepts materialize with excellence.',
        image: 'assets/images/project-management.gif',
        features: [
            'Seamless execution through trusted partners for precise realization.',
            'Oversee projects from inception to realization with meticulous care.',
            'Ensure visionary concepts materialize with excellence.',
        ],
    },
    {
        id: 4,
        title: 'Strategic Marketing Approaches',
        description: 'Craft campaigns that resonate globally, capturing attention and driving growth with impactful messaging. Create engaging experiences that connect with diverse audiences and create a meaningful global impact.',
        image: 'assets/images/strategic-management.gif',
        features: [
            'Thoughtfully craft campaigns that resonate with diverse audiences.',
            'Capture attention and drive growth with impactful messaging.',
            'Create engaging experiences that connect on a global scale.',
        ],
    },
    {
        id: 5,
        title: 'Digital Marketing Mastery',
        description: 'Elevate your online presence, engage customers in the digital realm, and harness the power of SEO, social media, and content marketing. Master the digital domain with strategies that boost visibility and engagement.',
        image: 'assets/images/digital-marketing.gif',
        features: [
            'Elevate online presence and engage customers in the digital realm.',
            'Harness the power of SEO, social media, and content marketing.',
            'Master the digital domain with strategies that boost visibility and engagement.',
        ],
    },
    {
        id: 6,
        title: 'Diverse Industry Expertise',
        description: 'Covering inventory management to factory automation, our expertise spans a wide spectrum. Tailored solutions address sector-specific challenges, ensuring targeted and effective results for each industry.',
        image: 'assets/images/supply-chain.gif',
        features: [
            'Industry-specific solutions tailored to unique challenges.',
            'Expertise across diverse sectors, from inventory management to automation.',
            'Address sector-specific needs for targeted and effective results.',
        ],
    },
];


export { Feature, FEATURES };
