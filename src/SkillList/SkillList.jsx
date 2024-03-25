import SkillListItem from "../SkillListItem/SkillListItem"

export default function SkillList({skills}) {

    const skillsListItems = skills.map((item, idx) => {
        return (<SkillListItem skill={item} key={idx} />)
    })

    return (
        <ul>
            {skillsListItems}
        </ul>
    )
}