import { LevelImage } from './style'

export interface IconProps {
  alt: string
  src: string
}

const Icon = ({ alt, src }: IconProps): JSX.Element => (
  <LevelImage
  src={src}
  width={60}
  height={60}
  objectFit={'contain'}
  alt={alt} />
)

export default Icon