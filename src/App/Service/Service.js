import Projects from './dataProjects.json';

class Service {
    getProjects = () => {
        const data = Object.entries(Projects);
        const sortDate = [];
        data.forEach(item => {
            sortDate.push(item[1])
        })
        return sortDate;
    }
}

export default Service;