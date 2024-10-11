import React, {useState, useEffect, useRef} from 'react'

export default function About() {
  const imageSrcs = ['1.jpg' , '2.jpg' ,'3.jpeg' , '4.webp']
  const [src , setSrc] = useState(imageSrcs[0])
  const index = useRef(1)

useEffect(()=>{ // self made slideshow
 
let image = imageSrcs[index.current]

setTimeout(()=>{
 
  setSrc(image)
  index.current ++
if(index.current > imageSrcs.length -1 ){
 
  index.current = 0;

}
 
},  1500)

} , [src])

  return (
    <div>
<div>
  <div>
    <img className = {'slideShow'}  src = {src} />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo quia quasi asperiores labore saepe blanditiis sint culpa quos possimus libero dignissimos veritatis esse, consequatur fuga impedit magnam vitae earum.

</p>

  </div>
</div>

    </div>
  )
}
