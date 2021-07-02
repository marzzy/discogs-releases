import CircularProgress from '@material-ui/core/CircularProgress';
import Cards from './cards/cards';
import useHomeManager from './homeManages';
import useStyles from './homeStyles';
import Header from './header';
import Footer from './footer';

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


  return (
    <div className={classes.root}>
      <Header
        classes={classes}
        searchValue={searchValue}
        handleChangeSearchVal={handleChangeSearchVal}
      />

      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <Cards data={results}/>
      )
      }

      <Footer classes={classes}
        pagination={pagination}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        loading={loading}
      />
    </div>
  );
}

export default Home;
