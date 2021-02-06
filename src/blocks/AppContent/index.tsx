import React from 'react'

import DescriptionSection from 'blocks/DescriptionSection'
import EducationSection from 'blocks/EducationSection'
import ExperienceSection from 'blocks/ExperienceSection'
import SkillsSection from 'blocks/SkillsSection'
import ProjectsSection from 'blocks/ProjectsSection'

function AppContent() {
    return (
        <div>
            <DescriptionSection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
        </div>
    )
}

export default AppContent
