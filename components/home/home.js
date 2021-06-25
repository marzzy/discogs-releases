import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import Cards from './components/cards';

//TODO: send it to styles.js
const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  sideElementsWrapper: {
    height: '10vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: theme.breakpoints.up('sm') ? 'row': 'column',
  },
}));

function Home(props) {
  {console.log(props)}
  const classes = useStyles();
  const { pagination, results } = props;
  //TODO: send it to homeManager.js
  function handlePageChange(event, value) {
    //TODO: take action when page change
    console.log('page changed: ', event, value);
  }

  function handleSearch (event) {
    //TODO: take action when search
    console.log('search item: ',event.target.value);
  };

  return (
    <div>
      <section className={classes.cardsWrapper}>
        <div className={classes.sideElementsWrapper}>
          <header >
            releases / search results on releasess
          </header>
          <div>
            <form noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleSearch} />
            </form>
          </div>
        </div>

        <Cards data={results}/>
        <div className={classes.sideElementsWrapper}>
          <Pagination count={pagination.pages} color="primary" onChange={handlePageChange}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
