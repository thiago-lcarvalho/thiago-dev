import { Header } from './Header'
import { First } from './First'
import { Second } from './Second'
import { Third } from './Third'
import { Contact } from './Contact'

export function App() {
  
  return (
      <>
      <Header />
      <First />
      <Second />
      <Third /> {/* only spotify api + explanation  + self-info on first card */}
      {/* add fourth section with contact info */}
      <Contact />
      </>
  )
}


