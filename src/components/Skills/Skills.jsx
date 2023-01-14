const SKILLS = [
    {
        name: "php",
    },
    {
        name: "js",
    },
    {
        name: "css",
    },
    {
        name: "html",
    },

];

const Skills = () => {
    return (
        <div>
            {
                SKILLS.map((item) => {
                    return (
                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Skills