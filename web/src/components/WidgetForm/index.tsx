
import BugImage from '../../assets/Bug.svg' 
import IdeaImage from '../../assets/Idea.svg'
import ThoughtImage from '../../assets/Thought.svg'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSucessStep } from './Steps/FeedBackSucessStep';


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImage,
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImage,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: ThoughtImage,
      alt: 'imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm(){
const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null)
const [feedbackSent, setFeedbackSent] = useState(false)

function handleRestartFeedback(){
  setFeedbackSent(false)
  setFeedBackType(null)
}

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
    

   {feedbackSent ? (
     <FeedBackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
   ) : (
     <>
      {!feedbackType ? ( //testardps
     <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType}/>
    ): (
      <FeedBackContentStep feedbackType={feedbackType} onRestartFeedBackRequested={handleRestartFeedback}
      onFeedbackSent={() => setFeedbackSent(true)}
      />
    )}
     </>
   )}
   


     <footer className="text-xs text-neutral-400">
     Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br">Rocketseat</a>
     </footer>
    </div>
  )
}