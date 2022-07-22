import { useUserContext } from '../../../contexts/user'

import { NameWrapper, NicknameWrapper, NicknameHistory, PlayerAvatar } from './style'

const Nickname = (): JSX.Element => {
  const data = useUserContext()

  return (
    <NameWrapper>
      <PlayerAvatar
      src={`https://mc-heads.net/avatar/${data.player.uuid}/8`}
      width={50}
      height={50} />
      <NicknameWrapper>
        <span>{data.player.name}</span>
        <NicknameHistory>
          {
            data.player.oldNames?.map((oldNickname, index) => (
              <span key={index}>{oldNickname}</span>
            ))
          }
        </NicknameHistory>
      </NicknameWrapper>
    </NameWrapper>
  )
}

export default Nickname