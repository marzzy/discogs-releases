import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import Cards from './components/cards';
import useHomeManager from './homeManages';
import useStyles from './homeStyles';

function Home(props) {
  const classes = useStyles();
  const {
    data: {
      loading,
      searchValue,
      pagination,
      results,
      currentPage
    },
    action: {
      handlePageChange,
      handleChangeSearchVal
    }
  } = useHomeManager(props);


  //TODO: style loading
  return (
    <>
      <section className={classes.root}>
        <div className={`${classes.sideElementsWrapper} ${classes.headerWrapper}`}>
          <header className={classes.header}>
            {searchValue ? `Search results for "${searchValue}"` : 'Releases'}
          </header>
          <div>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="search for something"
                variant="outlined"
                onChange={handleChangeSearchVal}
              />
            </form>
          </div>
        </div>

        {
          loading ? <p>loading...</p> :
            <>
              <Cards data={results}/>
              <div className={classes.sideElementsWrapper}>
                <Pagination
                  count={pagination.pages}
                  page={currentPage}
                  color="secondary"
                  onChange={handlePageChange}
                  variant="outlined"
                  size="small"
                  className={classes.pageInation}
                />
              </div>
            </>
        }
      </section>
    </>
  );
}

export default Home;
