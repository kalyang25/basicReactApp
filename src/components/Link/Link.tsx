import * as React from 'react';

const Link = (props: any) => {
    return (
        <a href={props.url} title={props.title}>{props.name}</a>
    )
};

export default Link;