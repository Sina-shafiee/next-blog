import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-4 font-medium text-lg'>
        <li className='hover:underline'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
