import React from 'react'
import HeadTitle from '../components/HeadTitle';
import Projects from '../components/Projects';

interface projectsProps {

}

const projects: React.FC<projectsProps> = ({}) => {
        return (
            <>
                <HeadTitle title='Projects' />
                <Projects />
            </>
        );
}


export default projects