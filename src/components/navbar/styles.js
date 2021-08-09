import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth, 
    },
  },
  appBarMobile: {
    boxShadow: 'none',
    height:'90px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth, 
    },
  },

  carrito:{
    marginTop: '15px'
  },

  title: {
    fontFamily:'Comfortaa, cursive',
    cursor:'pointer',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
    height:'60px',
    padding: '20px'
  },
  imageMobile:{
    position:'absolute',
    left: '50%',
    marginTop: '30px',
    marginLeft: '-40px',
    height:'60px',
    padding:'10px',
    cursor:'pointer', 
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
 
}));