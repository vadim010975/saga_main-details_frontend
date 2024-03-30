import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsRequest, detailsClear } from '../slices/detailsSlice';
import { setNavigate } from '../slices/errorSlice';

export default function Details() {
  const itemId = Number(useParams().id);
  const navigate = useNavigate();
  const { item, isLoading, error } = useSelector(
    (state) => state.details
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsRequest(itemId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setNavigate(`/${itemId}/details`));
      navigate('/error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleClick = () => {
    dispatch(detailsClear());
    navigate('/');
  }

  return (
    <>
      {isLoading && <div className='loader loader__second'></div>}
      {error ? (
        <div>Error occured</div>
      ) : !isLoading && (
        <div className='details'>
          <div className='details-id'>ID: {item.id}</div>
          <div className='details-name'>Наменование: {item.name}</div>
          <div className='details-price'>Цена: {item.price}</div>
          <div className='details-content'>* {item.content}</div>
          <button onClick={handleClick} className='details-btn'>Вернуться</button>
        </div>
      )}
    </>
  );
}

