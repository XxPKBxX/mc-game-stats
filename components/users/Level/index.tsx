import { useUserContext } from '../../../contexts/user'
import Icon from './icon'
import { LevelInfo, LevelSection, LevelTitle, LevelWrapper } from './style'

const Level = (): JSX.Element => {
  const { data: { level } } = useUserContext()

  return (
    <LevelInfo>
      <LevelSection>
        <Icon alt={'Sword'} src={'/assets/sword.png'} />
        <LevelWrapper>
          <LevelTitle>Hypixel Level</LevelTitle>
          {level.hypixel ?? 0}
        </LevelWrapper>
      </LevelSection>
      <LevelSection>
        <Icon alt={'Bedwars'} src={'/assets/bed.png'} />
        <LevelWrapper>
          <LevelTitle>Bedwars Level</LevelTitle>
          {level.bedwars ?? 0}
        </LevelWrapper>
      </LevelSection>
      <LevelSection>
        <Icon alt={'Bedwars'} src={'/assets/snowball.png'} />
        <LevelWrapper>
          <LevelTitle>SkyWars Level</LevelTitle>
          {level.skywars}
        </LevelWrapper>
      </LevelSection>
    </LevelInfo>
  )
}

export default Level