import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import styles from './styles';



const PhotoCard = ({ title, src }) => {

    return (
        <>
            <Card sx={ styles().card } >
                <CardHeader
                />
                <CardMedia
                    component="img"
                    sx={ styles().photo }
                    height="150"
                    src={ src }
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        { title }
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

export default PhotoCard;