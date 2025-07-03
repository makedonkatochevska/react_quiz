import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Prop {
  dimensions?: object;
}

export default function Loading({ dimensions }: Prop) {
  return (
    <DotLottieReact
      src="https://lottie.host/d2365c54-394e-4811-8705-a24ab0611181/AVRgrq7Jd7.lottie"
      loop
      autoplay
      style={dimensions}
    />
  );
}
