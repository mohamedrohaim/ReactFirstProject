
import './App.css'
import Alert from './Component/ui/Alert/Alert'

import {Ban } from 'lucide-react';


function App() {

  return (
    <>
     <Alert type='alert-error'
      icon={<Ban />} 
      title='Alert Title From App'
      descreption='Lorem, aipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, ab excepturi, fuga facere adipisci recusandae minima vitae velit atque ullam ut quam error itaque iure quod nisi eos reprehenderit!'
      />
     <Alert type='alert-info'
      icon={<Ban />} 
      title='Alert Title From App'
      descreption='Lorem, aipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, ab excepturi, fuga facere adipisci recusandae minima vitae velit atque ullam ut quam error itaque iure quod nisi eos reprehenderit!'
      />
     <Alert type='alert-success'
      icon={<Ban />} 
      title='Alert Title From App'
      descreption='Lorem, aipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, ab excepturi, fuga facere adipisci recusandae minima vitae velit atque ullam ut quam error itaque iure quod nisi eos reprehenderit!'
      />
      
     <Alert type='alert-default'
      icon={<Ban />} 
      title='Alert Title From App'
      children={
        <>
      <div >
        Lorem, aipsum dolor  adipisicing elit. Explicabo tenetur, ab excepturi, fuga facere adipisci recusandae minima vitae velit atque ullam ut quam error itaque iure quod nisi eos reprehenderit!
      </div>
      <a href="">sit amet consectetur</a>
      </>
    }
      />
    </>
  )
}

export default App
