import { WrapperShape } from '../../enums';
import { SETTINGS } from '../../constants';
import { AvatarOption } from '../../types';

interface IProps {
    avatarOption: AvatarOption
    setAvatarOption: (newOption: AvatarOption) => void
}
export default function WrapperShapeItem(props: IProps) {
    const { setAvatarOption, avatarOption } = props;
    const onSwitchWrapperShape = (wrapperShape: WrapperShape) => {
        if (wrapperShape !== avatarOption.wrapperShape) {
            setAvatarOption({ ...avatarOption, wrapperShape })
        }
    }
    return (
        <ul className='wrapper-shape'>
            {
                SETTINGS.wrapperShape.map((wrapperShape: WrapperShape) => {
                    return (
                        <li
                            key={wrapperShape}
                            className={`wrapper-shape__item ${
                                wrapperShape === avatarOption.wrapperShape ? 'active' : ''
                            }`}
                            title={`wrapperShape.${wrapperShape}`}
                            onClick={() => onSwitchWrapperShape(wrapperShape)}
                        >
                            <div className={`shape ${wrapperShape} ${
                                wrapperShape === avatarOption.wrapperShape ? 'active' : ''
                            }`} />
                        </li>
                    )
                })
            }
        </ul>
    )
}
