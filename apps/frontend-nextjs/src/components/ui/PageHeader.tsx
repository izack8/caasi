
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="mb-8 ">
            <h1 className="lg:text-5xl text-3xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-gray-600 font-light">{subtitle}</p>}
        </div>
    );
}

export default PageHeader;