import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: 500,
    display: 'flex',
    flexFlow: 'column',
    marginRight: 10
  },

  rootClicked: {
    maxWidth: 345,
    height:'100%',
    maxHeight: 500,
  },

  mediaClicked: {
    paddingTop: '56.25%',
    width: '100%', // 16:9
    marginTop:'30'
  },

  mediaNotClicked: {
    height: 450,
    paddingTop: '56.25%',
    width: '100%', // 16:9
    marginTop:'30'
  },

  cardContent:{
    fontSize:20,
    padding:20,
    flexGrow: 1,
    marginBottom: 0,
  },
  title:{
    fontSize:20,
  },
  price:{
    fontSize: 30,
  },
  boton:{
    margin:10
  },
  botonHolder:{
    marginTop: 0
  }
  

  
}));