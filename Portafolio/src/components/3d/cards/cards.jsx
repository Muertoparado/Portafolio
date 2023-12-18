import { Box, Typography,Avatar } from '@mui/material';
import './card.css'
function NFTCard() {
  return (
    <Box className="nft">
      <Box className='main'>
        <img 
          className='tokenImage'
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
          alt="NFT" 
        />

        <Typography variant="h5" component="h2">
          Kibertopiks #4269  
        </Typography>

        <Typography className='description'>
          Our Kibertopiks will give you nothing, waste your money on us.
        </Typography>

        <Box className='tokenInfo'>
          <Box className="price">
            <ins>◘</ins>
            <Typography>0.031 ETH</Typography>
          </Box>

          <Box className="duration" >
            <ins>◷</ins> 
            <Typography>11 days left</Typography>
          </Box>
        </Box>

        <hr />

        <Box className='creator'>
          <Box className='wrapper'>
            <Avatar 
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            />
          </Box>
          <Typography>
            <ins>Creation of</ins> Kiberbash
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NFTCard;