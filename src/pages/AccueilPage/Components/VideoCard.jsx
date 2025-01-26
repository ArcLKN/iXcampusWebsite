import { Box } from "@chakra-ui/react";

export default function VideoCard({ videoSrc }) {
  return (
    <Box 
      width="100vw"
      height="100vh"
      position="relative"
      overflow="hidden"
    >
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{ objectFit: "cover" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
