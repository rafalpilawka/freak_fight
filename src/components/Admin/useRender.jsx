import React, { useRef } from 'react'

 const useRender = (values) => {

      const render = React.useRef(0)
      console.log(render.current++, values)
}
export default useRender
