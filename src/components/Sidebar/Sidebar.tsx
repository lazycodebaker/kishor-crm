import React, { useState } from 'react';
import { Links } from './Links';
import ARROW_DOWN from '../../assets/sidebar/arrow_down.png';

import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const navigate = useNavigate();

    const toggleSection = (section: string) => {
        setOpenSections((prevSections) =>
            prevSections.includes(section)
                ? prevSections.filter((prevSection) => prevSection !== section)
                : [...prevSections, section]
        );
    };

    const renderLinks = (links: Record<string, any>, isNested = false) => (
        <ul>
            {Object.entries(links).map(([key, value]) => (
                <li key={key} className='w-full select-none px-1 my-1'>
                    {typeof value === 'object' && value.subLinks ? (
                        <div className='w-full'>
                            <div
                                className="cursor-pointer p-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-between"
                                onClick={() => toggleSection(key)}
                            >
                                <div className="flex items-center w-full space-x-4">
                                    <img src={value.icon} alt="Icon" className="w-4" />
                                    <span className="">{key}</span>
                                </div>
                                <div className='mr-4'>
                                    <img src={ARROW_DOWN} alt="Arrow Down" className={`${openSections.includes(key) ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
                            {openSections.includes(key) && (
                                <ul className="mx-4 my-2 bg-gray-100 rounded-lg ">
                                    {renderLinks(value.subLinks, true)}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <div onClick={() => navigate(value.url)} className="flex items-center cursor-pointer hover:bg-gray-200 hover:rounded-lg space-x-4 p-2">
                            <img src={value.icon} alt="Icon" className={`${isNested && value.small ? "w-[6px]" : "w-4"}`} />
                            <div>{key}</div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="lg:w-1/4 shadow-2xl w-1/3  h-screen overflow-y-scroll">
            {renderLinks(Links)}
        </div>
    );
};

// md:relative absolute left-0

export default Sidebar;
