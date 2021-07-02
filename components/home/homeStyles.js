import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  sideElementsWrapper: {
    height: '15vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    background: '#3c3c3c69'
  },
  headerWrapper: {
    height: '20vh',
  },
  loading: {
    height: '65vh',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    fontSize: '3em',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  textField: {
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '& label.Mui-focused, & label': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'lightblue',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& input': {
        color: 'white'
      }
    }
  },
  pageInation: {
    '& .MuiPaginationItem-page.MuiPaginationItem-outlinedSecondary.Mui-selected': {
      background: 'white',
      color: '#d22749'
    },
    '& .MuiPaginationItem-page.MuiPaginationItem-outlinedSecondary': {
      color: 'white'
    }
  }
}));

export default useStyles;
