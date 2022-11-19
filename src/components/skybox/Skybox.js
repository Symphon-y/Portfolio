import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
const Skybox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    '/images/top.jpg',
    '/images/Middle.jpg',
    '/images/Middle2.jpg',
    '/images/Middle3.jpg',
    '/images/Middle4.jpg',
    '/images/bottom.jpg',
  ]);

  scene.background = texture;
  return null;
};

export default Skybox;
