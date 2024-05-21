import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojies: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "exceptinal", boxSize: "35px" },
    5: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  };

  if (rating < 3) return null;

  return <Image marginTop={1} {...emojies[rating]} />;
};

export default Emoji;
