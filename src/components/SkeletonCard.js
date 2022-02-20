import {Box, Skeleton} from "@mui/material";

function SkeletonCard() {
  return (
    <Box width={210}>
      <Skeleton width={180} style={{marginBottom: '10px'}}/>
      <Skeleton width={150} style={{marginBottom: '20px'}}/>
      <Skeleton width={210} height={210} variant={"rectangular"}/>
    </Box>
  )
}

export default SkeletonCard;
