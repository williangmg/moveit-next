import { useContext } from 'react'
import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = (Math.round(currentExperience*100 )/ experienceToNextLevel)

    return (
        <header className={styles.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: "50%" }}>
                    {currentExperience}XP
                </span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    )
}
