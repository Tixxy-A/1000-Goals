import { Link } from 'react-router-dom';


export default function Header() {
  
    return (
        <div className='p-2 px-8 z-20 flex w-full justify-between  '>

            
            <header className=' w-1/3 flex justify-around'>
                <Link to={'/'}className='flex py-2 px-8 text-lg font-bold text-gray-800 h-2/5 '>home</Link>
                <Link to={'/game'} className='py-2 px-8 text-lg font-bold h-2/5 text-gray-600  '>play</Link>
                
            </header>
            
        </div>
    );
}