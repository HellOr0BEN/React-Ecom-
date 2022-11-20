import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Rating,
  List,
  ListItem,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//Mui icon
import DoneIcon from "@mui/icons-material/Done";
//Mui icon

//Styled Component
const ColorBox = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props: any) =>
    props.selected ? "white" : "rgba(0,0,0,0)"} !important;
  background: ${(props: any) => props.color};
`;
const PlusMinusBtn = styled(Button)`
  display: flex !important;
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  color: black !important;
  justify-content: center;
  align-items: center;
  height: 25px !important;
  width: 25px !important;
  border-radius: 0px !important;
`;
const BiggerBtn = styled(Button)`
  display: flex !important;
  color: white !important;
  justify-content: center !important;
  align-items: center !important;
  height: 50px !important;
  flex-grow: 1 !important;
  border-radius: 0px !important;
  background: ${(props: any) => props.bg} !important;
`;
//Styled Component

const InformationSection = () => {
  const [rating, setRating] = useState<number | null>(4);
  return (
    <Box>
      <Typography variant="h4" component="h2">
        Remax Bluetooth Headphone RB-725HB
      </Typography>
      <Stack direction="row" spacing={1} mt={2}>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event: any, newValue: number | null) => {
            setRating(newValue);
          }}
        />
        <Typography sx={{ color: "grey" }}>(3 customer review)</Typography>
      </Stack>
      <Typography variant="h4" component="h4" mt={2}>
        Rs 6,790
      </Typography>
      <ItemFeatures />
      <ColorSelector />
      <GoToCart />

      <Typography sx={{ color: "#9C4646" }} mt={3}>
        5-Day Returns • 6 Months Warranty • Free Delivery Over Rs5000.
      </Typography>
    </Box>
  );
};

const ItemFeatures = () => {
  const features = [
    "7 hours of payback with 60 hours on standby.",
    "Bluetooth 5.0 for smooth and low-latency connections.",
    "Wireless compatibility with any smartphones, laptops & desktops with Bluetooth Connectivity.",
    "Large 40mm drivers play high-quality audio with rich bass.",
    "Control buttons for playback and calls.",
    "Wireless range of up to 10 meters.",
    "A high-quality mic is standard on every RB-725HB.",
    "Supports music playback from SD Card input.",
    "6 Months Warranty",
  ];

  return (
    <List
      sx={{
        listStyleType: "disc",
        pl: 1,
        "& .MuiListItem-root": {
          display: "list-item",
        },
        color: "rgb(100,100,100)",
      }}
    >
      {features.map((feature, index) => (
        <ListItem key={index}>
          <Typography>{feature}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

const ColorSelector = () => {
  const [color, setColor] = useState("#3B3B3B");
  const colors = ["#3B3B3B", "#B1B1B1", "#8FB55D", "#FF661D"];
  return (
    <Box mt={2}>
      <Typography variant="h6" component="h6">
        COLORS
      </Typography>
      <Stack direction="row" spacing={1} mt={1}>
        {colors.map((value, index) => (
          <ColorBox
            key={index}
            selected={color === value}
            color={value}
            onClick={() => setColor(value)}
          >
            <DoneIcon sx={{ height: "20px" }} />
          </ColorBox>
        ))}
      </Stack>
      <Typography
        sx={{
          fontSize: "10px",
          color: "grey",
          cursor: "pointer",
          padding: "0 5px",
        }}
        mt={1}
        onClick={() => setColor("")}
      >
        CLEAR
      </Typography>
    </Box>
  );
};

const GoToCart = () => {
  const count = useSelector((state: any) => state);
  const dispatch = useDispatch();
  console.log(count);

  // const [itemNo, setItemNo] = useState(1);
  // const handleSubstraion = () => {
  //   if (itemNo > 1) {
  //     setItemNo(itemNo - 1);
  //   }
  // };
  return (
    <Stack direction="row" spacing={2} mt={2}>
      <Box>
        <Stack direction="row">
          <Stack
            direction="row"
            sx={{
              width: "50px",
              height: "50px",
              background: "white",
              color: "black",
              border: "1px solid rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "25px", fontWeight: "700" }}>
              {count.counter}
            </Typography>
          </Stack>
          <Stack direction="column">
            <PlusMinusBtn
              variant="outlined"
              onClick={() => dispatch({ type: "INCREASE" })}
            >
              <Typography>+</Typography>
            </PlusMinusBtn>
            <PlusMinusBtn
              variant="outlined"
              onClick={() => dispatch({ type: "DECREASE" })}
            >
              <Typography>-</Typography>
            </PlusMinusBtn>
          </Stack>
        </Stack>
      </Box>
      <BiggerBtn bg="#F8D135">
        <Typography>ADD TO CART</Typography>
      </BiggerBtn>
      <BiggerBtn bg="#000000">
        <Typography>BUY NOW</Typography>
      </BiggerBtn>
    </Stack>
  );
};

export default InformationSection;
