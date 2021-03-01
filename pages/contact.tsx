import React from 'react'
import Contact from '../components/Contact';
import HeadTitle from '../components/HeadTitle';

interface contactProps {

}

const contact: React.FC<contactProps> = ({}) => {
        return (
            <>
                <HeadTitle title='Contact' />
                <Contact />
            </>
        );
}


export default contact