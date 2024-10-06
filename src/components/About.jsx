import React from 'react';

const About = () => {
    return (
        <div className="px-6 pb-6 lg:px-20 lg:pb-8">
            <h1 className='font-archivo px-4 text-3xl mt-3 border-yellow1 dark:text-white'>
                À propos de moi <span className='inline-block hover:animate-wave-hand'>🖐</span>
            </h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>
            <div className='dark:text-white flex flex-col gap-y-4 font-manrope px-5 pt-6 lg:px-8  '>
            <p>Après avoir validé un <span className=' font-bold dark:text-yellow1'>master MEEF</span> pour devenir professeur des écoles, j'ai décidé de réaliser <span className=' font-bold  dark:text-yellow1'>un rêve </span> de longue date en partant vivre en <span className=' font-bold  dark:text-yellow1'>Australie</span> pendant un an et demi. Ce voyage m'a permis de découvrir de nombreuses cultures à travers l'Asie et a profondément <span className=' font-bold  dark:text-yellow1'>enrichi </span> ma vision du monde.</p>

            <p>À mon retour en France, j'ai décidé de me reconvertir dans le <span className=' font-bold  dark:text-yellow1'>développement web</span>, un domaine où je retrouve le même sens de l'exploration et de la résolution de défis quotidiens.</p>

            <p>Ce métier me passionne, car il allie <span className=' font-bold  dark:text-yellow1'>créativité et logique</span>, deux aspects qui me stimulent au quotidien. 
            J'apprécie autant travailler sur le <span className=' font-bold  dark:text-yellow1'>front-end</span> que le <span className=' font-bold  dark:text-yellow1'>back-end</span>, et je suis curieux d'apprendre de nouvelles technologies. </p>

            <p>Je suis <span className=' font-bold dark:text-yellow1'>conscient</span> qu'il me reste encore beaucoup à découvrir, mais cela ne fait que renforcer ma <span className=' font-bold  dark:text-yellow1'>détermination</span>. Toujours prêt à relever de nouveaux défis, je serai disponible pour toute opportunité à partir du 2 décembre.</p>
            </div>
        </div>
    );
};

export default About;
