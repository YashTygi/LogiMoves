import React from 'react'

const Blob = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
        <svg {...props} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8D6E63" d="M24.7,-47.7C30.3,-39.5,32,-29.5,42.8,-21.2C53.5,-13,73.3,-6.5,79.2,3.4C85.1,13.3,77,26.5,67,36.1C57,45.6,45,51.3,33.5,60C22,68.7,11,80.4,1.4,78C-8.3,75.7,-16.5,59.3,-30.5,52.1C-44.5,44.8,-64.2,46.6,-68.6,39.4C-73.1,32.3,-62.3,16.1,-59.5,1.6C-56.7,-12.9,-61.7,-25.7,-61.4,-40C-61.1,-54.4,-55.4,-70.2,-44.2,-75.3C-33.1,-80.4,-16.5,-74.7,-3.5,-68.7C9.5,-62.6,19,-56,24.7,-47.7Z" transform="translate(100 100)" />
</svg>
    </div>
  )
}

export default Blob