import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontFamily: 'Comfortaa, cursive'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {

    display: 'flex',
    marginTop: '2%',
    width: '100%',
    justifyContent: 'space-between',
  },
  content:{
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  keepBuying:{
    fontFamily: 'Comfortaa, cursive',
  },
  buttonStartBuying:{
    transition: 'all .5s ease',
    backgroundColor:'transparent',
    fontFamily: 'Comfortaa, cursive',
    border: '3px solid black',
    '&:hover': {
      backgroundColor: 'Black',
      color: 'white'
    },
    height: '60px',
    width: '220px',
    margin: '20px'
  },
  emptyContent:{
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems : 'center',
    flexDirection : 'column',
    justifyContent : 'center'
  },

  subtotal:{
    fontSize:  30
  },
  buttons:{
    marginTop:130
  }
}));