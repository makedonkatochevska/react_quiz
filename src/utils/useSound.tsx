import { Howl } from "howler";

export default function useSound(url: string) {
  const sound = new Howl({
    src: [url],
    volume: 1,
  });
  return () => sound.play();
}
