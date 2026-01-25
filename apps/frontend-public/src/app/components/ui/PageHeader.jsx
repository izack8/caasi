
function PageHeader({ title, subtitle }) {
    return (
        <div className="pt-5 lg:pt-0 mb-8 ">
            <h1 className="lg:text-4xl text-2xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-gray-600 font-light">{subtitle}</p>}
        </div>
    );
}

export default PageHeader;