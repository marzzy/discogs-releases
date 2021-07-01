import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import fetch from 'node-fetch';
import { getRequest, getSearchRequestUrl } from 'helpers/requests';
import { usePrevious } from 'helpers/utils';
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
  const classes = useStyles();
  const { data } = props;
  const [loading, setLoading] = useState(false);
  const [searchValue , setSearchValue] = useState('');
  const [searchResponse, setSearchResponse] = useState(data);
  const { pagination, results } = searchResponse;
  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = usePrevious(currentPage);
  const isFirstRender = useRef(true);
  //TODO: send it to homeManager.js
  function handlePageChange(event, value) {
    setCurrentPage(value);
    setLoading(true);
  }

  function changeSearchVal(event) {
    setSearchValue(event.target.value);
    setLoading(true);
  };

  useEffect(function searchOnValueChange() {
    if(isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const isPageChange = prevPage !== currentPage;

      const delayDebounceFn = setTimeout(async function fetchData() {
        const res = await fetch(getRequest(getSearchRequestUrl(searchValue, isPageChange ? currentPage : 1)));
        const data = await res.json();

        if (!isPageChange) {
          setCurrentPage(1);
        }
        setSearchResponse(data);
        setLoading(false);
      }, isPageChange ? 0 : 1500);

      return () => clearTimeout(delayDebounceFn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentPage]);

  return (
    <div>
      <section className={classes.cardsWrapper}>
        <div className={classes.sideElementsWrapper}>
          <header>
            {searchValue ? `Search results for ${searchValue}` : 'Releases'}
          </header>
          <div>
            <form noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={changeSearchVal} />
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
                  color="primary"
                  onChange={handlePageChange}/>
              </div>
            </>
        }
      </section>
    </div>
  );
}

export default Home;
