interface Services {
    icon?: string;
    title: string;
    description?: string;
}

const SERVICES: Services[] = [
    {
        icon: 'uil uil-desktop',
        title: 'Idea Exploration',
        description: ` Transform ideas into opportunities. We specialize in refining your concepts, aligning them with IT trends and market needs, laying the groundwork for your venture.`,
    },
    {
        icon: 'uil uil-vector-square',
        title: 'Technology Tech Insights',
        description: `Stay ahead with our expert tech recommendations. We identify the best-fit tools and platforms, ensuring your business is powered by the latest innovations.`,
    },
    {
        icon: 'uil uil-presentation',
        title: 'Project Guidance',
        description: `We oversee development projects by trusted partners, bridging your vision with their execution, ensuring a seamless translation of ideas into reality.`,
    },
    {
        icon: 'uil uil-apps',
        title: 'Partner Network',
        description: `Leverage our network of reliable developers. We connect you with the right talent, ensuring quality delivery that matches your business aspirations.`,
    },
    {
        icon: 'uil uil-shopping-cart-alt',
        title: 'Implementation Support',
        description: `Our involvement extends throughout implementation, making sure tech and strategy align for impactful results.`,
    },
    {
        icon: 'uil uil-grids',
        title: 'Marketing Strategies',
        description:
            ' Amplify your impact with effective marketing strategies. We tailor approaches that engage and resonate with your target audience.',
    },
    {
        icon: 'uil uil-grids',
        title: 'Digital Marketing',
        description:
            'Maximize your online presence. Our digital marketing experts boost visibility, conversions, and brand recognition in the digital landscape.',
    },
];

export { Services, SERVICES };