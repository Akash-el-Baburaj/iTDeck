interface Layout {
    name: string;
    description: string;
    imageUrl: string;
}

const LAYOUTS: Layout[] = [
    {
        name: 'Inventory Management',
        description:'Streamline your inventory processes, optimizing efficiency and accuracy.',
        imageUrl: 'assets/images/layouts/inventory-management.jpg',
    },
    {
        name: 'E-Commerce',
        description:'Amplify your online retail presence and boost customer engagement.',
        imageUrl: 'assets/images/layouts/e-commerce.jpg',
    },
    {
        name: 'Digital Business Promotion',
        description:'Leverage digital strategies to reach and engage your target audience.',
        imageUrl: 'assets/images/layouts/digital-marketing.jpg',
    },
    {
        name: 'Factory Automation',
        description:'Optimize your manufacturing processes with cutting-edge automation solutions.',
        imageUrl: 'assets/images/layouts/factory-automation.jpg',
    },
    {
        name: 'Rental Management System',
        description:'Simplify and manage rental operations efficiently.',
        imageUrl: 'assets/images/layouts/rental-management.jpg',
    },
    {
        name: 'Sea Port Automation',
        description:'Revolutionize port operations with advanced automation technologies.',
        imageUrl: 'assets/images/layouts/sea-port-automation.jpg',
    },
    {
        name: 'Supply Chain Management',
        description:'Enhance your supply chain operations for seamless global distribution.',
        imageUrl: 'assets/images/layouts/supply-chain-management.jpg',
    },
    {
        name: 'Clinic Management',
        description:'Streamline patient care and administrative tasks for healthcare providers.',
        imageUrl: 'assets/images/layouts/clinic-management.jpg',
    },
    {
        name: 'Fleet Automation GPS',
        description:'Monitor and manage your fleet with real-time GPS automation.',
        imageUrl: 'assets/images/layouts/fleet-automation-gps.jpg',
    },
    {
        name: '',
        description:'',
        imageUrl: '',
    }, {
        name: 'Warranty Management',
        description:'Efficiently track and manage product warranties for improved customer satisfaction.',
        imageUrl: 'assets/images/layouts/warranty-management.jpg',
    }, {
        name: '',
        description:'',
        imageUrl: '',
    },
];

export { Layout, LAYOUTS };