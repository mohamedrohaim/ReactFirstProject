import { Children, ReactNode } from 'react';
import './index.scss'
import { X } from 'lucide-react';
import { AlertTypes } from '../../../types';

interface IProps{
    type:AlertTypes;
    icon: ReactNode;
    title:string;
    descreption?:string;
    children?:ReactNode;

}

const Alert= ({type,icon,title,descreption,children}: IProps)=>{
    return (
        <div className={type}>
            <div className='alert-header'>
            <div className='alert-title'>
                 {icon}
                <h4>{title}</h4>
            </div>
            <span className='remove-icon'  >
                <X size={18} />
            </span>
            </div>
            
            {children?children:<p> {descreption}</p> }
        </div>

    )
}

export default Alert