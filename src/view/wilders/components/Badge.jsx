import React from 'react';

function Badge({skill}) {
    return (
        <div className={`${skill.vote > 5 ? "border-green-400" : "border-orange-300"} m-3 p-2 border`}>
            <p>{skill.title}
            <span className={`${skill.vote > 5 ? "bg-green-400" : "bg-orange-300"} rounded-full ml-3 px-1 text-white`}>
            {skill.vote}            
            </span>
            </p>
        </div>
    );
}

export default Badge;