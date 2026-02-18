import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function HeroTitle() {

    const langs = [
        { id: 'en', lang: "I'm" },
        { id: 'ch', lang: "我叫" },
        { id: 'fr', lang: "Je m'appelle" },
    ];
    const [lang, setLang] = useState('en');

    return(
        <div className="flex flex-col w-full justify-center text-center lg:justify-start lg:text-left font-light gap-y-3">
            <h1 className="text-4xl xl:text-5xl flex flex-row justify-center lg:justify-start">
                <span 
                    className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-rose-500' : 'hover:text-rose-500'}`}
                    onClick={() => setLang('en')}
                >Hi&nbsp;</span>/
                <span 
                    className={`cursor-pointer transition-colors ${lang === 'ch' ? 'text-rose-500' : 'hover:text-rose-500'}`}
                    onClick={() => setLang('ch')}
                >&nbsp;嗨</span>&nbsp;/
                <span 
                    className={`cursor-pointer transition-colors ${lang === 'fr' ? 'text-rose-500' : 'hover:text-rose-500'}`}
                    onClick={() => setLang('fr')}
                >&nbsp;Salut</span>
            </h1>
            
            <h1 className="flex flex-col text-2xl lg:text-4xl font-light">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={lang}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {langs.find(l => l.id === lang)?.lang}&nbsp;
                    </motion.span>
                </AnimatePresence>
                <Link 
                    href="/"
                    className="font-semibold text-4xl xl:text-5xl cursor-pointer hover:text-blue-700 transition-colors"
                >
                    Isaac 🎮
                </Link>
            </h1>
            <p className='font-light text-md xl:text-lg flex w-full justify-center lg:justify-start '>
                Gamer. Musician. Software Engineer.
            </p>

        </div>
    )
}

export default HeroTitle;