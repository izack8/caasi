import { useNavigate } from 'react-router-dom';

function ExecutiveSection() {
    const navigate = useNavigate();

    return (
        <section className="journey-section text-xl text-justify w-full flex flex-col gap-y-5">
            <p>
                I'm a software engineer who loves exploring the intersection of creativity and engineering, leveraging technology to enhance user experiences.
            </p>
            <p>
                I have cross-functional expertise in backend systems, frontend development, and ml/ai integration, and am able to build end-to-end features independently. I recently built a <span className="font-semibold cursor-pointer" onClick={() => navigate('work/projects/sign-a-photo-jpg')}>web-app</span> that uses computer vision to detect the American Sign Language (ASL) alphabets, <a className="font-semibold cursor-pointer italic" href="https://vt.tiktok.com/ZSmNxAXJR/" target="_blank" rel="noopener noreferrer">which garnered 710k+ views, 150k+ likes on TikTok</a>, and 500+ weekly page visits.
            </p>
        </section>
    );
}
export default ExecutiveSection;