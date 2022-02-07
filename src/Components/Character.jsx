import { Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
const useStyle=makeStyles({
    image:{
        width:'100%',
        height:300,
        objectFit:'cover'
    },
    container:{
        width:200,
        margin:10,
        position:'relative'
    },
    component:{
        position:'absolute',
        top:0,
        background:'#000000',
        color:'#fff',
        width:'100%',
        height:300,
        opacity:'0.5'
    }
})



const Character = ({value}) => {
    const classes=useStyle();
    const [toggle,setToggle]=useState(false);

    const toggleHover = ()=> {
        setToggle(!toggle)

    }



    return (
        value.characterImageFull ?
        <Card className={classes.container} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
        <img className={classes.image} src={value.characterImageFull} />
        {
            toggle ?
            <Box className={classes.component}>
                <Typography>Name: {value.characterName}</Typography>
                <Typography>Real Name: {value.actorName}</Typography>
                <Typography>House: {value.houseName}</Typography>
                <Typography>Nickname: {value.nickname}</Typography>




            </Box>
            : ''
        }
       
        </Card> : ''
    )
}

export default Character;
