
import React, {createContext, ReactNode} from 'react';
import {RootStore} from './stores/RootStore';


let store: RootStore;

// create the context
export const StoreContext = createContext<RootStore | undefined>(undefined);

/**
 *
 *  @name RootStoreProvider
 *  @function
 *  @return {StoreContext} with provided root store
 */
function RootStoreProvider({children}: { children: ReactNode }) {
  //  store is a singleton
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={ root }> { children } </StoreContext.Provider>;
}

export default RootStoreProvider;
