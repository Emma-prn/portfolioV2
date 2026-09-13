const web_projects = [
    {
        id: 'portrait-chinois',
        img: 'portraitchinois.JPG'
    },
    {
        id: 'cv-web',
        img: 'cvweb.JPG'
    },
    {
        id: 'wwi',
        img: 'wwi.JPG'
    },
    {
        id: 'fabulas',
        img: 'fabulas.png'
    },
    {
        id: 'ghibli',
        img: 'ghibli.png'
    },
    {
        id: 'quozz',
        img: 'quozz.png'
    }
]
const prog_projects = [
    {
        id: 'brock',
        img: 'brock.jpg'
    },
    {
        id: 'dungeon',
        img: 'dungeon_adventure.png'
    },
    {
        id: 'forest',
        img: 'foret_magique.png'
    },
    {
        id: 'remaster',
        img: 'brock_remaster.png'
    }
]
const design_projects = [
    {
        id: 'mistralis',
        img: 'carte.jpg'
    },
    {
        id: 'hiver',
        img: 'motion.jpg'
    },
    {
        id: 'childchemy',
        img: 'childchemy.png'
    },
    {
        id: 'bd',
        img: 'bds.png'
    },
    {
        id: 'medieval',
        img: 'medieval_warfare.png'
    },
    {
        id: 'inktober',
        img: 'inktober.png'
    },
    {
        id: 'dead-air',
        img: 'test.jpg'
    }
]

const projectSlots = {
    web:document.querySelector('.projet.web'),
    prog: document.querySelector('.projet.prog'),
    design: document.querySelector('.projet.design')
}

projectSlots.web && assignRandomProject(projectSlots.web, web_projects);
projectSlots.prog && assignRandomProject(projectSlots.prog, prog_projects);
projectSlots.design && assignRandomProject(projectSlots.design, design_projects);

function assignRandomProject(slot, projects) {
    const img = slot.querySelector('img');
    const project = projects[Math.floor(Math.random() * projects.length)];
    console.log(project);

    img.src = `img/projects/${project.img}`;
    
    slot.onclick = () => {
        location.href = `projets.html#${project.id}`
    }
}