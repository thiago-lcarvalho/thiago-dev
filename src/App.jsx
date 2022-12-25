import { Header } from './Header'
import { First } from './First'
import { Second } from './Second'
import { Third } from './Third'


export function App() {
  
  return (
      <>
      <Header /> {/* remove spotify, keep on third */}
      <First />
      <Second /> {/* change icon organization */}
      <Third /> {/* only spotify api + explanation  */}
      {/* add fourth section with contact info */}
      </>
  )
}


