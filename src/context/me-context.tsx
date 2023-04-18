import { createContext, useContext, FunctionComponent, useEffect, useState, PropsWithChildren } from "react";

type MeContextType = {
  loading: boolean;
  loggedin: boolean;
  userName: string;
  expiredAt: Date | null;
  reloadMe: (logout?: boolean) => void;
  isExpired: () => boolean;
}

const MeContext = createContext<MeContextType>({
  loading: true,
  loggedin: false,
  userName: '',
  expiredAt: null,
  reloadMe: () => {
    return;
  },
  isExpired: () => false,
})

const MeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [me, setMe] = useState<Omit<MeContextType, 'reloadMe' | 'isExpired'>>({
    loading: true,
    loggedin: false,
    userName: '',
    expiredAt: null,
  })
  const isExpired = () => {
    const now = new Date();
    return !me.expiredAt || me.expiredAt < now;
  }
  const setLogoutStatus = (expire: Date) => {
    setMe({
      ...me,
      expiredAt: expire,
    })
  }
  // graphqlを介して取得する処理
  
  const reloadMe = async(logout?: boolean) => {
    if(logout) {
      const expire = new Date();
      setMe({
        ...me,
        loading: false,
        loggedin: false,
        userName: '',
        expiredAt: expire,
      })
    }else{
      setMe({
        ...me,
        loading: true,
      })
    }
  }

  useEffect(() => {
    if(isExpired()){
      reloadMe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired()])

  return (
    <MeContext.Provider
      value={{
        ...me,
        reloadMe, 
        isExpired
      }}
    >
      {children}
    </MeContext.Provider>
  )
}

const useMeContext = () => useContext(MeContext);
export { MeContext, MeProvider, useMeContext};