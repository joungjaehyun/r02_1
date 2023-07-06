import {Link} from 'react-router-dom'

const SampleNav = () => {
  return ( 
    <div className=' flex m-6 p-4 text-white font-extrabold'>
      <div>
      <Link to="/"><img  className='w-[10vh] h-[10vh]' src={require('../../image/logo.jpg')}></img> </Link>
      </div>
      <div className='m-3 text-3xl border-b-2' >
        <Link to="/">Main</Link>
      </div>
      <div  className='m-3 text-3xl border-b-2'>
        <Link to="/about">About</Link>
      </div>
      <div  className='m-3 text-3xl border-b-2'>
        <Link to="/board/list">Board</Link>
      </div>
      
    </div>
  );
}
 
export default SampleNav;