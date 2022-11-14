import {useMemo, useState} from "react";
import {Box, Stack, Typography, Button, Slider, Checkbox, FormControlLabel} from "@mui/material";
import { pink } from '@mui/material/colors';
import styled from "styled-components";
//Mui Icon
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//Mui Icon

const Sidebar = styled(Box)`
    min-width: 300px;
    background: #FFFFFF;
    border-radius: 5px;
`;
const CustButton = styled(Button)`
    display: flex;
    width: 100%;
    max-width: 100px;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    color: rgb(100,100,100) !important;
    padding: 5x 20px !important;
    border: 1px solid rgb(150,150,150) !important;
    border-radius: 30px !important;
    &:hover {
        color: rgb(90, 90, 90) !important;
        border: 1px solid rgb(100,100,100) !important;
        background: rgba(180, 180, 180, 0.2) !important;
    }
`;

const CustFilterContainer = styled(Stack)`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: ${(props: any) => props.border? "20px 30px": "0px"};
    border-bottom: ${(props: any) => props.border? "1px solid rgba(0,0,0,0.3)": "none"};
`;

const SidebarContainer = () => {
    return(
        <Sidebar>
            <CustFilter title="Filter" btnTitle="Reset" border={true}/>
            <PriceFilter/>
            <CityFilter/>
            <ShippingFilter/>
        </Sidebar>
    );
}

//Reusable Components
const CustFilter = ({title, btnTitle, border}: {title: string, btnTitle: string | JSX.Element, border: boolean}) => {
    return (
        <CustFilterContainer direction="row" spacing={1} border={border}>
            <Typography sx={{fontSize: "1.3rem", fontWeight: "700"}}>{title}</Typography>
            <CustButton variant="outlined">{btnTitle}</CustButton>
        </CustFilterContainer>
    )
}
const ResetBtnContent = ({title}: {title: string}) => {
    return(
        <>
            <Typography sx={{textTransform: "capitalize"}}>{title}</Typography>
            <KeyboardArrowUpIcon/>
        </>
    )
}
//Resuable Components

const PriceFilter = () => {
    const [price, setPrice] = useState(80);
    const calcPrice = useMemo(() => {
        const minValue = 0;
        const maxValue = 900;

        let tempPrice = price === 0 ? minValue: (maxValue * (price/100));
        return Math.floor(tempPrice);
    }, [price]);

    return(
        <Stack spacing={2} sx={{padding: "20px 30px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
            <CustFilter title="Price" border={false} btnTitle={
                <ResetBtnContent title="Hide"/>
            }/>
            <Slider
                aria-label="Price Range"
                defaultValue={price}
                color="primary"
                onChange={(e: any) => setPrice(e.target.value)}
            />
            <Typography>Max Price. ${calcPrice}</Typography>
        </Stack>
    );
}

const CityFilter = () => {
    const checkboxTitles = ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Bardia", "Butwal"];
    return(
        <Stack spacing={2} sx={{padding: "20px 30px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
            <CustFilter title="City" border={false} btnTitle={
                <ResetBtnContent title="Hide"/>
            }/>
            <CheckBoxOptions checkboxTitles={checkboxTitles} />
        </Stack>
    );
}

const ShippingFilter = () => {
    const checkboxTitles = ["Regular", "Express", "FedEx", "Cargo", "Delight", "Same Day"];
    return(
        <Stack spacing={2} sx={{padding: "20px 30px"}}>
            <CustFilter title="City" border={false} btnTitle={
                <ResetBtnContent title="Hide"/>
            }/>
            <CheckBoxOptions checkboxTitles={checkboxTitles} />
        </Stack>
    );
}

const CheckBoxOptions = ({checkboxTitles}: {checkboxTitles: Array<String>}) => {
    return(
        <Stack spacing={1}>
            {
                checkboxTitles.map((value, index) => (
                    <FormControlLabel
                        sx={{margin: "0px"}}
                        key={index}
                        label={value}
                        control={
                            <Checkbox
                                key={index}
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                    color: pink[600],
                                    },
                                }}
                            />
                        }
                    />
                ))
            }
            <Typography sx={{fontSize: "0.9rem", color: "#0476D0"}}>See more</Typography>
        </Stack>
    )
}




export default SidebarContainer;