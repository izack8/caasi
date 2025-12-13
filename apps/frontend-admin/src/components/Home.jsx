import WritingSection from './sections/WritingSection';


function Home(){
    
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-20 md:px-12 pt-15">
            <h1 className="text-3xl text-center mb-10">Current Posts</h1>
            <WritingSection />
        </main>
        
         
    )
}

export default Home;