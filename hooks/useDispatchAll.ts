import { AnyAction } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatchAll = () => {
  const dispatch = useAppDispatch();

  return (actions: AnyAction[]) => actions.map((action) => dispatch(action));
};
