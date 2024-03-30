import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearNavigate } from '../slices/errorSlice';
import { resetListError } from '../slices/listSlice';
import { resetDetailsError } from '../slices/detailsSlice';

export default function Error() {
  const navigate = useNavigate();
  const { navigateResponse } = useSelector(
    (state) => state.error
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(navigateResponse);
    dispatch(resetListError());
    dispatch(resetDetailsError());
    dispatch(clearNavigate());
  }

  return (
    <>
      <div className='error-modal'>
        <div className='error-modal__message'>Произошла ошибка!</div>
        <button onClick={handleClick} className='error-modal__btn'>Повторить запрос</button>
      </div>
    </>
  );
}
