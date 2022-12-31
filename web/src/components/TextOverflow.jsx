// import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";

const TextOverflow = ({ text, width, styles }) => {
  // const useStyle = makeStyles({
  // })
  // const classes = useStyle();

  return (
    <Box className={styles} component="span" sx={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      width: width,
    }}>
    &nbsp;{text}
    </Box>
  )
}

export default TextOverflow;