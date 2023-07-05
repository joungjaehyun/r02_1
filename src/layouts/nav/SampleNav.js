import {Link} from 'react-router-dom'

const SampleNav = () => {
  return ( 
        <div className='container m-auto  flex  text-2xl w-[1000px] h-[10vh] bg-gray-500'>
          <div><img className='h-[92.5px]' src={require('../../image/logo.jpg')}></img></div>
         
          <Link className='p-5' to={"/"}>Main</Link>
          <Link className="p-5 "to={"/about"}>About</Link>
          <div className='p-5'>Evnet</div>
          <div className='p-5'>Coupon</div>
        
        </div>
  );
}
 
export default SampleNav;