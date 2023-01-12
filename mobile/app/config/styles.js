import colors from "./colors";

const defaultStyles = {
  colors: colors,
  primaryBorderRadius: 12,
  titleFont: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    marginHorizontal: -36,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  // Start Summary Card
  summaryCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginVertical: 8,
  },
  summaryTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  summaryValue: {
    fontWeight: "500",
  },
  summarySeperator: {
    marginVertical: 6,
  },
  // end

  bottomSheetStyles: {
    content: {
      margin: 16,
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
    },
    subHeading: {
      textAlign: "center",
      color: colors.mediumText,
    },
  },
};

export default defaultStyles;
