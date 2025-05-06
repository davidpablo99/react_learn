import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name}/>
            <Title>
                <span>{props.name}</span>
                <button>Follow</button>
            </Title>
            <ProfileSection> {props.bio}</ProfileSection>
            <ProfileSection> {props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label = "social links"
                >
                <LinkButton href={props.githubUrl} target="_blank">GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl} target="_blank">LinkedIn</LinkButton>
                <LinkButton href={props.twitterUrl} target="_blank">Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}