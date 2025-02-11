'use client'

import Overlay from "@/components/Overlay";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react"
import Voice from "../Voice";

export default function Search(){
    const [search, setSearch] = useState<string>('');
    const inp = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const [voice, setVoice] = useState<boolean>(false);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?q=${search}`)
    }
    return (
      <form
        onSubmit={submitForm}
        className="flex items-center border-b-2 w-auto sm:hidden">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ref={inp}
          type="search"
          className="appearance-none focus:outline-none"
          placeholder="Buscar..."></input>
        {search.length < 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        )}
        {search.length >= 1 && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              inp?.current?.focus();
            }}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <button type="button" onClick={() => setVoice(!voice)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </button>

        {voice && <Voice click={voice} setClick={setVoice}></Voice>}

      </form>
    );
}