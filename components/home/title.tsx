import { ReactNode } from "react";
import { Box } from "../ui/box";
import { Text } from "../Themed";

type Props = {
  title: string;
  desc?: string | ReactNode;
};

const HomeTitle = ({ title, desc }: Props) => {
  return (
    <Box className="px-6 py-12">
      <Text className="text-4xl font-bold text-white">{title}</Text>
      {desc && <Text className="text-lg text-gray-400">{desc}</Text>}
    </Box>
  );
};

export default HomeTitle;
