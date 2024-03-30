import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listRequest } from '../slices/listSlice';
import { setNavigate } from '../slices/errorSlice';

export default function List() {
  const navigate = useNavigate();
  const { items, isLoading, error } = useSelector(
    (state) => state.list
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setNavigate('/'));
      navigate('/error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleClick = (id) => {
    navigate(`/${id}/details`);
  }

  return (
    <>
      {isLoading && <div className='loader loader__first'></div>}
      {error ? (
        <div>Error occured</div>
      ) : !isLoading && (
        <ul>
          {items.map((o) => (
            <li key={o.id} className='item' onClick={() => {handleClick(o.id)}}>
              <div className='item-name'>{o.name}:</div>
              <div className='item-price'>{o.price}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

