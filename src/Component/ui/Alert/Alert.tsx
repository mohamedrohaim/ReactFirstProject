import './index.scss'
import { BellRing, X } from 'lucide-react';

interface IProps{

}

const Alert= ({}: IProps)=>{
    return (
        <div className='alert-danger'>
            <div className='alert-header'>
            <div className='alert-title'>
                 <BellRing />
                <h4>Alert Title</h4>
            </div>
            <span className='remove-icon'  >
                <X size={18} />
            </span>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, ab excepturi, fuga facere adipisci recusandae minima vitae velit atque ullam ut quam error itaque iure quod nisi eos reprehenderit!
            </p>
        </div>

    )
}

export default Alert