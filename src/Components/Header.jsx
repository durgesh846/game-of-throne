import {AppBar, Toolbar} from '@mui/material';
// import { makeStyles } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import logo from '../Images/logo.jpg';


const useStyle = makeStyles({
    image:{
        width:250
        
    },
    header:{
        background:'#000000',
        
        
    }
})
const Header = () => {
    const classes=useStyle();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <img src={logo} alt="image" className={classes.image}/>


            </Toolbar>
        </AppBar>
        
    )
}

export default Header
