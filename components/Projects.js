import ProjectItem from './ProjectItem'
import styles from '../styles/Projects.module.scss'

const projects = [
    {
        name: 'OCBC Pay Anyone',
        category: 'Banking & Finance',
        image: 'img-1',
        span: '2',
    },
    {
        name: 'Ecolab',
        category: 'Others',
        image: 'img-2',
        span: '1',
    },
    {
        name: 'KIWI Auto Marketplace',
        category: 'Others, Start-ups',
        image: 'img-3',
        span: '1',
    },
    {
        name: 'Furama Hotels',
        category: 'Lifestyle',
        image: 'img-4',
        span: '1',
    },
    {
        name: 'Woodlands Transport',
        category: 'Transport & Logistics',
        image: 'img-5',
        span: '1',
    },
    {
        name: 'Ready To Travel (SATS)',
        category: 'Lifestyle, Retail & Entertainment, Start-ups',
        image: 'img-6',
        span: '2',
        contrastText: true,
    },
    {
        name: 'Yoga Movement',
        category: 'Lifestyle',
        image: 'img-7',
        span: '2',
    },
    {
        name: 'Don Don Donki',
        category: 'Retail & Entertainment',
        image: 'img-8',
        span: '2',
    },
    {
        name: 'TAP Riding Hailing',
        category: 'Trasport & Logistics',
        image: 'img-9',
        span: '1',
    },
    {
        name: 'FWD Insurance',
        category: 'Others',
        image: 'img-10',
        span: '2',
    },
    {
        name: 'Isetan',
        category: 'Retail & Entertainment',
        image: 'img-11',
        span: '1',
    },
    {
        name: 'HBO GO',
        category: 'Retail & Entertainment',
        image: 'img-12',
        span: '2',
    },
    {
        name: 'MyRepublic Mobile',
        category: 'Telco',
        image: 'img-13',
        span: '1',
    },
    {
        name: 'ComfortDelGro',
        category: 'Transport & Logistics',
        image: 'img-14',
        span: '1',
        contrastText: true,
    },
    {
        name: '7Rewards',
        category: 'Retail & Entertainment',
        image: 'img-15',
        span: '2',
    },
    {
        name: 'FairPrice Online',
        category: 'Retail & Entertainment',
        image: 'img-16',
        span: '2',
    },
    {
        name: 'Charles & Keith / Pedro',
        category: 'Retail & Entertainment',
        image: 'img-17',
        span: '2',
        contrastText: true,
    },
    {
        name: 'Justice League',
        category: 'Retail & Entertainment',
        image: 'img-18',
        span: '2',
    },
    {
        name: 'Fullerton Health',
        category: 'Healthcare',
        image: 'img-19',
        span: '1',
    },
    {
        name: 'SkyPremium',
        category: 'Lifestyle',
        image: 'img-20',
        span: '1',
    },
    {
        name: 'T Singapore',
        category: 'Lifestyle',
        image: 'img-21',
        span: '2',
    },
    {
        name: 'SingPost',
        category: 'Transport & Logistics',
        image: 'img-22',
        span: '1',
    },
    {
        name: 'Dine Inn',
        category: 'Co-incubation, Start-ups, Food & Beverage',
        image: 'img-23',
        span: '1',
    },
    {
        name: 'Siemens Engineering',
        category: 'Transport & Logistics',
        image: 'img-24',
        span: '1',
    },
    {
        name: 'Singapore Grand Prix',
        category: 'Transport & Logistics',
        image: 'img-25',
        span: '1',
    },
    {
        name: 'FastFast Delivery',
        category: 'Transport & Logistics, Co-incubation, Start-ups',
        image: 'img-26',
        span: '2',
    },
    {
        name: "McDonald's",
        category: 'Food & Beverage',
        image: 'img-27',
        span: '1',
    },
]

export default function Projects() {
    return (
        <div className={styles.projects}>
            {projects.map((project) => (
                <ProjectItem key={project.name} project={project} />
            ))}
        </div>
    )
}
