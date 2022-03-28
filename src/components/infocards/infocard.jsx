import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  //v5.0.0
  typography: {
    h6: {
        fontSize: [16, "!important"]
    }
  }});
export default function InfoCard(props) {
return (
	<div>
    <ThemeProvider theme={theme}>
	<Card
		style={props.style}
	>
		<CardContent>
		<Typography variant="h6" component="h3" fontSize="1rem">
			{props.title}
    </Typography>
		<Typography variant="body2" component="p">
			{props.info}
		</Typography>
		</CardContent>
	</Card>
  </ThemeProvider>
	</div>
);
}
