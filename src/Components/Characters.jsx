import { Data } from "../Constants/Data";
import { Box, margin } from "@mui/system";
// import {First}
import { Card } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Character from "./Character";
import { Grid } from "@mui/material";



const Characters=()=>{
    
    return (
        <Box style={{margin: '30px 0px 30px 100px'}}>
            <Grid container>
            {
                Data.characters.map((value,index) =>{
                    return <Character key={index} value={value} />
                        

                        
                    

                })
            }
            </Grid>

        </Box>
    )
}
export default Characters;