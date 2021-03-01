import Head from 'next/head';
import React from 'react'

interface HeadTitleProps {
    title: string
}

const HeadTitle: React.FC<HeadTitleProps> = ({title}) => {
        return (
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title} / Portfolio</title>
                <link rel="shortcut icon" type="image/png" href="/icon.png" sizes="50x32"/>
                <meta name="title" content="Kit Harvey" />
                <meta
                name="description"
                content="I'm a self-taught front-end developer. I help clients and companies build their web user interfaces using React, TypeScript and Sass."
                />
            </Head>
        );
}


export default HeadTitle