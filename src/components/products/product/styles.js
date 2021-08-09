import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    height: 485,
    width:'100%',
    display: 'flex',
    flexFlow: 'column',
  },

  rootClicked: {
    height:'100%',
    maxHeight: 485,
  },

  actionAreaClicked:{
    height: 400
  },

  mediaClicked: {
    height: 350,
    width: '100%', // 16:9
  },

  mediaNotClicked: {
    height: 400,
    paddingTop: '56.25%',
    width: '100%', // 16:9
    marginTop:'30'
  },

  cardContent:{
    fontSize:20,
    paddingTop:10,
    paddingLeft: 20,
    flexGrow: 1,
    marginBottom: 0,
  },

  title:{
    fontSize:20,
    maxHeight: '10px'
  },

  price:{
    fontSize: 30,
    position:'absolute',
    bottom:20,
    right:20,
  },

  boton:{
    margin:10,
    background:'transparent'
  },
  botonHolder:{
    position: 'relative',
    marginTop: 0,
    background:'white'
  } 
}));