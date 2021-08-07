import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  item:{
      padding: 1,
      maxHeight: 1
  },
  toolbar: {
    marginTop:0,
  },
}));