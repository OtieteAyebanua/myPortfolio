import { Box, Container } from "@mui/material";

interface IDisplayCard {
  children: React.ReactNode;
  background?: string;
  marginTop?: string;
  height?: string;
  position?: "relative" | "absolute" | "static" | "fixed";
  overflow?: "hidden" | "auto" | "scroll";
  paddingTop?: string;
  paddingBottom?: string;
}

const DisplayCard = ({
  children,
  background,
  marginTop,
  height,
  position,
  overflow,
  paddingTop,
  paddingBottom,
}: IDisplayCard) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: `${background}`,
        mt: marginTop,
        height: height,
        position: position,
        overflow: overflow,
        pb: paddingBottom,
        pt: paddingTop,
      }}
    >
      <Container maxWidth="xl" style={{ padding: "unset" }}>
        {children}
      </Container>
    </Box>
  );
};

export default DisplayCard;
