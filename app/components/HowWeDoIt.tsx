'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We analyze your brand goals, audience, challenges, and opportunities to create a clear foundation.'
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We create a structured roadmap combining creative direction, technology, and business objectives.'
  },
  {
    number: '03',
    title: 'Build & Create',
    desc: 'Our designers and developers craft scalable digital experiences with precision and purpose.'
  },
  {
    number: '04',
    title: 'Launch & Scale',
    desc: 'We launch, optimize, and continuously improve your digital presence for long-term growth.'
  }
]


export default function HowWeDoIt() {

  const containerRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)


  useLayoutEffect(() => {

    const container = containerRef.current
    const track = trackRef.current

    if (!container || !track) return


    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia()


      mm.add('(min-width:1024px)',()=>{


        let maxX = 0
        let leftStackX = 0
        let baseX:number[] = []
        let overlapSpacing = 0
        let scrollDistance = 1600



        const updateMetrics = ()=>{


          const cards =
            Array.from(track.children) as HTMLDivElement[]


          if(!cards.length) return



          baseX = cards.map(
            card => card.offsetLeft
          )



          const cardWidth =
            cards[0].offsetWidth



          const containerWidth =
            track.parentElement?.offsetWidth ??
            track.offsetWidth



          const availableWidth =
            containerWidth * 0.95



          overlapSpacing =
            cards.length > 1
            ?
            Math.max(
              20,
              Math.min(
                100,
                (availableWidth-cardWidth) /
                (cards.length-1)
              )
            )
            :
            0



          leftStackX =
            baseX[0] ?? 0




          const spacing =
            cards.length > 1
            ?
            baseX[1]-baseX[0]
            :
            cardWidth




          maxX =
            Math.max(
              0,
              spacing * (cards.length-1)
            )



          scrollDistance =
            Math.max(
              1300,
              maxX + cardWidth + 300
            )

        }






        const applyPositions = (
          progress:number
        )=>{


          const trackX =
            -maxX * progress



          gsap.set(track,{
            x:trackX
          })



          const cards =
            Array.from(track.children) as HTMLDivElement[]



          cards.forEach((card,i)=>{


            const targetStackX =
              leftStackX +
              i * overlapSpacing




            const current =
              baseX[i] + trackX




            const move =
              Math.max(
                0,
                targetStackX-current
              )




            gsap.set(card,{
              x:move,
              zIndex:i+1
            })



          })



        }




        updateMetrics()

        applyPositions(0)





        const trigger =
          ScrollTrigger.create({


            trigger:container,


            start:'top 90px',


            end:()=>`+=${scrollDistance}`,


            pin:true,


            pinSpacing:true,


            scrub:0.8,


            anticipatePin:1,


            invalidateOnRefresh:true,



            onRefresh:(self)=>{

              updateMetrics()

              applyPositions(
                self.progress
              )

            },



            onUpdate:(self)=>{

              applyPositions(
                self.progress
              )

            }


          })




        ScrollTrigger.refresh()




        return ()=>{

          trigger.kill()

        }



      })



      mm.add('(max-width:1023px)',()=>{


        gsap.set(track,{
          clearProps:'all'
        })


      })



      return()=>mm.revert()



    },containerRef)



    return()=>ctx.revert()



  },[])
    return (

    <section
      ref={containerRef}
      className="
        relative
        h-[85vh]
        bg-black
        text-white
        flex
        items-center
        overflow-hidden
      "
    >



      <div
        className="
          mx-auto
          w-full
          max-w-[1680px]
          px-6
          lg:px-12
          xl:px-16
          flex
          items-center
        "
      >



        <div
          className="
            grid
            lg:grid-cols-[420px_1fr]
            gap-12
            items-center
            w-full
          "
        >




          {/* LEFT CONTENT */}


          <div>



            <span
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#ADF531]/10
                border
                border-[#ADF531]/30
                px-5
                py-2
                text-[#ADF531]
                font-mono
                text-xs
                tracking-[2px]
              "
            >

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#ADF531]
                "
              />

              HOW IT WORKS


            </span>







            <h2
              className="
                mt-8
                font-[family-name:var(--font-syne)]
                font-black
                text-6xl
                lg:text-[90px]
                leading-[0.95]
                tracking-tight
              "
            >

              How we
              <br/>
              do it


            </h2>







            <p
              className="
                mt-8
                max-w-[380px]
                text-lg
                leading-relaxed
                text-white/50
              "
            >

              A structured process that transforms ideas into powerful digital experiences.

            </p>



          </div>







          {/* CARDS CONTAINER */}


          <div
            className="
              relative
              overflow-visible
              flex
              items-center
              h-[390px]
            "
          >



            <div
              ref={trackRef}
              className="
                flex
                gap-8
                w-max
              "
            >
              {steps.map((item)=>(


                <div
                  key={item.number}
                  className="
                    relative
                    flex
                    flex-col
                    justify-between
                    w-[420px]
                    h-[430px]
                    rounded-[28px]
                    bg-[#080808]
                    border
                    border-white/10
                    p-10
                    overflow-hidden
                    shrink-0
                  "
                >




                  {/* BIG NUMBER */}


                  <div
                    className="
                      absolute
                      right-6
                      top-0
                      font-[family-name:var(--font-syne)]
                      font-black
                      text-[180px]
                      leading-none
                      text-white/[0.04]
                    "
                  >

                    {item.number}

                  </div>







                  <div
                    className="
                      relative
                      z-10
                    "
                  >


                    <span
                      className="
                        font-mono
                        text-sm
                        tracking-[3px]
                        text-[#ADF531]
                      "
                    >

                      STEP {item.number}

                    </span>






                    <h3
                      className="
                        mt-8
                        font-[family-name:var(--font-syne)]
                        font-black
                        text-4xl
                      "
                    >

                      {item.title}

                    </h3>



                  </div>








                  <p
                    className="
                      relative
                      z-10
                      text-lg
                      leading-relaxed
                      text-white/50
                    "
                  >

                    {item.desc}

                  </p>








                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-full
                      bg-[#ADF531]
                      opacity-70
                    "
                  />



                </div>


              ))}




            </div>



          </div>






        </div>


      </div>



    </section>

  )

}