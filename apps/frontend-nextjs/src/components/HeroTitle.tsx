import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function HeroTitle() {

    const langs = [
        { id: 'en', hello: "Hi", name: "I'm" },
        { id: 'ch', hello: "嗨", name: "我叫" },
        { id: 'fr', hello: "Salut", name: "Je m'appelle" },
    ];
    
    const [lang, setLang] = useState('en');

    return(
        <div className="flex flex-col gap-y-3">
            <h1 className="text-4xl xl:text-5xl flex flex-row gap-x-2 font-light">
                {langs.map((l, index) => (
                    <span key={l.id} className="flex flex-row gap-x-2">
                        <span 
                            className={`cursor-pointer transition-colors ${lang === l.id ? 'text-rose-500' : 'hover:text-rose-500'}`}
                            onClick={() => setLang(l.id)}
                        >
                            {l.hello}
                        </span>
                        {index < langs.length - 1 && <span>/</span>}
                    </span>
                ))}
                
            </h1>
            
            <div className="flex flex-col text-2xl xl:text-3xl font-light">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={lang}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {langs.find(l => l.id === lang)?.name}&nbsp;
                    </motion.span>
                </AnimatePresence>
            
                    
                <Link 
                    href="/"
                    className="font-semibold text-5xl xl:text-6xl cursor-pointer hover:text-blue-500 transition-duration-300 transition-colors w-min">
                    Isaac
                </Link>
            </div>

            
            <p className='font-light text-md xl:text-lg flex w-full justify-center lg:justify-start '>
                Gamer. Musician. Software Engineer.
            </p>

        </div>
    )
}

export default HeroTitle;