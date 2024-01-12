import Image from "next/image";

// eslint-disable-next-line react/prop-types
export default function Flag({ image, isSelected, ...props }) {
    return (
        <Image alt="flag" src={image} className={isSelected ? 'flag selected' : 'flag'} {...props} width={30} height={30} />
    )
}