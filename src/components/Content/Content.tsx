import styles from './Content.module.scss';

interface ContentProps {
    id: string,
    children: JSX.Element
}

export default function Content(props: ContentProps) {
    return (
        <section className={styles.content} id={props.id}>            
            {props.children}   
        </section>
    )
}