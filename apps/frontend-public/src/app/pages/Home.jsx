// import PageTracker from '../components/PageTracker';
// import HeroTitle from '../components/HeroTitle';
// import ConnectWithMe from '../components/ConnectWithMe';
// import NavigationBar from '../components/ui/NavigationBar';
// import Footer from '../components/ui/Footer';
// import Glow from '../components/ui/Glow';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion'


// function Home({ children }) {

//   const [activeTab, setActiveTab] = useState('about');
//   const [isNavSticky, setIsNavSticky] = useState(false);

//   const handleTabChange = (newTab) => {
//     if (newTab === activeTab) return;
//     setActiveTab(newTab);
//     sessionStorage.setItem('activeTab', newTab);
//   };

//   useEffect(() => {
//     const savedTab = sessionStorage.getItem('activeTab');
//     if (savedTab) {
//       setActiveTab(savedTab);
//     }

//     const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
//     if (savedScrollPosition) {
//       window.scrollTo(0, parseInt(savedScrollPosition, 10));
//     }

//     const getNavbarPosition = () => {
//       const navBar = document.getElementById('page-switcher');
//       if (navBar) {
//         const rect = navBar.getBoundingClientRect();
//         setIsNavSticky(rect.top <= 5);
//       }
//     };
//     window.addEventListener('scroll', getNavbarPosition);

//     const handleScroll = () => {
//       sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', getNavbarPosition);
//       window.removeEventListener('scroll', handleScroll);
//     };

//   }, []);

//   return (
//     <>
//       <Glow />
//       {/* Left/top Side - hero title */}
//       <AnimatePresence mode="wait">
//           <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] lg:sticky top-0 lg:py-20 pt-10 px-5 lg:px-0">
//             <div className="flex hidden lg:block absolute top-[30px] h-[40px] items-center">
//               <PageTracker tabs={activeTab} />
//             </div>
              
//                 <motion.div
//                   key="left"
//                   initial={{ opacity: 0, x: 0 }} 
//                   animate={{ opacity: 1, x: 0 }} 
//                   exit={{ opacity: 0, x: 0 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }} 
//                   className='flex flex-col h-full'
//                 >
                
//                   <HeroTitle />
//                   <ConnectWithMe />
//                   <div className="hidden lg:block">
//                     <NavigationBar activeTab={activeTab} onTabClick={handleTabChange}/>
//                   </div>

//                   <div className="hidden lg:block items-end mt-auto">
//                     <Footer />
//                   </div>
              
//                 </motion.div>
//             </header>

//             {/* only shown (the nav bar) on mobile devices (smol screens) */}
//             <motion.div 
//             id="page-switcher"
//             key="page-switcher"
//             className={`lg:hidden sticky top-0 z-1 transition-colors duration-200 px-5` + (isNavSticky ? ' backdrop-blur-md bg-white/40 px-0' : '')}
//               initial={{ opacity: 0, x: 0 }} 
//                   animate={{ opacity: 1, x: 0 }} 
//                   exit={{ opacity: 0, x: 0 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }} >
//                   <NavigationBar activeTab={activeTab} onTabClick={handleTabChange}/>
//               </motion.div>
//           </AnimatePresence>

//            {/* Right/bottom side - main content */}
//           <main className="flex flex-col w-full lg:w-[70%] lg:py-20 text-slate-350 text-md lg:text-base px-5 lg:px-0">
              
//               <div className="flex flex-col ">
//                 <AnimatePresence mode="wait">

//                 <motion.div>
//                   {children}
//                 </motion.div>

//                 </AnimatePresence>
//                 </div>
//           </main>
//     </>
//   );
// }

// export default Home;