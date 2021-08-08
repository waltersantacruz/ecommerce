import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '5%',
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
  item:{
      padding: 1,
      maxHeight: 1
  },
}));