import React from 'react'
import About from '../components/About';
import HeadTitle from '../components/HeadTitle';

interface aboutProps {

}

const about: React.FC<aboutProps> = ({}) => {
        return (
            <>
                <HeadTitle title='About' />
                <About/>
            </>
        );
}


export default about