import SectionLabel from '@/components/ui/SectionLabel';

function JourneySection() {
    return (
        <section className="journey-section">
            <SectionLabel label="Journey" />
            <p className='text-justify mb-3'>
                My journey in software development started when I was in Polytechnic, where I learned how to build mobile applications. Following that, I pursued a degree in Electrical Enginnering in University, because I wanted to learn more about how hardware and software interacts with each other (she's got the beeeeest, of both worldssssss).
            </p>

            <p className='text-justify mb-3'>
                Welp, unfortunately, that didn't go so well (circuitry was so challenging to learn, imo), so for the last 2 years in Uni, I decided to shift my focus back to programming, which is where I also discovered <b>Data Science,</b> <b>AI & Machine Learning</b>. I was so fascinated by how AI can be used to solve real-world problems, and I wanted to learn more about it (Like the entire concept of <b>Large Language Models (LLMs)</b> ARE SO COOL WTH).
            </p>
        </section>
    );
}
export default JourneySection;