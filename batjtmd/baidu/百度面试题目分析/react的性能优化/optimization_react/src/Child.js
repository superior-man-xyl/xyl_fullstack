import React, {useEffect} from 'react'

function Child(props) {

  useEffect(() => {
    console.log('Child Component')
  })

  return (
    <div>
      这里是child子组件：
      <p>{props.parentInfo[0].name}</p>
    </div>
  )
}

// export default Child
export default React.memo(Child);//比起Child3.js,使用了memo
