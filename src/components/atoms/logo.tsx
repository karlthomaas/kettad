interface LogoProps {
  className?: string
  discRimClassname?: string
  discClassname?: string
  tailClassname?: string
}

export const Logo = ({ discRimClassname, discClassname, tailClassname, className }: LogoProps) => (
  <svg
    width='883'
    height='862'
    viewBox='0 0 883 862'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <ellipse
      cx='597.362'
      cy='215.755'
      rx='286.838'
      ry='77.751'
      transform='rotate(-31.3847 597.362 215.755)'
      fill='red'
      className={discRimClassname}
    />
    <ellipse
      cx='587.053'
      cy='205.108'
      rx='259.388'
      ry='70.3103'
      transform='rotate(-31.3847 587.053 205.108)'
      fill='white'
      className={discClassname}
    />
    <ellipse
      cx='577.749'
      cy='197.152'
      rx='245.58'
      ry='63.5571'
      transform='rotate(-31.3847 577.749 197.152)'
      fill='red'
      className={discRimClassname}
    />
    <ellipse
      cx='572.52'
      cy='193.48'
      rx='215.304'
      ry='52.4601'
      transform='rotate(-31.3847 572.52 193.48)'
      fill='white'
      className={discClassname}
    />
    <path
      d='M568.991 90.1552C572.393 89.2556 575.503 88.5359 578.29 88C575.16 88.7108 572.061 89.4292 568.991 90.1552C493.042 110.239 271.668 219.988 257.79 376C253.832 291.407 282.668 157.869 568.991 90.1552Z'
      fill='#3C4A76'
      className={tailClassname}
    />
    <path
      d='M419.789 100C364.289 139 -345.71 372.5 766.29 861C446.29 774.5 -410.211 376 419.789 100Z'
      fill='#3C4A76'
      className={tailClassname}
    />
    <path
      d='M123.79 190C85.2898 235.5 -73.7102 358 123.79 584.5C51.7898 551 -112.21 320 123.79 190Z'
      fill='#3C4A76'
      className={tailClassname}
    />
    <path
      d='M578.29 88C513.29 100.5 272.29 213 257.79 376C253.79 290.5 283.29 155 578.29 88ZM419.789 100C364.289 139 -345.71 372.5 766.29 861C446.29 774.5 -410.211 376 419.789 100ZM123.79 190C85.2898 235.5 -73.7102 358 123.79 584.5C51.7898 551 -112.21 320 123.79 190Z'
      stroke='#3C4A76'
      className={tailClassname}
    />
  </svg>
)
