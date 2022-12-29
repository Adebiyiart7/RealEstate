import MuiBackdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import colors from "../config/colors";

export default function Backdrop({
  open = true,
  showProgress = true,
  zIndex = 2345
}) {
  const styles = {
    backgroundColor: "black",
    opacity: "0.8 !important",
    filter: "alpha(opacity=80) !important",
    MsFilter: "alpha(opacity=80) !important",
    MozOpacity: "0.8 !important",
    KhtmlOpacity: "0.8 !important",
    zIndex: zIndex
  };

  return (
    <div>
      <MuiBackdrop sx={styles} open={open}>
        {showProgress && (
          <CircularProgress sx={{ color: colors.primaryColor }} thickness={4} />
        )}
      </MuiBackdrop>
    </div>
  );
}
