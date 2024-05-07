import React , { useContext , createContext , useState} from 'react'
 
const Appcontent = createContext();

const Content = ({ children }) => {
    const [checkeSidebar , setcheckedSidbar] = useState(true);
    const functionchecked = () =>{
        setcheckedSidbar(!checkeSidebar)
    }
  return (
    <Appcontent.Provider value={{checkeSidebar , functionchecked}}>
      {children}
    </Appcontent.Provider>
  )
}

export default Content
export const UseglobalContent = () =>{
    return useContext(Appcontent);
}