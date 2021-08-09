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

  content:{
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },

  keepBuying:{
    transition: 'all 1s ease',
    fontFamily: 'Comfortaa, cursive',
    '&:hover': {
      fontSize: '20px',
    },
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

  cardDetailsMobile: {
    height: '100%',
    marginTop: '2%',
    width: '100%',
    justifyContent: 'space-between',
  },

  cardDetails: {
    marginTop: '2%',
    width: '100%',
    display: 'flex',
    alignItems : 'left',
    flexDirection : 'row',
    justifyContent : 'left'
  },

  subtotal:{
    fontSize:40,
    background:'transparent',
    marginRight:'20px'
  },

  //container
  subtotalContainer:{
    display: 'flex',
    justifyContent: 'space-between',
  },

  subtotalContainerMobile:{
    display: 'flex',
    justifyContent: 'space-between',
  },

  //subtotal
  subtotalMobile:{
    width: '50%',
    marginTop:'10px',
    fontSize: 30,
  },

  total:{
    fontSize: 25,
    fontFamily: 'Arial',
    marginTop: '-10px'
  },

  totalMobile:{
    fontSize: 20,
    fontFamily: 'Arial'
  },

  //botones
  buttons:{
    marginTop:'30px',
    marginLeft: '30%'
  },
  
  buttonsMobile:{
    marginTop:'10px',
    display: 'flex',
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'center'
  }
  
}));