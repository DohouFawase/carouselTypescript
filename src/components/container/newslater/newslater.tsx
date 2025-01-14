import React from 'react'
import GeneralCard from '../../ui/cadre/container'
import Typo from '../../ui/typo/typo'

export default function Newslater() {
  return (
    <div className='px-2 md:px-24 my-12 '>
      <GeneralCard backgroud='dark' flex='center' variants='large' size='long'>

     
         <div className="  flex items-center text-center   flex-col py-12 space-y-4 md:px-12">
            <Typo variants='h1'>
                    Rejoignez-nous notre newsletter !
            </Typo>

            <Typo components='p'>
            Si vous souhaitez soutenir des projets innovants et contribuer à la renaissance technologique de l'Afrique, <br/> Harnix vous offre l'opportunité de devenir partenaire ou investisseur dans ses projets d'innovation.
            </Typo>

                <div className="">
                    <input type="text" name="" id="" />
                    <button></button>
                </div>
        </div>
       
        

      </GeneralCard>
    </div>
  )
}
