import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {}

export const FacebookIcon = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
      fill='currentColor'
      viewBox='0 0 256 256'
      {...props}>
      <path d='M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z' />
    </svg>
  )
}
