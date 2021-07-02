import { useState, useEffect, useRef } from 'react';
import fetch from 'node-fetch';
import { getRequest, getSearchRequestUrl } from 'helpers/requests';
import { usePrevious } from 'helpers/utils';

function useHomeManager(props) {
  const { data } = props;
  const [loading, setLoading] = useState(false);
  const [searchValue , setSearchValue] = useState('');
  const [searchResponse, setSearchResponse] = useState(data);
  const { pagination, results } = searchResponse;
  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = usePrevious(currentPage);
  const isFirstRender = useRef(true);

  function handlePageChange(event, value) {
    setCurrentPage(value);
    setLoading(true);
  }

  function handleChangeSearchVal(event) {
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

  return {
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
  };
}

export default useHomeManager;
