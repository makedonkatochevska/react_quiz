import { Howl } from "howler";

export default function useSound(url: string) {
  const sound = new Howl({
    src: [url],
    volume: 0.5,
    html5: true,
  });
  return () => sound.play();
}
