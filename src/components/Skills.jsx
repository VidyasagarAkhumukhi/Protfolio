import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <section className='py-20 align-element' id='skills'>
            <SectionTitle text='tech stack' />
            <div className='py-16 grid gap-8 md:grid-cols-3 lg:grid-cols-6'>
                {skills.map((skill) => {
                    return <SkillsCard key={skill.id} {...skill} />
                })}
            </div>

        </section>
    )
}

export default Skills
