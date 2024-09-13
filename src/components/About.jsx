import React from 'react';

const About = () => {
    return (
        <div className="p-6 lg:px-20">
            <h1 className='font-archivo px-4 text-3xl mt-3 border-yellow1 dark:text-white'>
                À propos de moi <span className='inline-block hover:animate-wave-hand'>🖐</span>
            </h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>
            <p className='dark:text-white font-manrope px-5 py-6 lg:px-8 lg:py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit facere ea doloremque! Impedit vel accusamus amet ducimus, assumenda quidem quae illum eaque excepturi saepe ab omnis maiores commodi culpa!
                <span className='text-yellow1 font-semibold'>Lorems</span> ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut non nisi, cum veniam quod ut odit nemo libero harum autem.
                <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nulla nam aperiam deleniti, velit, ea molestias natus, pariatur tempore assumenda eius! Cum eius iste, deserunt velit unde exercitationem ducimus...
            </p>
        </div>
    );
};

export default About;
