import { Stack } from "@mui/system";

//Mui icon
import StarIcon from '@mui/icons-material/Star';
//Mui icon

const Stars = ({rating}:{rating: string}) => {
    return(
        <Stack direction="row" sx={{gap: "5px", color: "#FF9C25"}}>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        </Stack>
    )
}

export default Stars