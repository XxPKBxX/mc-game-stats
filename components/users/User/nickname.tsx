import { KeyboardEvent, useState } from 'react'
import { useUserContext } from '../../../contexts/user'

import { NameWrapper, NicknameWrapper, NicknameHistory, PlayerAvatarWrapper, NicknameText, PlayerAvatar } from './style'

const Nickname = (): JSX.Element => {
  const data = useUserContext()

  // const [showHistory, setShowHistory] = useState<boolean>(false)

  // const reveal = () => setShowHistory(!showHistory)
  // const revealKey = (e: KeyboardEvent) => {
  //   if (e.key === 'Enter') reveal()
  // }

  return (
    <NameWrapper>
      <PlayerAvatarWrapper>
        <PlayerAvatar
        src={`https://mc-heads.net/avatar/${data.player.uuid}/8`}
        width={50}
        height={50}
        alt={'User Avatar'} />
      </PlayerAvatarWrapper>
      <NicknameWrapper>
        <NicknameText
        online={data.player.online}
        // aria-label={'Click to reveal'}
        // onClick={reveal}
        // onKeyDown={revealKey}
        tabIndex={0}>{data.player.name}</NicknameText>
        {/* <NicknameHistory shown={showHistory}>
          {
            data.player.oldNames?.map((oldNickname, index) => (
              <span key={index}>{oldNickname}</span>
            ))
          }
        </NicknameHistory> */}
      </NicknameWrapper>
    </NameWrapper>
  )
}

export default Nickname