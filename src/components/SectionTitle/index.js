// * @Author: Muwonge Hassan Saava

// * @Email: hassansaava@gmail.com

// * @LinkedIn: https://www.linkedin.com/in/hassan-muwonge-4a4592144/

// * @Github: https://github.com/mhassan654

// * @GitLab: https://gitlab.com/hmuwonge

// * @Tel: +256-783-828977 / +256-704-348792
// * Web: https://muwongehassan.com

import React from 'react';
import {Grid} from "@material-ui/core";

import './style.scss';
import Hidden from "@material-ui/core/Hidden";

const SectionTitle = ({subtitle, title, body, className}) => {
    return(
        <Grid container className="container" spacing={4}>
            <Hidden smDown>
                <Grid item xs={12} md={2}></Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
                <Grid className={`sectionTitle ${className ? className : ''}`}>
                    {subtitle ? <strong>{subtitle}</strong> : ''}
                    <h2>{title}</h2>
                    {body ? <p>{body}</p> : ''}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SectionTitle;