'use client'
import 'regenerator-runtime/runtime';
import Overlay from "@/components/Overlay";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

export default function Voice({ click, setClick }: {click: boolean , setClick: React.Dispatch<React.SetStateAction<boolean>>} ){
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  
    return (
      <Overlay>
        <button onClick={() => setClick(!click)} className="absolute right-20 top-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" stroke="#fff" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center justify-center flex-col">
          <motion.button
            animate={{
              scale: listening ? 1.1 : 1,
              backgroundColor: listening ? "#FF5858" : "#FFFFFF",
              border: listening ? "1px solid #fff" : "",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            type="button"
            onClick={() => {
              if (listening) {
                SpeechRecognition.stopListening();
              } else {
                SpeechRecognition.startListening();
              }
            }}
            className="w-32 h-32 flex items-center justify-center bg-white rounded-lg relative">
            <svg
              width={50}
              height={50}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
            {listening && (
              <div
                className="absolute z-10 w-full h-full"
                onClick={SpeechRecognition.stopListening}></div>
            )}
          </motion.button>
          <div className="mt-5 flex items-center gap-5 flex-col">
            {
              transcript &&
              <>
              <div className="bg-white w-[500px] flex justify-center items-center flex-col py-3 px-5 rounded-md">
                <p className="p-2">{transcript}</p>
                <h2 className="text-lg decoration-underline font-semibold">Sugestões</h2>
                <div className="w-full">
                  <ul className="w-full p-2">
                    <li className="text-terciary">
                      <Link href={"/search?q=aaaa"}>
                       aaaaa
                       </Link>
                    </li>
                    <li className="text-terciary">aaaaa</li>
                    <li className="text-terciary">aaaaa</li>
                    <li className="text-terciary">aaaaa</li>
                  </ul>
                </div>
              </div>
              <button type="button" onClick={resetTranscript} className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all hover:scale-[1.2] hover:rotate-[180deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
              </>
            }

          </div>
        </div>
      </Overlay>
    );
}