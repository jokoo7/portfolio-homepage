import { Button } from '@/components/button';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <h1 className="">Hello Word</h1>
      <Button size="icon" variant="default">
        <FaInstagram />
      </Button>
    </>
  );
}
