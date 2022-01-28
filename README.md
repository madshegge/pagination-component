# ts-react-pagination
Paginate grids or other components that handle a lot of data.


### Usage

import the component and call it:

```javascript
const [currentPage, setCurrentPage] = useState(1);
const PageSize = 10;

return (

  <Pagination
    currentPage={currentPage} // current page state variable
    totalCount={dataset.length} // your dataset
    pageSize={PageSize} //how many posts per page
    onPageChange={(page: number) => {
    setCurrentPage(page);
    }}
  />
  
);
```
