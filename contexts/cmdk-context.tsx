import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface ICmdkContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CmdkContext = createContext<ICmdkContext>({ open: false, setOpen: () => {} });
export const useCmdk = () => useContext(CmdkContext);
